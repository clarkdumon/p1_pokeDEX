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

seachbarFunc("blas");
//fetchPokemon("avalugg-hisui");

// Pull pokemon data as selected
async function fetchPokemon(pokemon) {
	const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`; // URL String used to fetch data from API

	const data = await fetchData(url, "fetchPokemon"); // Callback function to post response and return data

	//   console.log(data); // LOG: data
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
			const status = {
				[stat.stat.name]: stat.base_stat,
			};

			return status;
		}),
	};
	// console.log(pokemonData);
	console.log(pokemonData.sprite);
	return pokemonData;
}

async function fetchPokemonList(keys) {
	const url = "https://pokeapi.co/api/v2/pokemon?limit=1500";
	let searchValue = keys; // let searchValue = keys.target.value;
	let data = await fetchData(url);
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
test();
async function test(params) {
	let test = await fetchPokemonList("");
	let test2 = await fetchPokemon("blastoise");
	console.log(test);
	console.log(test2);
}
async function seachbarFunc(params) {
	let pokeSearch = await fetchPokemonList(params);

	console.log(pokeSearch);

	let searchHTML = pokeSearch.map((poke) => {
		return `<li class="pokemon" onclick="pushPokesearch('${poke}')">${poke}</li>`;
	});

	console.log(searchHTML);
}
