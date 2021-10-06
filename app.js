const results = document.querySelector("#results");

fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
  .then((response) => response.json())
  .then((data) => {
    data.Search.forEach((result) => {
      const movieTag = `<li class="list-inline-item">
        <img src="${result.Poster}" alt="">
        <p>${result.Title}</p>
      </li>`;
      results.insertAdjacentHTML("beforeend", movieTag);
    });
  });
