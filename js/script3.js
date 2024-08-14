async function fetchData(url, funcName) {
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

fetchPokemon("1");

// Pull pokemon data as selected
async function fetchPokemon(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`; // URL String used to fetch data from API

  const data = await fetchData(url, "fetchPokemon"); // Callback function to post response and return data

  console.log(data); // LOG: data
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
  console.log(pokemonData);
}
