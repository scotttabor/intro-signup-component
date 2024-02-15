const form = document.querySelector('form');
const input = document.querySelectorAll('input');
const inputRequirements = document.querySelectorAll('.warning');
const firstNameWarning = document.querySelector('#first-name-warning');
const lastNameWarning = document.querySelector('#last-name-warning');
const emailWarning = document.querySelector('#email-warning');
const passwordWarning = document.querySelector('#password-warning');

for (const inp of input) {
    inp.addEventListener('invalid', (event) => {
        event.preventDefault();


        if (inp.id === 'first-name') {
            inp.style.border = 'solid 2px red';
            inp.style.background = "url('./images/icon-error.svg') no-repeat center right 1.56rem";
            firstNameWarning.style.display = 'block';
        }

        if (inp.id === 'last-name') {
            inp.style.border = 'solid 2px red';
            inp.style.background = "url('./images/icon-error.svg') no-repeat center right 1.56rem";
            lastNameWarning.style.display = 'block';
        }

        if (inp.type === 'email') {
            inp.style.border = 'solid 2px red';
            inp.style.background = "url('./images/icon-error.svg') no-repeat center right 1.56rem";
            inp.placeholder = 'example@example/com';
            inp.classList.add('invalid-placeholder');
            emailWarning.style.display = 'block';

        }

        if (inp.type === 'password') {
            inp.style.border = 'solid 2px red';
            inp.style.background = "url('./images/icon-error.svg') no-repeat center right 1.56rem";
            passwordWarning.style.display = 'block';
        }

    });



}



