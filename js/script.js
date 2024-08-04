console.clear;
console.log("hello");

// My function
const myfunction = async function () {
  let url = "https://pokeapi.co/api/v2/pokemon/1";
  let pokeFetch = fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((pokeData) => {
      const pokeMon = {
        name: pokeData.name,
        index: pokeData.id,
        weight: pokeData.weight,
        height: pokeData.height,
        image: pokeData.sprites.other.home.front_default,
        stats: {
          "hp": pokeData.stats[0].base_stat,
          "attack": pokeData.stats[1].base_stat,
          "defense": pokeData.stats[2].base_stat,
          "special-attack": pokeData.stats[3].base_stat,
          "special-defense": pokeData.stats[4].base_stat,
          "speed": pokeData.stats[5].base_stat,
        },
      };
      console.log(pokeMon);
    });

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
};

// Start function
myfunction();
