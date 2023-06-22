import ItemList from "./itemList";

const itemListContainer = ({ bienvenida }) => {
  let nombreTienda = "NFT Indumentaria";
  return (
    <div>
      <ItemList bienvenida={bienvenida} nombreTienda={nombreTienda} />
    </div>
  );
};

export default itemListContainer;
