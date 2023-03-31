export default function scroll(){
    document.querySelector('.scroll').addEventListener('click', function(){
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
          });
    })
}