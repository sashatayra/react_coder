import { useState, useEffect } from "react";
import { products } from "../../productsMock";
import ItemList from "./itemList";

const itemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default itemListContainer;
