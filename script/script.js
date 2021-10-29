// ==================================================================
const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=xxx&page=1';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=xxx&query=';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const wrapper = document.querySelector('.wrapper');
const form = document.querySelector('#form');
const search = document.querySelector('#search');
const main = document.querySelector('.main');

// ==========================
async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  console.log(respData);

  displayMovies(respData.results);
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'amber';
  } else {
    return 'red';
  }
}

function displayMovies(movies) {
  main.innerHTML = '';

  movies.forEach((el) => {
    const { poster_path, title, vote_average, overview } = el;
    const movieArticle = document.createElement('article');
    movieArticle.classList = 'movie';
    movieArticle.innerHTML = `
      <div class="movie__img">
        <img src="${IMG_PATH + poster_path}" alt="${title}" />
      </div>
      <div class="movie__info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="movie__overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `;
    main.appendChild(movieArticle);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchValue = search.value;

  if (searchValue) {
    getMovies(SEARCH_API + searchValue);
    search.value = '';
  }
});

// =====================
getMovies(API_URL);
