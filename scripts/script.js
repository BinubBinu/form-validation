'use strict';

const form = document.getElementById('form');
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirm-password"); 

const inputArr = [username, email, password, confirmpassword];

 

const checkEmail = function (input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(input.value).toLowerCase().trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
};
      

const message = function (input) {
    const errorMessage = input.name.replace(/-p/, ' P');
    return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
};

const showError = function (input, message) {
    let formControl = input.parentElement;
    formControl.classList = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};
    
const showSuccess = function (input) {
    let formControl = input.parentElement;
    formControl.classList = "form-control success";
};

const checkRequired = function (inputArr) {
    inputArr.forEach(input => {
        console.log(input); 
        if (input.value.trim() === '') {
            showError(input, `${message(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
};

const checkLength = function (input, min, max) {
    if (input.value.trim().length < min) {
        showError(input, `${message(input)} must be atleast ${min} characters`);    
    } else if (input.value.trim().length > max) {
        showError(input, `${message(input)} must be at less than ${max} characters`);  
    } else {
        showSuccess(input);
    }
        
};

const checkPasswordMatch = function (input1, input2) {
    if (input1.value.trim() !== '' && input2.value.trim() !== '') {
        if (input1.value.trim() !== input2.value.trim()) {
            showError(input2, 'Password is not matched');
        } else {
            showSuccess(input1);
            showSuccess(input2);
        }
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired(inputArr);
    checkLength(username, 5, 12);
    checkLength(password, 5, 8);
    checkEmail(email);
    checkPasswordMatch(password, confirmpassword);
});

// form.addEventListener('submit', function (e) {
//    e.preventDefault();
//      if (username.value.trim() === '') {
//        showError(username, 'username is required');
//    } else {
//        showSuccess(username);
//    

//    if (email.value.trim() === "") {
//      showError(email, "email is required");
//    } else {
//      showSuccess(email);
//    }

//    if (username.value.trim() === "") {
//      showError(password, "password is required");
//    } else {
//      showSuccess(password);
//    }

//    if (username.value.trim() === "") {
//      showError(confirmpassword, "confirmpassword is required");
//    } else {
//      showSuccess(confirmpassword);
//    }
    

//});

