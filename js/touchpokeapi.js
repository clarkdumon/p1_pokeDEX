"use strict";
const POKEAPI = "https://pokeapi.co/api/v2/pokemon?limit=100000";

async function fetcher(url,whatfunction) {
    
    try{
        const response = await fetch(url);
            if(!response.ok){
                throw new Error("Func:" + whatfunction + " | Network response not OK "+ response.statusText);
            }
        const data = await response.json();
        return data;
        } catch(error){
            console.error("Func: "+ whatfunction + " | There has been a problem with your fetch operation:",error);
        }
}



async function getPokemonData(params){

}