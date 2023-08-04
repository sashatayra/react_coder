import { useState, useEffect } from "react";
import { products } from "../../productsMock";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";
import { database } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const itemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;

    let productsCollection = collection(database, "products");

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      console.log(res.docs);
      let arrayProductos = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayProductos);
    });
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default itemListContainer;
