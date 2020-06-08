'use strict';

// JSON
const apiUrl =
  'https://m.media-amazon.com/images/G/01/adt/hiring/echo_products.json';

async function getData() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const { asins } = data;
  const fragment = document.createDocumentFragment();
  const productBox = document.querySelector('.carousel__box');

  for (let i in asins) {
    let item = asins[i];
    const carouselItem = document.createElement('div');
    const carouselItemBox = document.createElement('div');
    const productImage = document.createElement('div');
    const productBody = document.createElement('div');
    const productBodyTitle = document.createElement('div');
    const productTitle = document.createElement('h3');
    const productBodyInfo = document.createElement('div');
    const productBodyInfoPrice = document.createElement('div');
    const normalPrice = document.createElement('span');
    const productBodyInfoReview = document.createElement('div');
    const productBodyInfoReviewStar = document.createElement('div');
    const starIco = document.createElement('i');
    const productBodyInfoReviewCount = document.createElement('span');
    const productBodyInfoOffers = document.createElement('div');
    const specialData = document.createElement('span');
    const productBodyPrime = document.createElement('div');
    const primeIco = document.createElement('i');

    carouselItem.classList.add('carousel__item');
    carouselItemBox.classList.add('carousel__item__box');
    productImage.classList.add('product__image');
    productBody.classList.add('product__body');
    productBodyTitle.classList.add('product__body__title');
    productTitle.classList.add('product__title');
    productBodyInfo.classList.add('product__body__info');
    productBodyInfoPrice.classList.add('product__body__info__price');
    normalPrice.classList.add('normal__price');
    productBodyInfoReview.classList.add('product__body__info__review');
    productBodyInfoReviewStar.classList.add(
      'product__body__info__review__star'
    );
    starIco.classList.add('star-ico', 'star-ico-small', 'star-small-4');
    productBodyInfoReviewCount.classList.add(
      'product__body__info__review__count'
    );
    productBodyInfoOffers.classList.add('product__body__info__offers');
    specialData.classList.add('special__data');
    productBodyPrime.classList.add('product__body__prime');
    primeIco.classList.add('prime-ico-small');

    carouselItemBox.appendChild(productImage); // imageHires
    carouselItemBox.appendChild(productBody);
    productBody.appendChild(productBodyTitle);
    productBodyTitle.appendChild(productTitle); // imageHires
    productBody.appendChild(productBodyInfo);
    productBodyInfo.appendChild(productBodyInfoPrice);
    productBodyInfoPrice.appendChild(normalPrice); // variations: price
    productBodyInfo.appendChild(productBodyInfoReview);
    productBodyInfoReview.appendChild(productBodyInfoReviewStar);
    productBodyInfoReviewStar.appendChild(starIco); // rating
    productBodyInfoReview.appendChild(productBodyInfoReviewCount); // ratingCount
    productBodyInfo.appendChild(productBodyInfoOffers);
    productBodyInfoOffers.appendChild(specialData); // releaseDate
    productBody.appendChild(productBodyPrime);
    productBodyPrime.appendChild(primeIco); // isPrimeEligible: true
    carouselItem.appendChild(carouselItemBox);
    fragment.appendChild(carouselItem);

    productImage.innerHTML = `<img src="${item.imageHires}" />`;
    productTitle.append(item.title);
    normalPrice.append(item.variations[0].price);
    productBodyInfoReviewCount.append(item.ratingCount);
    primeIco.append(
      item.isPrimeEligible === true
        ? primeIco.classList.add('prime-ico')
        : primeIco.classList.remove('prime-ico')
    );
    specialData.append(item.releaseDate);
  }
  productBox.appendChild(fragment);

  // carousel
  const SHOWING = 'show';
  const nextBtn = document.querySelector('.nextbtn');
  const prevBtn = document.querySelector('.prevbtn');
  const firstItem = document.querySelector('.carousel__item:first-child');
  const lastItem = document.querySelector('.carousel__item:last-child');

  const carousel = () => firstItem.classList.add(SHOWING);

  const nextArrow = () => {
    const currentSilde = document.querySelector(`.${SHOWING}`);
    if (currentSilde) {
      currentSilde.classList.remove(SHOWING);
      const nextSlide = currentSilde.nextElementSibling; //  next()
      if (nextSlide) {
        nextSlide.classList.add(SHOWING);
      } else {
        firstItem.classList.add(SHOWING);
      }
    } else {
      firstItem.classList.add(SHOWING);
    }
  };

  const prevArrow = () => {
    const currentSilde = document.querySelector(`.${SHOWING}`);
    if (currentSilde) {
      currentSilde.classList.remove(SHOWING);
      const prevSlide = currentSilde.previousElementSibling; // prev()
      if (prevSlide) {
        prevSlide.classList.add(SHOWING);
      } else {
        lastItem.classList.add(SHOWING);
      }
    } else {
      firstItem.classList.add(SHOWING);
    }
  };
  nextBtn.addEventListener('click', nextArrow);
  prevBtn.addEventListener('click', prevArrow);

  carousel();
}

getData();
