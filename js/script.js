console.clear;

const txtSearchBox = document.getElementById("search-box");
const btnSearch = document.getElementById("btn-search");
const pokemonList = document.getElementById("pokemonList");

btnSearch.addEventListener("click", funcbtnSearch);

function pushPokesearch(pokemon) {
	pokemonList.innerHTML = "";
	txtSearchBox.value = pokemon;
}

txtSearchBox.addEventListener("focus", funcpokemonList);
txtSearchBox.addEventListener("keyup", funcpokemonList);
function funcbtnSearch() {
	console.log(txtSearchBox.value);
	fetchPokemon(txtSearchBox.value);
}
async function funcpokemonList() {
	pokemonList.innerHTML = await seachbarFunc(txtSearchBox.value);
}

async function fetchData(url, funcName) {
	//
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error("Func:" + funcName + " | Network response was not ok " + response.statusText);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Func:" + funcName + " | There has been a problem with your fetch operation:", error);
	}
}

async function fetchPokemon(pokemon) {
	const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`; // URL String used to fetch data from API
	const data = await fetchData(url, "fetchPokemon"); // Callback function to post response and return data

	const pokemonData = {
		index: data.id,
		name: data.name,
		sprite: data.sprites.other["official-artwork"].front_default,
		type: data.types.map((type) => {
			return type.type.name;
		}),
		height: data.height,
		weight: data.weight,
		stats: data.stats.map((stat) => {
			const status = { [stat.stat.name]: stat.base_stat };
			return status;
		}),
	};
	console.log(pokemonData);
	return pokemonData;
}

async function fetchPokemonList(keys) {
	const url = "https://pokeapi.co/api/v2/pokemon?limit=15000";
	let searchValue = keys; // let searchValue = keys.target.value;
	let data = await fetchData(url, "fetchPokemonList");
	let pokemons = data.results.map((res) => {
		return res.name;
	});

	let pokemonList = pokemons.filter((name) => {
		if (name.includes(keys)) {
			return name;
		}
	});
	return pokemonList;
}

async function seachbarFunc(params) {
	let pokeSearch = await fetchPokemonList(params);
	let searchHTML = pokeSearch.map((poke) => {
		return `<li class="pokemon" onclick="pushPokesearch('${poke}')">${poke}</li>`;
	});

	return searchHTML.join("");
}
