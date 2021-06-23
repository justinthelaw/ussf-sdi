var fetch = require('node-fetch');

let yourFetchMethod = (url) => {
  return fetch(url)
    .then(response => {
        if (response.statusText >= 500 && response.statusText <= 599) {
        return response.statusText;
        } else {return response.json()}
    })
    .then(data => {return data})
}

console.log(yourFetchMethod("https://pokeapi.co/api/v2/ability/7/"))
console.log(yourFetchMethod("https://pokeapi.co/api/v2/derp"))