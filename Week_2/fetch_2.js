var fetch = require('node-fetch');
var fs = require('fs')

// Pokemon abilities data
function pokeAbilities(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then(response => response.json())
    .then(data => data.abilities)
    .then(data => JSON.stringify(data))
    .then(data => fs.appendFileSync(`${pokemon}_abilities.txt`, data));
}
pokeAbilities('pikachu');