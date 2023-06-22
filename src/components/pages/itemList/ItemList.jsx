import "./itemList.css";
const ItemList = ({ nombreTienda, bienvenida }) => {
  return (
    <div className="containerBienvenida">
      <h3>
        {bienvenida} {nombreTienda}
      </h3>
    </div>
  );
};

export default ItemList;
