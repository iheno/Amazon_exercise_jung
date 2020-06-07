'use strict';

const starCard = document.querySelectorAll('#stars > .star');
const starResult = document.querySelector('.starResult');
const starEvent = ['click', 'mouseover', 'mouseout'];
const CHECKOVER = 'checkColor';
const CHECKOUT = 'hoverColor';

function changePicture() {
  // window.location.href = window.location.href;
  location.reload();
}

// 1 ~ 5 stars
for (let i = 0; i < starCard.length; i++) {
  starCard[i].rateValue = i + 1;
  starEvent.forEach((e) => starCard[i].addEventListener(e, showResult));
}

function showResult(e) {
  // Event.type
  const star = e.type;
  const rateValue = this.rateValue;

  if (star === 'click' && rateValue > 0) {
    starResult.innerHTML = `<span>It's</span><em>${rateValue}</em><span>stars!</span>`;
  }

  starCard.forEach((el, index) => {
    // click, mouseover and mouseout
    if (star === 'click') {
      if (index < rateValue) {
        el.classList.add(CHECKOVER);
      } else {
        el.classList.remove(CHECKOVER);
      }
    }

    if (star === 'mouseover') {
      if (index < rateValue) {
        el.classList.add(CHECKOUT);
      } else {
        el.classList.remove(CHECKOUT);
      }
    }

    return star === 'mouseout' ? el.classList.remove(CHECKOUT) : null;
  });
}
