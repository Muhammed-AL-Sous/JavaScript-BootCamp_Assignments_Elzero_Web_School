document.addEventListener("DOMContentLoaded", () => {
  let user = document.getElementById("name");
  let age = document.getElementById("age");
  let email = document.getElementById("mail");
  let options = document.getElementById("options");

  let userSaved = window.sessionStorage.getItem("name");

  user.onblur = function () {
    window.sessionStorage.setItem("name", this.value);
  };

  if (userSaved) {
    user.value = userSaved;
  }

  age.onblur = function () {
    window.sessionStorage.setItem("age", this.value);
  };

  let ageSaved = window.sessionStorage.getItem("age");

  if (ageSaved) {
    age.value = ageSaved;
  }

  email.onblur = function () {
    window.sessionStorage.setItem("email", this.value);
  };

  let emailSaved = window.sessionStorage.getItem("email");

  if (emailSaved) {
    email.value = emailSaved;
  }

  options.onchange = function () {
    window.sessionStorage.setItem("option", this.value);
  };

  let optionSaved = window.sessionStorage.getItem("option");

  if (optionSaved) {
    options.value = optionSaved;
  }
});
