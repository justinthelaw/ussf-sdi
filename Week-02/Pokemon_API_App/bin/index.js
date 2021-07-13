#!/usr/bin/env node

const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')

let getInputPokemon = (file) => {

  try {

    const data = fs.readFileSync(file, 'utf8')

      let dataArr = data.split('\n');

      dataArr.pop();

      return dataArr;

  } catch (err) { console.error(err) }
}

let getPokemonTypes = (pokeArr) => {

    let pokeTypes = [];

    pokeArr.forEach(name => {

    fetch (`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(response => response.types)
        .then(response => response.map(element => element.type.name))
        .then(response => response.join(', '))
        .then(response => {

        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
        console.log(`${nameCapitalized}: ${response}`)

        })
    })
}

getPokemonTypes(getInputPokemon(path.resolve('files/input.txt')))
