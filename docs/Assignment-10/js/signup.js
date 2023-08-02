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

function submitSignUp() {
  var userData = {
    name: nameLogin.value,
    email: emailInput.value,
    password: passwordLogin.value,
  };

  if (alertEmptyIndputs() && successInput() && validationAll()) {
    userDataArr.push(userData);
    localStorage.setItem('userData', JSON.stringify(userDataArr));

    successAlert.classList.remove('d-none');
  } else {
    successAlert.classList.add('d-none');
  }
  // console.log(userDataArr);
}

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

function validationAll() {
  if (validationName() && validationEmail() && validationPassword()) {
    return true;
  }
}

function validationName() {
  const nameAlert = document.getElementById('nameAlert');
  const nameInput = nameLogin.value;
  const regexName = /^[a-zA-z]{2,}$/;

  if (regexName.test(nameInput)) {
    nameLogin.classList.add('is-valid');
    nameLogin.classList.remove('is-invalid');
    nameAlert.classList.add('d-none');

    return true;
  } else {
    nameLogin.classList.add('is-invalid');
    nameLogin.classList.remove('is-valid');
    nameAlert.classList.remove('d-none');

    return false;
  }
}

function validationEmail() {
  const emailAlert = document.getElementById('emailAlert');
  const regexEmail = /^[a-zA-Z]{2,}@[a-zA-Z]{2,}\.com$/;

  if (regexEmail.test(emailInput.value)) {
    emailInput.classList.add('is-valid');
    emailInput.classList.remove('is-invalid');
    emailAlert.classList.add('d-none');

    return true;
  } else {
    emailInput.classList.add('is-invalid');
    emailInput.classList.remove('is-valid');
    emailAlert.classList.remove('d-none');

    return false;
  }
}

function validationPassword() {
  const passwordAlert = document.getElementById('passwordAlert');
  const regexPassword = /^(?=.*\d)(?=.*[a-zA-Z]).{4,}$/;

  if (regexPassword.test(passwordLogin.value)) {
    passwordLogin.classList.add('is-valid');
    passwordLogin.classList.remove('is-invalid');
    passwordAlert.classList.add('d-none');

    return true;
  } else {
    passwordLogin.classList.add('is-invalid');
    passwordLogin.classList.remove('is-valid');
    passwordAlert.classList.remove('d-none');

    return false;
  }
}

// function validation() {
//   const nameAlert = document.getElementById('nameAlert');
//   const emailAlert = document.getElementById('emailAlert');
//   const passwordAlert = document.getElementById('passwordAlert');

//   const regexName = /^[a-zA-Z]{2,}$/;
//   const regexEmail = /^[a-zA-Z]{2,}@[a-zA-Z]{2,}\.com$/;
//   const regexPassword = /^(?=.*\d)(?=.*[a-zA-Z]).{4,}$/;

//   const isValidName = false;
//   const isValidEmail = false;
//   const isValidPassword = false;

//   if (regexName.test(nameLogin.value)) {
//     nameLogin.classList.add('is-valid');
//     nameLogin.classList.remove('is-invalid');
//     nameAlert.classList.add('d-none');

//     // isValidName = true;
//   } else {
//     nameLogin.classList.add('is-invalid');
//     nameLogin.classList.remove('is-valid');
//     nameAlert.classList.remove('d-none');

//     // isValidName = false;
//   }

//   if (regexEmail.test(emailInput.value)) {
//     emailInput.classList.add('is-valid');
//     emailInput.classList.remove('is-invalid');
//     emailAlert.classList.add('d-none');

//     // isValidEmail = true;
//   } else {
//     emailInput.classList.add('is-invalid');
//     emailInput.classList.remove('is-valid');
//     emailAlert.classList.remove('d-none');

//     // isValidEmail = false;
//   }

//   if (regexPassword.test(passwordLogin.value)) {
//     passwordLogin.classList.add('is-valid');
//     passwordLogin.classList.remove('is-invalid');
//     passwordAlert.classList.add('d-none');

//     // isValidPassword = true;
//   } else {
//     passwordLogin.classList.add('is-invalid');
//     passwordLogin.classList.remove('is-valid');
//     passwordAlert.classList.remove('d-none');

//     // isValidPassword = false;
//   }

//   if (isValidName && isValidEmail && isValidPassword) {
//     return true;
//   }
// }
