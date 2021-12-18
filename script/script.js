// ==================================================================
console.log();
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

const wrapper = document.querySelector('.wrapper');
const btnFlip = document.querySelector('#btn-flip');
const spanColour = document.querySelector('.colour');

btnFlip.addEventListener('click', function () {
  let hexColour = '#';

  for (let i = 0; i < 6; i++) {
    hexColour += hex[getRandomNumber()];
  }

  spanColour.textContent = hexColour;
  wrapper.style.backgroundColor = hexColour;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
