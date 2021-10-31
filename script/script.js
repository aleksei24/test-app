// ==================================================================
// local data
const reviews = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/dn6x2uyx5/image/upload/v1635530211/samples/test-review-app/person-02_dafhox.jpg',
    name: 'mike jones',
    job: 'web developer',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa repellat aliquid nobis necessitatibus, acere non, iure blanditiis explicabo modi temporibus minus, consequatur error.',
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/dn6x2uyx5/image/upload/v1635530211/samples/test-review-app/person-01_jwjlqa.webp',
    name: 'rachel tokunbo',
    job: 'ui designer',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, acere non, iure blanditiis explicabo modi temporibus minus, consequatur error.',
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/dn6x2uyx5/image/upload/v1635530211/samples/test-review-app/person-03_rrao1m.jpg',
    name: 'jess taylor',
    job: 'ceo',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa repellat aliquid nobis necessitatibus, acere non, consequatur error.',
  },
  {
    id: 4,
    img: 'https://res.cloudinary.com/dn6x2uyx5/image/upload/v1635530211/samples/test-review-app/person-04_mxdyoa.jpg',
    name: 'sergio bolero',
    job: 'web developer',
    text: 'Lorem ipsum dolor sit. Culpa repellat aliquid nobis necessitatibus, acere non, iure blanditiis explicabo modi temporibus minus, consequatur error.',
  },
  {
    id: 5,
    img: 'https://res.cloudinary.com/dn6x2uyx5/image/upload/v1635530211/samples/test-review-app/preson-05_dbtscb.jpg',
    name: 'kumar sunji',
    job: 'web developer',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa repellat aliquid nobis necessitatibus, acere non, iure blanditiis explicabo modi temporibus minus, consequatur error.',
  },
];

// items
const personImg = document.querySelector('#person-img');
const personAuthor = document.querySelector('#author');
const personJob = document.querySelector('#job');
const personInfo = document.querySelector('#info');

const prevBtn = document.querySelector('.btns-rev__prev');
const nextBtn = document.querySelector('.btns-rev__next');
const randomBtn = document.querySelector('#random-btn');

let currentItem = 0;

// initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson();
});

// display a person based on item
function showPerson() {
  const item = reviews[currentItem];
  personImg.src = item.img;
  personAuthor.textContent = item.name;
  personJob.textContent = item.job;
  personInfo.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// random
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);

  showPerson();
});
