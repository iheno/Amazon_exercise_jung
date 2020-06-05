'use strict';

const starCard = document.querySelectorAll('#stars > .star');
const starResult = document.querySelector('.starResult');
const starEvent = ['click', 'mouseover', 'mouseout'];
const changePicture = () => this.window.location.reload();

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

  // key and index
  starCard.forEach((v, i) => {
    // click, mouseover and mouseout
    if (star === 'click') {
      if (i < rateValue) {
        v.classList.add('amazonYellow');
      } else {
        v.classList.remove('amazonYellow');
      }
    }

    if (star === 'mouseover') {
      if (i < rateValue) {
        v.classList.add('amazonYellowHover');
      } else {
        v.classList.remove('amazonYellowHover');
      }
    }

    return star === 'mouseout' ? v.classList.remove('amazonYellowHover') : null;
  });
}
