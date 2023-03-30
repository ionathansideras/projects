export default function carousel(){

    const gal = document.querySelector('.carousel');
    const left = document.querySelector('#images-left');
    const right = document.querySelector('#images-right');

    left.addEventListener('click', ()=>{
        gal.style.scrollBehavior = 'smooth';
        gal.scrollLeft -= 270;
        
    });


    right.addEventListener('click', ()=>{
        gal.style.scrollBehavior = 'smooth';
        gal.scrollLeft += 270;
    });
}