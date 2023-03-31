import './style.css';
import display from './display.js';

// disables the button from submiting the form
document.querySelector('#submit').disabled = true;

// if the length of the input is > 0 the button gets enabeled
document.querySelector('#text').addEventListener("keyup", () =>{
    if(document.querySelector('#text').value.length > 0){
        document.querySelector('#submit').disabled = false;
    } else {
        document.querySelector('#submit').disabled = true;
    }
})

let type = 'Celsius';
let tempType = 'temp_c';
let city;
//when the form is submited we load the api
let form = document.querySelector('form');
form.addEventListener("submit", (event) =>{
    //users city choice
    city = document.querySelector('#text').value;
    loadapi(city);
    document.querySelector('#text').value = '';
    document.querySelector('#submit').disabled = true;
    //  force the form to submit in this page
    event.preventDefault();
})

// this function fetch the api data and displays it in the screen
async function loadapi(city){
    try {
        //load the api
        const responce = await fetch(`https://api.weatherapi.com/v1/current.json?key=d7929e16db5e4d209e5191549232603&q=${city}`, {
            mode: 'cors'
        })
        //convert the responce to a json file
        const data = await responce.json();
        display(data, tempType, type);
        changeTemp();
    } 
    //if we catch an error we do this
    catch (error){
        const main = document.querySelector('main');
        main.style.padding = '20px';
        main.style.backgroundColor = '#8dbdff';
        main.innerHTML = 'Invalid location or there is no data aveliable';
        console.log(error);
    };
}

let count = 0;
// if the user press the button we convert the celsius to Fahrenheit and the
function changeTemp(){
    document.querySelector('.tempChange').addEventListener('click',function(){

        if (count % 2 == 0){
            tempType = 'temp_f';
            type = 'Fahrenheit';
        } else{
            tempType = 'temp_c';
            type = 'Celsius';
        }
        count ++;
        loadapi(city);
    });
}
