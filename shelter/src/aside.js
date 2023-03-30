export default function aside(){
    document.querySelector('#open-aside').addEventListener('click', function(){
        let aside = document.querySelector('.aside');
        aside.classList.add('aside-on');
        let cover = document.querySelector('.cover');
        cover.classList.add('coveron');
    })
    document.querySelector('#close-aside').addEventListener('click', function(){
        let aside = document.querySelector('.aside');
        aside.classList.remove('aside-on');
        let cover = document.querySelector('.cover');
        cover.classList.remove('coveron');
    })

    document.querySelector('.cover').addEventListener('click', function(){
        let aside = document.querySelector('.aside');
        aside.classList.remove('aside-on');
        let cover = document.querySelector('.cover');
        cover.classList.remove('coveron');
    })
}