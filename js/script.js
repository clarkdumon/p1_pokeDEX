console.clear;
const pokeList = document.getElementById("pokemonList");
const searchBar = document.getElementById("searchBox");
const clearBtn = document.getElementById("clearBtn");
const clickedPokemon = document.getElementsByClassName("pokemonColumn");

clearBtn.addEventListener("click", () => {
	searchBar.value = "";
	fetchPokemonList("");
});

searchBar.addEventListener("keyup", fetchPokemonList);
searchBar.addEventListener("focus", fetchPokemonList);

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

async function pushPokesearch(name) {
	pokeList.innerHTML = "";
	searchBar.value = name;
	fetchPokemon(name);
}

async function fetchPokemon(pokemon) {
	const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`; // URL String used to fetch data from API

	const data = await fetchData(url, "fetchPokemon"); // Callback function to post response and return data

	//   console.log(data); // LOG: data
	const pokemonData = {
		index: data.id,
		name: data.name,
		sprite: data.sprites.other["official-artwork"].front_default,
		type: data.types.map((type) => {
			return `<span>${type.type.name}</span>`;
		}),
		height: data.height,
		weight: data.weight,
		stats: data.stats.map((stat) => {
			const status = {
				[stat.stat.name]: stat.base_stat,
			};

			return status;
		}),
	};
	// console.log(pokemonData);

	const pokemonHTML = `<div class="pokemonDetails">
	<div class="pokemonNameID">
	<h2>#${pokemonData.index}</h2>
	<h2>${pokemonData.name}</h2>
	</div>
	<div class="pokemonImgType">
	<img
	src="${pokemonData.sprite}"
	alt="" />
	</div>
	<div class="pokemonType">
	${pokemonData.type.join(" ")}
	</div>
	<div class="closer">
	<span>close</span>
	</div>
	</div>`;
	clickedPokemon[0].innerHTML = pokemonHTML;
	// console.log(clickedPokemon);
	// return pokemonData;
}
