console.clear;
console.log("hello");

const apiPokemon = () => {
  const apiPokeDEX = [];

  fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then((respose) => {
      return respose.json();
    })
    .then((pokeData) => {
      console.log(pokeData);
    });
};

apiPokemon();
