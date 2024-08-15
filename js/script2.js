console.clear;
console.log("--");

const fetchPokeAPI = async function () {
	const pokemonList = [];

	const pokeMonAPi = fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`)
		.then((response) => response.json())
		.then((pokemonURL) => {
			pokemonURL.results.map((pokeMons) => {
				fetch(pokeMons.url)
					.then((response) => response.json())
					.then((pokeData) => {
						const pokeMon = {
							index: pokeData.id,
							name: pokeData.name,
							image: pokeData.sprites.other.home.front_default,
							height: pokeData.height,
							weight: pokeData.weight,
							type: pokeData.types.map((type) => {
								return type.type.name;
							}),
							stats: pokeData.stats.map((stat) => {
								return [stat.stat.name, stat.base_stat];
							}),
						};
						pokemonList.push(pokeMon);
					});
			});
		});
	displayPokemon(pokemonList.name);
};
const displayPokemon = (pokemon) => {
	console.log(pokemon);
};

// My function
// const myfunction = async function () {
//   let url = "https://pokeapi.co/api/v2/pokemon/1";
//   let pokeFetch = fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((pokeData) => {
//       //   console.log(pokeData);
//asdasdasdasdas
//       const pokeMon = {
//         index: pokeData.id,
//         name: pokeData.name,
//         image: pokeData.sprites.other.home.front_default,
//         height: pokeData.height,
//         weight: pokeData.weight,
//         type: pokeData.types.map((type) => {
//           return type.type.name;
//         }),
//         stats: pokeData.stats.map((stat) => {
//           return [stat.stat.name, stat.base_stat];
//         }),
//         // thestats: pokeData.stats.map((stat) => {
//         //   console.log((stat.base_stat.stat.name + stat.base_stat)
//         //   status.assign, );
//         // }),
//       };
//       return pokeMon
//     });
// };

//   let pokeDEX = [];
//   let pokeMax = fetch(`https://pokeapi.co/api/v2/pokemon?limit=1500`)
//     .then((respose) => {
//       return respose.json();
//     })
//     .then((pokeData) => {
//       return pokeData.results;
//     })
//     .then((results) => {
//       let url = results.map((result) => result.url);
//       return url;
//     })
//     .then((pokeMon) => {
//       pokeDEX.push(
//         pokeMon.forEach((poke) => {
//           fetch(poke).then((reponse) => {
//             return reponse.json();
//           });
//         })
//       );
//       console.log(pokeDEX);
//     });

//   for (let i = 1; i < (await pokeMax); i++) {
//     pokeDEX.push(
//       fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//         .then((response) => {
//           return response.json();
//         })
//         .then((pokeData) => {
//           return pokeData;
//         })
//     );
//   }

// Start function
// myfunction();
fetchPokeAPI();

// const pokemonList = document.getElementById("pokemonList");
// const txtPokeSearch = document.getElementById("seach-box");
// const btnPokeSearch = document.getElementById("btn-search");
// // const pokemonList = document.getElementById("pokemonList");
// // Function to fetch data
// async function fetchData(url) {
// 	try {
// 		const response = await fetch(url);
// 		if (!response.ok) {
// 			throw new Error("Network response was not ok " + response.statusText);
// 		}
// 		const data = await response.json();
// 		return data;
// 	} catch (error) {
// 		console.error("There has been a problem with your fetch operation:", error);
// 	}
// }

// // Function to use the fetched data
// function useData(data) {
// 	// Do something with the data
// 	console.log(data);
// }

// // PokeSearch Event Listener
// txtPokeSearch.addEventListener("keyup", async (keys) => {
// 	const searchValue = keys.target.value;
// 	const url = "https://pokeapi.co/api/v2/pokemon?limit=1500";
// 	const data = await fetchData(url);
// 	let pokemons = data.results.map((res) => {
// 		return res.name;
// 	});

// 	const searchList = [];
// 	for (let pokeList of pokemons) {
// 		if (pokeList.startsWith(searchValue)) {
// 			searchList.push(pokeList);
// 		}
// 	}
// 	//   console.log(searchList);

// 	if (searchValue == "") {
// 		pokemonList.innerHTML = "";
// 	} else {
// 		displayPokemon(searchList);
// 	}
// });

// const displayPokemon = async (searchList) => {
// 	const searchHTML = [];
// 	for (let i = 0; i < searchList.length; i++) {
// 		searchHTML.push(`<li name="${searchList[i]}" onclick="pushTopokeSearch('${searchList[i]}')" >${searchList[i]}</li>`);
// 	}
// 	let pokeListHTML = searchHTML.join("");
// 	if (pokeListHTML.length == 0) {
// 		pokemonList.innerHTML = `<li>No pokemon found</li>`;
// 	} else {
// 		pokemonList.innerHTML = pokeListHTML;
// 	}
// };

// function pushTopokeSearch(pokemon) {
// 	txtPokeSearch.value = pokemon;
// 	pokemonList.innerHTML = "";
// }

// // getPokemonList();
// const pokemon = "bulbasaur";

// async function getPokemon(pokemon) {
// 	const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
// 	const pokemonData = await fetchData(url);

// 	//   useData(pokemonData.name + ` from getPokemon`);
// }
// getPokemon(pokemon);

// btnPokeSearch.addEventListener("click", searchPoke);
// function searchPoke() {
// 	console.log(txtPokeSearch.value);
// }
