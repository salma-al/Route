var inputs = document.getElementsByTagName('input');
var emailInput = document.getElementById('emailLogin');
var nameLogin = document.getElementById('nameLogin');
var passwordLogin = document.getElementById('passwordLogin');
var emptyAlert = document.getElementById('emptyAlert');
var signUpBtn = document.getElementById('signUpBtn');
var successAlert = document.getElementById('successAlert');
var emailExistAlert = document.getElementById('emailExistAlert');

var userDataArr = [];

var localStorageString = localStorage.getItem('userData');
userDataArr = JSON.parse(localStorageString) || [];

signUpBtn.addEventListener('click', function (e) {
  e.preventDefault();
  submitSignUp();
});

function alertEmptyIndputs() {
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value == '') {
      emptyAlert.classList.remove('d-none');
      successAlert.classList.add('d-none');
      emailExistAlert.classList.add('d-none');

      return false;
    }
  }
  emptyAlert.classList.add('d-none');
  return true;
}

function successInput() {
  var isEmailDuplicate = false;

  for (var i = 0; i < userDataArr.length; i++) {
    if (userDataArr[i].email == emailInput.value) {
      isEmailDuplicate = true;
      break;
    }
  }

  if (isEmailDuplicate) {
    successAlert.classList.add('d-none');
    emailExistAlert.classList.remove('d-none');
  } else {
    successAlert.classList.remove('d-none');
    emailExistAlert.classList.add('d-none');
  }

  return !isEmailDuplicate;
}

function submitSignUp() {
  var userData = {
    name: nameLogin.value,
    email: emailInput.value,
    password: passwordLogin.value,
  };

  if (alertEmptyIndputs() && successInput()) {
    userDataArr.push(userData);
    localStorage.setItem('userData', JSON.stringify(userDataArr));
  }

  console.log(userDataArr);
}
