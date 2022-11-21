// import logo from './logo.svg';
import logo from './pokeball.png';
import Logo from './Components/Logo'
import './App.css';
import React, {useState, useEffect} from 'react';

const animated = {
  animation: "App-logo-spin infinite 5s linear"
}

function App() {
  var [firstSeconds, updateFirstSeconds] = useState(true);
  var [pokemon, updatePokemon] = useState("??")

  useEffect(()=>{
    var timer = setTimeout(()=>{
      if(!firstSeconds) return;

      updateFirstSeconds(false);

      // Generation 1
      fetch(`https://pokeapi.co/api/v2/pokedex/1`).then(response=>response.json()).then(data=>{

        let id = Math.floor(Math.random() * 100);
        let maxId = data.pokemon_entries.length - 1;

        var randomPokemon = data.pokemon_entries[id].pokemon_species.name;
        var titleRandomPokemon = randomPokemon[0].toUpperCase() + randomPokemon.substr(1);

         // Title case the Pokemon
        updatePokemon(titleRandomPokemon)
      })
    }, 3000);
  })
  return (
    <div className="App">
      <header className="App-header">
        <Logo src={logo} animated={firstSeconds?animated:{}}></Logo>
        <p>
          {firstSeconds?"Catching...":"Caught"}
        </p>
        <p>
          The pokemon you caught is... {pokemon}
        </p>
        <a
          className="App-link"
          href="https://pokeapi.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Weng will show you how to catch more pokemons
        </a>
      </header>
    </div>
  );
}

export default App;
