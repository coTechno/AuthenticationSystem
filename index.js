function resetFields() {
  document.getElementById("registration-form").reset();

  document.getElementById("firstValid").style.display = "none";
  document.getElementById("lastValid").style.display = "none";
  document.getElementById("emailValid").style.display = "none";
  document.getElementById("phoneValid").style.display = "none";
  document.getElementById("passwordValid").style.display = "none";
  document.getElementById("cpasswordValid").style.display = "none";
  document.getElementById("login-emailValid").style.display = "none";
  document.getElementById("login-passwordValid").style.display = "none";
}
function validate() {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phone-number").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  let loginEmail = document.getElementById("login-email").value;
  let loginPassword = document.getElementById("login-password").value;

  let error = false;

  if (firstName.length >= 2) {
    document.getElementById("firstValid").style.display = "block";
    document.getElementById("firstInvalid").style.display = "none";
  } else {
    error = true;
    document.getElementById("firstInvalid").style.display = "block";
    document.getElementById("firstValid").style.display = "none";
  }

  if (lastName.length >= 2) {
    document.getElementById("lastValid").style.display = "block";
    document.getElementById("lastInvalid").style.display = "none";
  } else {
    error = true;
    document.getElementById("lastInvalid").style.display = "block";
    document.getElementById("lastValid").style.display = "none";
  }

  if (
    email.includes("@") &&
    email.includes(".") &&
    email.indexOf("@") > 0 &&
    email.substr(email.lastIndexOf(".") + 1).length >= 2
  ) {
    document.getElementById("emailValid").style.display = "block";
    document.getElementById("emailInvalid").style.display = "none";
  } else {
    error = true;
    document.getElementById("emailInvalid").style.display = "block";
    document.getElementById("emailValid").style.display = "none";
  }

  let numberphone = parseInt(phoneNumber);

  if (
    !isNaN(numberphone) &&
    numberphone > 1000000000 &&
    numberphone <= 9999999999
  ) {
    document.getElementById("phoneValid").style.display = "block";
    document.getElementById("phoneInvalid").style.display = "none";
  } else {
    error = true;
    document.getElementById("phoneInvalid").style.display = "block";
    document.getElementById("phoneValid").style.display = "none";
  }

  if (password !== null) {
    document.getElementById("stateValid").style.display = "block";
    document.getElementById("stateInvalid").style.display = "none";
  } else {
    error = true;
    document.getElementById("stateInvalid").style.display = "block";
    document.getElementById("stateValid").style.display = "none";
  }

  if (confirmPassword === password) {
    document.getElementById("cpasswordValid").style.display = "block";
    document.getElementById("cpasswordInvalid").style.display = "none";
  } else {
    error = true;
    document.getElementById("cpasswordInvalid").style.display = "block";
    document.getElementById("cpasswordValid").style.display = "none";
  }

  if (loginEmail === email) {
    document.getElementById("login-emailValid").style.display = "block";
    document.getElementById("login-emailInvalid").style.display = "none";
  } else {
    error = true;
    document.getElementById("login-emailInvalid").style.display = "block";
    document.getElementById("login-emailValid").style.display = "none";
  }
  if (loginPassword === password) {
    document.getElementById("login-passwordValid").style.display = "block";
    document.getElementById("login-passwordInvalid").style.display = "none";
  } else {
    error = true;
    document.getElementById("login-passwordInvalid").style.display = "block";
    document.getElementById("login-passwordValid").style.display = "none";
  }
  if (!error) {
    alert("Your details have been saved successfully!");
    resetFields();
  }
}

let home = document.getElementById("home");
let signUp = document.getElementById("signup-form");
let login = document.getElementById("login-form");

function showHome() {
  signUp.style.display = "none";
  login.style.display = "none";
  home.style.display = "block";
  home.addEventListener("click", () => {
    home.classList.add("active");
    signUp.classList.remove("active");
    login.classList.remove("active");
  });
}
function showLogin() {
  home.style.display = "none";
  signUp.style.display = "none";
  login.style.display = "block";
  login.addEventListener("click", () => {
    login.classList.add("active");
    signUp.classList.remove("active");
    home.classList.remove("active");
  });
}
function showSignUp() {
  home.style.display = "none";
  login.style.display = "none";
  signUp.style.display = "block";
  signUp.addEventListener("click", () => {
    signUp.classList.add("active");
    login.classList.remove("active");
    home.classList.remove("active");
  });
}
