import CatCard from "./CatCard.js";
function CatBox({ cats }) {
  return (
    <div className="cat-box flex-row">
      {cats.map((cat, index) => (
        <CatCard cat={cat} key={cat.name + index} />
      ))}
    </div>
  );
}

export default CatBox;
