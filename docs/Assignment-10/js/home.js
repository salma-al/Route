var sessionName = document.querySelector('h1 #sessionName');
var logOut = document.getElementById('logOut');

var localStorageName = JSON.parse(localStorage.getItem('sessionName'));

console.log(localStorageName);
sessionName.innerHTML = localStorageName;

logOut.addEventListener('click', function () {
  window.location.href = 'index.html';
});
