console.clear;
console.log("hello");
let pokeDEX = [];
// My function
const myfunction = async function () {
  let pokeMax = fetch(`https://pokeapi.co/api/v2/pokemon?limit=1500`)
    .then((respose) => {
      return respose.json();
    })
    .then((pokeData) => {
      console.log(pokeData);
      return pokeData.count;
    });

  for (let i = 1; i < (await pokeMax); i++) {
    pokeDEX.push(
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => {
          return response.json();
        })
        .then((pokeData) => {
          return pokeData;
        })
    );
  }
};

// Start function
myfunction();
