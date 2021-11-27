import { useContext } from "react";
import CatCard from "./CatCard.js";
import CatContext from "../CatContext";

function CatBox() {
  const { cats } = useContext(CatContext)
  return (
    <div className="cat-box flex-row">
      {cats.map((cat, index) => (
        <CatCard cat={cat} key={cat.name + index} />
      ))}
    </div>
  );
}

export default CatBox;
