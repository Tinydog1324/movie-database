const API_KEY = '23f7cd8b733c0a9ecd2f84969b45a560';
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsList = document.getElementById('results');
//const carousel = document.querySelector('.carousel');
const movieList = document.getElementById('movie-list')
const hideH1 = document.getElementById('hide-h1');






searchButton.addEventListener('click', function() {
  resultsList.innerHTML = '';
  const searchTerm = searchInput.value;
  //carousel.style.display = "none";
  movieList.style.display = "none";
  hideH1.style.display = "none";

 
  
  
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(movie => {
        const li = document.createElement('li');
        li.innerHTML = `<h3>${movie.title}</h3><p>${movie.overview}</p>  <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">`;
        resultsList.appendChild(li);
      }); 
    });
});


const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function changeSlide() {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
}

setInterval(changeSlide, 3000);


fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
.then(response => response.json())
.then(data => {
  data.results.forEach(movie => {
    const li = document.createElement('li');
    li.innerHTML = `<h3>${movie.title}</h3><p>${movie.overview}</p>  <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">`;
    movieList.appendChild(li);
  }); 
});

