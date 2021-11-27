function CatCard({ cat }) {
  return (
    <div className="cat-card flex-column">
      <div className="cat-image-frame">
        <img alt="a random, adorable cat" className="cat-image" src={cat.url} />
      </div>
      <div className="cat-name">{cat.name}</div>
    </div>
  );
}

export default CatCard;
