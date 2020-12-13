const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slider_item:first-child");
const lastSlide = document.querySelector(".slider_item:last-child");
const progSize=document.getElementsByClassName('progs').length;
var num = 0;
var id;
var move;

//캐러셀 내 프로그레스바
function progressBar(classNum) {
  var ele=document.getElementsByClassName('progs')[classNum];
  console.log(ele)
  var width = -25;
  id = setInterval(frame, 65);
  function frame(){
      if(width>=100) {
        clearInterval(id);
        setSlide('next');
      } else {
          width ++;
          ele.style.width= (width < 0) ? "0%" : width + "%";
      }
  }
}

function setSlide(state) {
  clearInterval(id);
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if(currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const stateSlide = (state == "next") ? currentSlide.nextElementSibling : currentSlide.previousElementSibling;
    if(stateSlide){
      stateSlide.classList.add(SHOWING_CLASS);
      (state == "next") ? num++ : num --;
    } else {
      (state == "next") ? firstSlide.classList.add(SHOWING_CLASS) : lastSlide.classList.add(SHOWING_CLASS);
      (state == "next") ? num = 0 : num = progSize - 1;
    }
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
    num = 0;
  }
  progressBar(num);
}

setSlide('next');