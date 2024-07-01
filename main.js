//Import HTML elements to javascript
const passwordInput = document.getElementById('passwordInput');
const submitBtn = document.getElementById('submitBtn');
const submitForm = document.getElementById('submitForm');
const passwordCheckerDisplay = document.getElementById('passwordCheckerDisplay')
const showPasswordBtn = document.getElementById('showPasswordBtn');
//Define the password
const password = 'kkk1941'
//Add an event listener to the submit button
submitBtn.addEventListener('click', checkPassword);
//Checks if the password is correct
function checkPassword(event) {
    //Prevents the form from instantly submiting
    event.preventDefault()
    //Checks the password
    if (passwordInput.value == password) {
        passwordCheckerDisplay.style.color = 'green';
        passwordCheckerDisplay.innerHTML = 'Correct Password'
        //Adds an artifical loading procedure
        setTimeout(function openWindowPt1() {
            //Tells the user the that the password is correct 
            passwordCheckerDisplay.innerHTML = 'Correct Password';
            setTimeout(function openWindowPt2() {
                //Tells the user that it is "authenticating" you
                passwordCheckerDisplay.innerHTML = 'Authenticating...';
                setTimeout(() => {
                    window.location.href = 'download-page.html';
                }, 1300);
                
            }, 1000);
        }, 500);
        passwordCheckerDisplay.innerHTML = 'Enter the password';
    //If the password is not correct
    } else {
        //Tells the user that the password is wrong
        passwordCheckerDisplay.innerHTML = 'Incorect Password';
        passwordCheckerDisplay.style.color = 'red';
    };
    //Resets the password box
    if (passwordInput.value !== '') {
        passwordInput.value = ''
    };
};
//Hides and shows the user's password input
function showPassword(event) {
    //Prevents the form from instantly submitting
    event.preventDefault();
    if (showPasswordBtn.innerHTML == 'Show') {
        passwordInput.type = 'text';
        showPasswordBtn.innerHTML = 'Hide';
    } else {
        passwordInput.type = 'password';
        showPasswordBtn.innerHTML = 'Show'
    };
};

passwordInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        checkPassword(event);
    };
});

showPasswordBtn.addEventListener('click', showPassword);

submitForm.addEventListener('submit', checkPassword);