import { todos1, remove, removeProject, courentProject, pages, courentName } from "./index.js";
import trash2 from "./trash2.png";
import edit from "./edit.png";

//disoplayes the todo list
export function display() {
  //cleans everything when we run it
  let clear = document.querySelector("main");
  while (clear.hasChildNodes()) {
    clear.removeChild(clear.firstChild);
  }

  try {
    for (let i = 0; i < todos1[courentProject][courentName].length; i++) {
      let obj = todos1[courentProject][courentName][i];
      
      let art = document.createElement("article");
      let editimg = new Image();
      editimg.src = edit;
      editimg.setAttribute("class", "edit");
      editimg.setAttribute("value", i);
      for (let j in obj) {
        if (obj[j] == "important") {
          art.setAttribute("id", "important");
        } else if (obj[j] == "Super important") {
          art.setAttribute("id", "Super-important");
        } else if (obj[j] == "Not important") {
          art.setAttribute("id", "Not-important");
        } else {
          let div = document.createElement("div");
          div.innerHTML = obj[j];
          art.appendChild(div);
        }
      }
      let ex = document.createElement("button");
      ex.innerHTML = "X";
      ex.setAttribute("class", "ex-but");
      ex.setAttribute("value", i);
      art.appendChild(ex);
      art.appendChild(editimg);
      let main = document.querySelector("main");
      main.appendChild(art);
    }

  }
  catch(err){
    
  }
  
  
  remove();
}

// displays the projects in the nav bar 
export function displayProjects() {
 
    //clears everything when we run it
  let clear = document.querySelector(".all-projects");
  while (clear.hasChildNodes()) {
    clear.removeChild(clear.firstChild);
  }
  
  let projectsdom = document.querySelector(".all-projects");

  // displays
  for (let i in todos1) {
    let p = document.createElement("p");
    p.setAttribute("class", "pages");
    p.setAttribute("value", i);

    //
    p.innerHTML = Object.keys(todos1[i]);
    let img = new Image();
    img.src = trash2;
    img.setAttribute("value", i);
    img.setAttribute("class", "trash");
    projectsdom.appendChild(p);
    if (i >=1){
      projectsdom.appendChild(img);
    }
  }

  removeProject();
}
