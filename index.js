function resetFields() {
  document.getElementById("s-form").reset();
  document.getElementById("l-form").reset();

  document.getElementById("firstValid").style.display = "none";
  document.getElementById("lastValid").style.display = "none";
  document.getElementById("emailValid").style.display = "none";
  document.getElementById("phoneValid").style.display = "none";
  document.getElementById("passwordValid").style.display = "none";
}
let savedEmail = ''
let savedPassword = ''


// --------------------------------------------------------- ACTIVE CLASSES---------------------------------------------------------------
let homePage = document.getElementById("home");
let signUpPage = document.getElementById("signup-form");
let loginPage = document.getElementById("login-form");

function showHome() {
  signUpPage.style.display = "none";
  loginPage.style.display = "none";
  homePage.style.display = "block";

  document.getElementById("home-link").classList.add("active");
  document.getElementById("signup-link").classList.remove("active");
  document.getElementById("login-link").classList.remove("active");
}
function showLogin() {
  homePage.style.display = "none";
  signUpPage.style.display = "none";
  loginPage.style.display = "block";

  document.getElementById("home-link").classList.remove("active");
  document.getElementById("signup-link").classList.remove("active");
  document.getElementById("login-link").classList.add("active");
}
function showSignUp() {
  homePage.style.display = "none";
  loginPage.style.display = "none";
  signUpPage.style.display = "block";

  document.getElementById("home-link").classList.remove("active");
  document.getElementById("signup-link").classList.add("active");
  document.getElementById("login-link").classList.remove("active");
}

function signup() {
	let firstName = document.getElementById('first-name').value
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value
	let phoneNumber = document.getElementById('phone-number').value
	let password = document.getElementById('password').value
	let confirmPassword = document.getElementById('confirm-password').value

	let error = false

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

  if (password > 1000) {
    document.getElementById("passwordValid").style.display = "block";
    document.getElementById("passwordInvalid").style.display = "none";
  } else {
    error = true;
    document.getElementById("passwordInvalid").style.display = "block";
    document.getElementById("passwordValid").style.display = "none";
  }

	if(password !== confirmPassword) {
		document.getElementById('confirm-password-invalid').style.display = 'block'
		error = true
	} else {
		document.getElementById('confirm-password-invalid').style.display = 'none'
	}

	if(!error) {
		savedEmail = email
		savedPassword = password
		alert('Your details have been saved successfully!')
    resetFields()
	}
}

function login () {
	let loginEmail = document.getElementById('login-email').value
	let loginPassword = document.getElementById('login-password').value

	if(loginEmail === savedEmail && loginPassword === savedPassword) {
		alert('Access granted')
    resetFields()
	} else {
		alert('Access denied')
	}
}