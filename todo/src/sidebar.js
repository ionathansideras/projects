export default function sidebar() {
    document.querySelector('#hum').addEventListener('click', () => { 
        let popup = document.querySelector(".nav");
        // if the .nav contains the class nav-on 
        if (popup.classList.contains("nav-on")) {
            // close the nav bar
            popup.classList.remove("nav-on");
        } else {
            // open the nav bar
            popup.classList.add("nav-on");
        }
    });
}