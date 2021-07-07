const form = document.getElementById("form");
const user = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repass = document.getElementById("retypepassword");
const randomPassword = document.querySelector(".generate-password");

//Form Error Function

function showError(input, msg) {
  const small = input.parentElement.querySelector("small");
  small.className = "display-show";
  small.innerText = msg;
  input.className = "error";
}

//Form Success Function

function showSuccess(input) {
  const small = input.parentElement.querySelector("small");
  small.className = "display-hidden";
  input.className = "success";
}

// Form Email Validation Function

function check_email(input) {
  if (input.value == "") {
    showError(input, "Email is required!");
  } else if (!input.value.match(/\S+@\S+\.\S+/)) {
    showError(input, "Enter a valid email!");
  } else if (
    input.value.indexOf(" ") != -1 ||
    input.value.indexOf("..") != -1
  ) {
    showError(input, "Enter a valid email!");
  } else {
    showSuccess(input);
  }
}

//User Input Validation

function userInput(input) {
  if (input.value == "") {
    showError(input, "Username is required!");
  } else {
    showSuccess(input);
  }
}

//User Password Validation

function check_Password(input) {
  if (input.value == "") {
    showError(input, "Password is required!");
  } else {
    showSuccess(input);
  }
}

//Retype Password Validation

function retype_password(password, repass) {
  if (repass.value == "") {
    showError(repass, "Password is required!");
  } else if (repass.value != password.value) {
    showError(repass, "Password is not same!");
  } else {
    showSuccess(repass);
  }
}

// Password length check

function check_pass_length(input, min, max) {
  if (input.value.length < min) {
    showError(input, "Type at least 8 characters");
  } else if (input.value.length > max) {
    showError(input, "Type less than 20 characters!");
  } else {
    showSuccess(input);
  }
}

// Form submit event

form.addEventListener("submit", function (event) {
  event.preventDefault();
  userInput(user);
  check_email(email);
  check_Password(password);
  retype_password(password, repass);
  check_pass_length(password, 8, 20);
});

// Random number generate event

randomPassword.addEventListener("click", function (event) {
  const randomstring = Math.random().toString(36).slice(-8);
  console.log(randomstring);
  document.getElementById("password").value = randomstring;
  document.getElementById("retypepassword").value = randomstring;
});
