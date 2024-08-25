URL = "https://pokeapi.co/api/v2/pokemon?limit=100000"
const btnSearch = document.getElementById("searchButton");
const inputSearch = document.getElementById("inp-searchbox");

btnSearch.addEventListener("click", hideSearchBar);
function hideSearchBar() {
  if (inputSearch.classList.value == "") {
    inputSearch.setAttribute("class", "invisible-matter");
  } else {
    inputSearch.removeAttribute("class");
    inputSearch.focus();
  }
}


// window.addEventListener("load",getPokemonData(event))

async function getPokemonData(event) {
    const pokemons =[]

    const data = 
    fetch(URL).then(res => res.json())
    .then(data => data.results)
    .then(data =>
        pokemons.push(data)
    )
    console.log(pokemons)
}

