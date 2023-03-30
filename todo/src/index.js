import style from "./style.css";
import makeform from "./form.js";
import { display, displayProjects } from "./display.js";
import sidebar from "./sidebar.js";
import newproj from "./newproject.js";

if(!localStorage.getItem('todos1')){
  // If it doesn't exist, initialize it as an empty array
  localStorage.setItem('todos1', JSON.stringify([{General: [{description: `welcome this is your General list, but don't worry you can create different projects`, priority: 'Not important', date: 'Enjoy'}]}]));
}

let todos1 = [];

todos1 = JSON.parse(localStorage.getItem('todos1'));
export { todos1 };

//what ever this value is its going to add the to do there
let courentProject = 0;
let courentName = 'General';
export { courentProject };
export { courentName };

export function pages(){
  let pages = document.querySelectorAll('.pages');
  pages.forEach(function(button){
    button.addEventListener('click', function(){
      courentProject = +button.getAttribute('value');
      courentName = button.innerHTML;
      let title = document.querySelector('.title');
      title.innerHTML =  button.innerHTML;
      console.log('ok');
      document.querySelector('.add').style.display = 'flex';
      display();
      displayEdit();
    })
  });
}

display();
displayProjects();
pages();

// we create projects
document.querySelector(".project-form").onsubmit = () => {
  let projname = document.querySelector(".project-input").value;
  // we add the value at the todos obj
  todos1.push({[projname]: []});

  let popup = document.querySelector(".project-form");
  popup.classList.remove("open-project");
  
  // midenizi to value
  let input = document.querySelector(".project-input");
  let cover = document.querySelector(".cover");
  cover.classList.remove("open-cover");
  input.value = "";
  console.log(todos1);
  localStorage.setItem('todos1', JSON.stringify(todos1));
  display();
  
  displayEdit();
  displayProjects();
  pages();
  return false;
};

// when the form is submited
document.querySelector(".form").onsubmit = () => {
  let description = document.querySelector(".name").value;
  let priority = document.querySelector("select").value;
  let date = document.querySelector(".date").value;
  // we add the new todo
  todos1[courentProject][courentName].push({description, priority, date});
  let popup = document.querySelector(".form");
  popup.classList.remove("open-form");
  // we delete the values
  let input = document.querySelector(".name");
  input.value = "";
  
  let cover = document.querySelector(".cover");
  cover.classList.remove("open-cover");
  console.log(todos1);

  localStorage.setItem('todos1', JSON.stringify(todos1));

  pages();
  display();
  displayEdit();
   //return false so the form will stay in our page
  return false;
};

sidebar();

// in this function we edit the existent todos
let editpos = 0;
function displayEdit() {
  let editbutton = document.querySelectorAll(".edit");
  editbutton.forEach(function (button) {
    button.addEventListener("click", function () {
      let popup = document.querySelector(".edit-form");
      popup.classList.add("edit-on");
      let cover = document.querySelector(".cover");
      cover.classList.add("open-cover");
      editpos = document.querySelector(".edit").getAttribute("value");
      editpos = button.getAttribute("value");
      let description = document.querySelector(".edit-name");
      description.value = todos1[courentProject][courentName][editpos].description;
      let priority = document.querySelector(".edit-select");
      priority.value = todos1[courentProject][courentName][editpos].priority;
      let date = document.querySelector(".edit-date");
      date.value = todos1[courentProject][courentName][editpos].date;

    });
  });

  document.querySelector(".edit-close").addEventListener("click", function () {
    let popup = document.querySelector(".edit-form");
    popup.classList.remove("edit-on");
    let cover = document.querySelector(".cover");
    cover.classList.remove("open-cover");
  });
  
}
displayEdit();

// here on submit we use the form for edit
document.querySelector(".edit-form").onsubmit = () => {
  let description = document.querySelector(".edit-name").value;
  let priority = document.querySelector(".edit-select").value;
  let date = document.querySelector(".edit-date").value;
  // we replace the old todo with the new todo
  todos1[courentProject][courentName].splice([editpos],1, {description, priority, date});
  
  
  let popup = document.querySelector(".edit-form");
  popup.classList.remove("edit-on");
  // deletes the value
  let input = document.querySelector(".edit-name");
  input.value = "";

  let cover = document.querySelector(".cover");
  cover.classList.remove("open-cover");

  localStorage.setItem('todos1', JSON.stringify(todos1));

  pages();
  display();
  displayEdit();
 //return false so the form will stay in our page
  return false;
};

// here we just delete the projet of our choice
export function removeProject() {
  const removeBut = document.querySelectorAll(".trash");
  removeBut.forEach(function (img) {
    img.addEventListener("click", function () {
      todos1.splice(img.getAttribute('value'),1);
      
      let title = document.querySelector('.title');
      title.innerHTML =  'Deleted';
      document.querySelector('.add').style.display = 'none';
      courentName = 'General';

      localStorage.setItem('todos1', JSON.stringify(todos1));

      displayProjects();
      displayEdit();
      display();
      pages();
    });
  });
}

// here we just delete the todo of our choice
export function remove() {
  const removeBut = document.querySelectorAll(".ex-but");
  removeBut.forEach(function (button) {
    button.addEventListener("click", function () {
      todos1[courentProject][courentName].splice(button.value, 1);

      localStorage.setItem('todos1', JSON.stringify(todos1));
      
      display();
      pages();
      displayEdit();
    });
    
  });
}

makeform();
newproj();

