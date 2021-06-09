var getUserName = prompt("Hello! Who are you? Please, your name: ");

console.log(getUserName)

document.getElementById("showUserName") .innerText= getUserName;

//tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })