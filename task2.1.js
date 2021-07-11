const form = document.getElementById('form');
const name = document.getElementById('yourname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const phoneNumber = document.getElementById('phoneNumber');
let success=0;
let regex = /^[\d,\s,\+,\-]{5,20}/;
form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
	if(success==5){
		$('#myModal').modal('show');
	}
	
});

function checkInputs() {
	// trim to remove the whitespaces
	const nameValue = yourname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	const phoneNumberValue = phoneNumber.value.trim();
	
	if(nameValue === '') {
		setErrorFor(yourname, ' Name cannot be blank');
	} else {
		setSuccessFor(yourname);
		success+=1;
	}
	
	if(emailValue === '') {
		setErrorFor(email, ' Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, ' Not a valid email');
	} else {
		setSuccessFor(email);
		success+=1;
	}
	
	if(passwordValue === '') {
		setErrorFor(password, ' Password cannot be blank');
	} else {
		setSuccessFor(password);
		success+=1;
	}
	
	if(password2Value === '') {
		setErrorFor(password2, ' This field cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, ' Passwords don\'t match');
	} else{
		setSuccessFor(password2);
		success+=1;
		
	}

	if(phoneNumberValue === '') {
		setErrorFor(phoneNumber, ' Phone Number cannot be blank');
	} else if (!isphoneNumber(phoneNumberValue)) {
		setErrorFor(phoneNumber, ' Not a valid Phone Number');
	} else {
		setSuccessFor(phoneNumber);
		success+=1;
	}
    
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isphoneNumber(phoneNumberValue){
	return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phoneNumberValue);
}

function form_reset(){
	document.getElementById('form').reset();
  }



