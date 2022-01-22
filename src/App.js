import { useState, useEffect } from "react";

const mainApi = "https://pokeapi.co/api/v2/pokemon/";
const maxId = 898;
const randomNumber = Math.floor(Math.random() * maxId + 1);
function App() {
  const [pokemon, setPokemon] = useState(null);

  console.log(randomNumber);
  console.log(mainApi + randomNumber);

  async function fetchUserData(id) {
    const response = await fetch(mainApi + id);
    setPokemon(await response.json());
  }

  useEffect(() => {
    fetchUserData(randomNumber);
  }, []);

  if (!pokemon) {
    return "loading...";
  }

  return (
    <div>
      <div class="box" id="heading">
        <h1> A Random Pokemon </h1>
      </div>

      <div class="card">
        <img
          src={pokemon.sprites.front_default}
          class="card-img-top"
          alt={pokemon.name}
        />
        <div class="card-body">
          <h5 class="card-title">{pokemon.name}</h5>
          <p class="card-text"></p>
        </div>
      </div>
    </div>
  );
}

export default App;
