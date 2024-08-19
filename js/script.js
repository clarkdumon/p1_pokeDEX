console.clear;
const pokeList = document.getElementById("pokemonList");
const searchBar = document.getElementById("searchBox");

searchBar.addEventListener("keyup", fetchPokemonList);

async function fetchData(url, funcName) {
	//
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(
				"Func:" +
					funcName +
					" | Network response was not ok " +
					response.statusText
			);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(
			"Func:" +
				funcName +
				" | There has been a problem with your fetch operation:",
			error
		);
	}
}

async function fetchPokemonList() {
	const url = "https://pokeapi.co/api/v2/pokemon?limit=15000";
	let searchValue = searchBar.value;
	let data = await fetchData(url, "fetchPokemonList");
	let pokemons = data.results.map((res) => {
		return res.name;
	});

	let pokemonList = pokemons.filter((name) => {
		if (name.includes(searchValue)) {
			return name;
		}
	});
	let searchHTML = pokemonList.map((poke) => {
		return `<li class="pokemon" onclick="pushPokesearch('${poke}')">${poke}</li>`;
	});
	pokeList.innerHTML = searchHTML.join("");
}

async function seachbarFunc(params) {
	let pokeSearch = await fetchPokemonList(params);
	let searchHTML = pokeSearch.map((poke) => {
		return `<li class="pokemon" onclick="pushPokesearch('${poke}')">${poke}</li>`;
	});

	return searchHTML.join("");
}
