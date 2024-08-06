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
