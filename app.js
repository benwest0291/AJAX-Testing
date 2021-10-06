import Sortable from "sortablejs";


// Grabbing hold of the id of results
const results = document.querySelector("#results");

// funtion called searchMovies that can be called
// grabbing api and itoration and displaying on DOM
const searchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then((response) => response.json())
    .then((data) => {
      data.Search.forEach((result) => {
        const movie = `<li class="list-inline-item">
          <img src="${result.Poster}" alt="">
          <h4>${result.Title}</h4>
          <p>Year Of Release: ${result.Year}</p>
        </li>`;
        results.insertAdjacentHTML("beforeend", movie);
      });
    });
};

// grabbing the main form id
const form = document.querySelector("#search-movies");
// adding a event listener of submit
form.addEventListener("submit", (event) => {
  event.preventDefault(); // <-- to prevent <form>'s natral behaviour of refreshing after submit
  const input = event.currentTarget.querySelector(".form-control"); // <-- grabbing the input of user from class form-control TO search API
  results.innerHTML = ""; // <-- Stop added the results to the end of each search
  searchMovies(input.value); // <-- calling search movies and giving it an arguement of input value
});


// Calling searchMovie Function and displaying name of movie as default
searchMovies("movie");
