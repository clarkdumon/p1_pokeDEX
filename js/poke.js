"use strict";

URL = "https://pokeapi.co/api/v2/pokemon?limit=100000";
const btnSearch = document.getElementById("searchButton");
const inputSearch = document.getElementById("inp-searchbox");
const pokelist = document.getElementById("pokemon--main-body");

btnSearch.addEventListener("click", hideSearchBar);
function hideSearchBar() {
  if (inputSearch.classList.value == "") {
    inputSearch.setAttribute("class", "invisible-matter");
  } else {
    inputSearch.removeAttribute("class");
    inputSearch.focus();
  }
}

window.addEventListener("load", getPokemonData());

// async function fetcher(url,funcName) {
//     try{
//         const response = await
//     }

// }

async function getPokemonData(event) {
  const pokedex = [];
  const pokemons = [];
  let pokecount = 0;
  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data.results)
    .then((data) =>
      data.map((poke) => {
        pokemons.push(poke.url);
        pokecount++;
      })
    )
    .catch((error) => {
      console.error(error);
    });

  pokemons.forEach(async (poke) => {
    const response = await fetch(poke)
      .then((res) => res.json())
      .then((data) => {
        const details = {
          name: data.name,
          sprite: data.sprites.other["official-artwork"].front_default,
          type: data.types.map((type) => type.type.name),
        };

        pokelist.append(pokemonData(details))
      });
  });
  console.log(pokedex)
}


const test ={
  "name": "bulbasaur",
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  "type": [
      "grass",
      "poison"
  ]
}
console.log(pokemonData(test));
function pokemonData(pokemon) {
  //Created the Div on the pokemon container
  const pokemonContainer = document.createElement("div");
  pokemonContainer.classList.add("pokemon--container");
  pokemonContainer.classList.add(`background-color-${pokemon.type[0]}`);

  //Creating the element for the pokemon Name
  const pokemonName = document.createElement('h4')
    pokemonName.innerText = `${pokemon.name}` // Adding Pokemon Name Here

  //Creating the element for the pokemon Type
  pokemonContainer.append(pokemonName)
  const pokemonType = pokemon.type.forEach(type => {
    let pokeType = document.createElement('p')
    pokeType.innerText = type
    pokemonContainer.append(pokeType)
  })

  //Creating the element for the pokemon Sprite
  const pokemonImg = document.createElement('img')
  pokemonImg.src = pokemon.sprite
  pokemonContainer.append(pokemonImg)

  return pokemonContainer;
}
