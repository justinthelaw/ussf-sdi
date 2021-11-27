import "./App.css";
import { useState, useEffect } from "react";

function App() {
	const URL = `https://pokeapi.co/api/v2/pokemon/`;
	const [pokemon, setPokemon] = useState(1);
	const [pokeData, setPokeData] = useState({});

	async function fetchPokemonData() {
		fetch(URL + pokemon)
			.then((res) => res.json())
			.then(setPokeData);
	}

	useEffect(() => {
		fetchPokemonData(pokemon);
	}, [pokemon]);

	const ConditionalHTML = pokeData.name ? (
		<>
			<h1>{pokeData.name.toUpperCase()}</h1>
			<img
				src={pokeData.sprites.front_default}
				style={{
					height: "40vh",
				}}
			/>
		</>
	) : (
		<></>
	);

	return (
		<div className="App">
			<h1>useEffect Hook Demo</h1>
			<h2>Input a Pokemon's Name (or Number)</h2>
			<input id="user-input" />
			<button
				onClick={(e) => {
					setPokemon(document.querySelector("#user-input").value);
				}}
			>
				LOOK UP POKEMON
			</button>
			{ConditionalHTML}
		</div>
	);
}

export default App;
