const targetElement = document.getElementById('footer-p');
const targetElement2 = document.getElementById('head-box');
const targetElement3 = document.querySelector('.donate');
const addBoxShadowIfVisible = () => {

  const rect = targetElement.getBoundingClientRect();
  if (rect.bottom <= window.innerHeight) {
    targetElement.style.boxShadow = '20px 20px 0px 0px #6600ff';
  } else {
    targetElement.style.boxShadow = 'none';
  }
  //
  const rect2 = targetElement2.getBoundingClientRect();
  if (
    rect2.top >= 0 &&
    rect2.left >= 0 &&
    rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect2.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    targetElement2.style.boxShadow = '20px 20px 0px 0px #6600ff';
  } else {
    targetElement2.style.boxShadow = 'none';
  }
  //
  const rect3 = targetElement3.getBoundingClientRect();
  const text = document.querySelector('#show-text');
  let list = 'A donation can make a difference for animals in need.'.split('');
  if (
    rect3.top >= 0 &&
    rect3.left >= 0 &&
    rect3.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect3.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    if (text.innerHTML.length == 0){
      for (let i = 0; i < list.length; i++){
        setTimeout(function(){
          text.innerHTML += list[i];
        }, i * 80)
      }
    } 
  }
}

export {addBoxShadowIfVisible};