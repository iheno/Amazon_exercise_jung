'use strict';

const SHOW = 'showing';
const nextBtn = document.querySelector('.nextbtn');
const prevBtn = document.querySelector('.prevbtn');
const firstItem = document.querySelector('.slider__item:first-child');
const lastItem = document.querySelector('.slider__item:last-child');

function slide() {
  firstItem.classList.add(SHOW);

  const nextArrow = () => {
    // currnetSlide
    const cs = document.querySelector(`.${SHOW}`);
    if (cs) {
      cs.classList.remove(SHOW);
      const nextSlide = cs.nextElementSibling; //  next()
      if (nextSlide) {
        nextSlide.classList.add(SHOW);
      } else {
        firstItem.classList.add(SHOW);
      }
    } else {
      firstItem.classList.add(SHOW);
    }
  };

  const prevArrow = () => {
    // currnetSlide
    const cs = document.querySelector(`.${SHOW}`);
    if (cs) {
      cs.classList.remove(SHOW);
      const prevSlide = cs.previousElementSibling; // prev()
      if (prevSlide) {
        prevSlide.classList.add(SHOW);
      } else {
        lastItem.classList.add(SHOW);
      }
    } else {
      firstItem.classList.add(SHOW);
    }
  };

  nextBtn.addEventListener('click', nextArrow);
  prevBtn.addEventListener('click', prevArrow);
}

slide();
