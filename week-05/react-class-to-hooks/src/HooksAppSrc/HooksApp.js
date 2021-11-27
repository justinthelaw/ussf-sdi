import React, { useState } from "react";
import CatBox from "./components/CatBox";
import CatContext from "./CatContext";

async function getCatImage() {
  let res = await fetch("https://api.thecatapi.com/v1/images/search/");
  let json = await res.json();
  console.log(json);
  let imageUrl = await json[0].url;
  return imageUrl;
}

function getCatName() {
  let faker = require("faker");
  return faker.name.firstName();
}

async function addCat(e, appendCats) {
  e.preventDefault();
  let imageUrl = await getCatImage();
  let catName = getCatName();
  let newCat = { name: catName, url: imageUrl };
  appendCats(newCat);
}

function App() {
  const [cats, setCats] = useState([])
  const obj = {cats: cats}

  function appendCats(cat) {
      setCats([...cats, cat])
  }

  return (
    <CatContext.Provider value={ obj }>
      <div className="App">
        <div className="app-title flex-column">
          <div>Hooks Catbox</div>
          <button onClick={(e) => addCat(e, appendCats)}>Cat</button>
        </div>
        {/* <button onClick={(e) => this.addCat(e)}>Cat</button> */}
        <CatBox />
      </div>
    </CatContext.Provider>
  );
}



export default App;