// =======================================================================
const mealsElem = document.querySelector('#meals');
const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('#searchBtn');
const closePopup = document.querySelector('#close-btn');
const mealPopup = document.querySelector('#meal-popup');
const mealInfoElem = document.querySelector('#meal-info');

async function getRandomMeal() {
  const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const respData = await resp.json();
  const randomMeal = respData.meals[0];

  console.log(randomMeal);

  addMeal(randomMeal, true);
}

async function getMealsBySearch(term) {
  const resp = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + term);
  const respData = await resp.json();
  const meals = await respData.meals;

  return meals;
}

function addMeal(mealData, random = false) {
  const meal = document.createElement('article');
  meal.classList = 'meal';
  meal.innerHTML = `
        <div class="meal__header">
            ${random ? `<span class="random">Random Recipe</span>` : ''}
            <img src='${mealData.strMealThumb}' alt='${mealData.strMeal}'
        </div>
        <div class="meal__body">
            <h5>${mealData.strMeal}</h5>
            <button type="button">Press</button>
        </div>
    `;

  const favBtn = meal.querySelector('.meal__body button');
  favBtn.addEventListener('click', () => {
    if (favBtn.classList.contains('active')) {
      // removeMealFromLS(mealData.idMeal);
      favBtn.classList.remove('active');
    } else {
      // addMealToLS(mealData.idMeal);
      favBtn.classList.add('active');
    }
  });

  meal.addEventListener('click', () => {
    showMealInfo(mealData);
  });

  mealsElem.appendChild(meal);
}

// =========================

function addMealToLS(mealID) {
  const mealIDs = getMealsFromLS();
  localStorage.setItem('meal-ids', JSON.stringify([...mealIDs, mealID]));
}

function removeMealFromLS(mealId) {
  const mealIDs = getMealsFromLS();
  localStorage.setItem('meal-ids', JSON.stringify(mealIDs.filter((id) => id !== mealId)));
}

function getMealsFromLS() {
  const mealIDs = JSON.parse(localStorage.getItem('meal-ids'));
  return mealIDs === null ? [] : mealIDs;
}

// ==========================

function showMealInfo(mealData) {
  mealInfoElem.innerHTML = '';

  const mealEl = document.createElement('article');
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (mealData['strIngredient' + i]) {
      ingredients.push(`${mealData['strIngredient' + i]} / ${mealData['strMeasure' + i]}`);
    } else {
      break;
    }
  }

  mealEl.innerHTML = `
        <h2>${mealData.strMeal}</h2>
        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}" />
        <h5>${mealData.strArea} cuisine</h5>
        <ul>
            ${ingredients.map((el) => `<li>${el}</li>`).join('')}
        </ul>
        <p>
            ${mealData.strInstructions}
        </p>
    `;
  mealInfoElem.appendChild(mealEl);
  mealPopup.classList.remove('hidden');
}

// ==========================

searchBtn.addEventListener('click', async () => {
  mealsElem.innerHTML = '';
  const search = searchInput.value;
  const meals = await getMealsBySearch(search);
  // console.log(meals);
  searchInput.value = '';

  if (meals) {
    meals.forEach((meal) => {
      addMeal(meal);
    });
  }
});

// =========================

closePopup.addEventListener('click', () => {
  mealPopup.classList.add('hidden');
});

// ===================

getRandomMeal();
