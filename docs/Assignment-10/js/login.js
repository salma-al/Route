var inputs = document.getElementsByTagName('input');
var emailLogin = document.getElementById('emailLogin');
var passwordLogin = document.getElementById('passwordLogin');
var loginBtn = document.getElementById('loginBtn');
var emptyAlert = document.getElementById('emptyAlert');
var incorrectAlert = document.getElementById('incorrectAlert');

var userDataArr = [];

var localStorageString = localStorage.getItem('userData');
userDataArr = JSON.parse(localStorageString) || [];

console.log(userDataArr);

loginBtn.addEventListener('click', function (e) {
  e.preventDefault();
  submitLogIn();
});

function alertEmptyIndputs() {
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value == '') {
      emptyAlert.classList.remove('d-none');
      incorrectAlert.classList.add('d-none');

      return false;
    } else {
      emptyAlert.classList.add('d-none');

      return true;
    }
  }
}

function incorrectData() {
  var isLoginCorrect = false;
  for (var i = 0; i < userDataArr.length; i++) {
    if (
      userDataArr[i].email == emailLogin.value &&
      userDataArr[i].password == passwordLogin.value
    ) {
      isLoginCorrect = true;
      localStorage.setItem('sessionName', userDataArr[i].name);
      break;
    }
  }

  if (isLoginCorrect) {
    incorrectAlert.classList.add('d-none');
  } else {
    incorrectAlert.classList.remove('d-none');
  }

  return isLoginCorrect;
}

function submitLogIn() {
  alertEmptyIndputs();
  incorrectData();

  if (alertEmptyIndputs() && incorrectData()) {
    window.location.href = './home.html';
  }
}
