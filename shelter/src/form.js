import style from './style-form.css';

const email = document.getElementById('email');
const name = document.getElementById('name');
const lastName = document.getElementById('last-name');
const pas1 = document.getElementById('pas1');
const pas2 = document.getElementById('pas2');

let flag = false;

function checkInput(){
    if (name.value.length == 0){
        const sibling = name.nextElementSibling;
        sibling.innerHTML = 'Fill this Input';
        name.style.border = 'red 2px solid';
        flag = false;
    }else{
        const sibling = name.nextElementSibling;
        sibling.innerHTML = '';
        name.style.border = 'green 2px solid';
        flag = true;
    }

    if (lastName.value.length == 0){
        const sibling = lastName.nextElementSibling;
        sibling.innerHTML = 'Fill this Input';
        lastName.style.border = 'red 2px solid';
        flag = false;
    }else{
        const sibling = lastName.nextElementSibling;
        sibling.innerHTML = '';
        lastName.style.border = 'green 2px solid';
        flag = true;
    }

    if (email.validity.valid) {
        let sibling = email.nextElementSibling;
        sibling.innerHTML = '';
        email.style.border = 'green 2px solid';
        flag = true;
        if(email.value.length == 0){
            email.style.border = 'red 2px solid';
            flag = false;
            sibling.innerHTML = 'Expects an email';
        }
    } 
    
    else {
        let sibling = email.nextElementSibling;
        sibling.innerHTML = 'This is not an email';
        email.style.border = 'red 2px solid';
        flag = false;
    }

    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/;
    if (regex.test(pas1.value) == true) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        let sibling = pas1.nextElementSibling;
        sibling.textContent = '';
        pas1.style.border = 'green 2px solid';
        flag = true;
    } else {
        let sibling = pas1.nextElementSibling;
        sibling.textContent = 'Expects 8 characters & 1 number';
        pas1.style.border = 'red 2px solid';
        flag = false;
    }

    if (pas2.value === pas1.value && pas2.value.length > 0 ) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        let sibling = pas2.nextElementSibling;
        sibling.textContent = '';
        pas2.style.border = 'green 2px solid';
        flag = true;
    } else {
        let sibling = pas2.nextElementSibling;
        sibling.innerHTML = 'Passwords do not match try again';
        pas2.style.border = 'red 2px solid';
        flag = false;
    }

   
}

function done(){
    const popup = document.querySelector('.spanoff');
    popup.classList.add('spanon');

    const cover = document.querySelector('.cover');
    cover.classList.add('coveron');
    
    document.querySelector('#close').addEventListener('click', function(){
        popup.classList.remove('spanon');
        cover.classList.remove('coveron');
    })
}

function clear(){
    if (flag == true){
        email.value = '';
        email.style.border = 'none';
        name.value = '';
        name.style.border = 'none';
        lastName.value = '';
        lastName.style.border = 'none';
        pas1.value = '';
        pas1.style.border = 'none';
        pas2.value = '';
        pas2.style.border = 'none';
        done();
    }
}



document.querySelector('form').addEventListener('submit', (event) => {

    event.preventDefault();
    checkInput();
    clear();

})
