console.clear;
console.info("start script");

const pokemonList = document.getElementById("pokemonList");
// Function to fetch data
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

// Function to use the fetched data
function useData(data) {
  // Do something with the data
  console.log(data);
}

// Main function to orchestrate fetching and using data
async function main() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=1500"; // Replace with your API endpoint
  const data = await fetchData(url);

  let pokemons = data.map((res) => {
    return res.name;
  });
  if (data) {
    useData(pokemons);
  }
}

// Execute the main function
main();
