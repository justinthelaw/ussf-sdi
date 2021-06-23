import { Component } from "react";
import CatBox from "./components/CatBox";

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

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
    };
  }

  async addCat(e) {
    e.preventDefault();
    let imageUrl = await getCatImage();
    let catName = getCatName();
    let newCat = { name: catName, url: imageUrl };
    this.setState({ cats: [...this.state.cats, newCat] });
  }

  render() {
    const { cats } = this.state;
    return (
      <div className="App">
        <div className="app-title flex-column">
          <div>Classical Catbox</div>
          <button onClick={(e) => this.addCat(e)}>Cat</button>
        </div>
        {/* <button onClick={(e) => this.addCat(e)}>Cat</button> */}
        <CatBox cats={cats} />
      </div>
    );
  }
}
export default App;
