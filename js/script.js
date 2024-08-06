console.clear;

const pokeList = document.getElementById("pokemonList");
const pokeSearch = document.getElementById("seach-box");
console.log(pokeSearch);

pokeSearch.addEventListener("keyup", (event) => {
  const searchValue = event.target.value;
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=1500`)
    .then((response) => response.json())
    .then((result) => {
      listPokemon(result.results.map(pokemon));
    });

  const listPokemon = (pokemonList) => {
    console.log(pokemonList);

    const listHtml = pokemonList
      .map(
        (pokemon) =>
          `<li>${
            pokemon.name.charAt(0).toUpperCase() +
            pokemon.name.substring(1).toLowerCase()
          }</li>`
      )
      .join("");
    pokeList.innerHTML = listHtml;
  };
});
