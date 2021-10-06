const results = document.querySelector("#results");

const searchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then((response) => response.json())
    .then((data) => {
      data.Search.forEach((result) => {
        const movie = `<li class="list-inline-item">
          <img src="${result.Poster}" alt="">
          <p>${result.Title}</p>
        </li>`;
        results.insertAdjacentHTML("beforeend", movie);
      });
    });
};


const form = document.querySelector("#search-movies");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // <-- to prevent <form>'s native behaviour of refreshing after submit
  const input = event.currentTarget.querySelector(".form-control");
  results.innerHTML = "";
  searchMovies(input.value);
});

searchMovies("movie");
