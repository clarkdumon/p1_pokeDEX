console.clear;

const pokemonList = document.getElementById("pokemonList");
const txtPokeSearch = document.getElementById("seach-box");
const btnPokeSearch = document.getElementById("btn-search");
// const pokemonList = document.getElementById("pokemonList");
// Function to fetch data
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

// Function to use the fetched data
function useData(data) {
  // Do something with the data
  console.log(data);
}

// PokeSearch Event Listener
txtPokeSearch.addEventListener("keyup", async (keys) => {
  const searchValue = keys.target.value;
  const url = "https://pokeapi.co/api/v2/pokemon?limit=1500";
  const data = await fetchData(url);
  let pokemons = data.results.map((res) => {
    return res.name;
  });

  const searchList = [];
  for (let pokeList of pokemons) {
    if (pokeList.startsWith(searchValue)) {
      searchList.push(pokeList);
    }
  }
  //   console.log(searchList);

  if (searchValue == "") {
    pokemonList.innerHTML = "";
  } else {
    displayPokemon(searchList);
  }
});

const displayPokemon = async (searchList) => {
  const searchHTML = [];
  for (let i = 0; i < searchList.length; i++) {
    searchHTML.push(`<li name="${searchList[i]}" onclick="pushTopokeSearch('${searchList[i]}')" >${searchList[i]}</li>`);
  }
  let pokeListHTML = searchHTML.join("");
  if (pokeListHTML.length == 0) {
    pokemonList.innerHTML = `<li>No pokemon found</li>`;
  } else {
    pokemonList.innerHTML = pokeListHTML;
  }
};

function pushTopokeSearch(pokemon) {
  txtPokeSearch.value = pokemon;
  pokemonList.innerHTML = "";
}

// getPokemonList();
const pokemon = "bulbasaur";

async function getPokemon(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const pokemonData = await fetchData(url);

  //   useData(pokemonData.name + ` from getPokemon`);
}
getPokemon(pokemon);

btnPokeSearch.addEventListener("click", searchPoke);
function searchPoke() {
  console.log(txtPokeSearch.value);
}
