import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { database } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

const CheckoutContainer = () => {
  const navigate = useNavigate();

  const [orderId, setOrderId] = useState("");

  const { cart, totalPrice } = useContext(CartContext);

  let total = totalPrice();

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();
    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    let ordersCollections = collection(database, "orders");
    addDoc(ordersCollections, order).then((res) => setOrderId(res.id));
  };

  cart.forEach((elemento) => {
    let refDoc = doc(database, "products", elemento.id);
    updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
  });

  const funcionDeLosInput = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <div>
      {!orderId ? (
        <form onSubmit={funcionDelFormulario}>
          <input
            type="text"
            placeholder="ingrese su nombre"
            name="name"
            onChange={funcionDeLosInput}
          />
          <input
            type="text"
            placeholder="ingrese su apellido"
            name="lastName"
            onChange={funcionDeLosInput}
          />
          <button type="submit">Enviar</button>
          <button type="button">Cancelar</button>
        </form>
      ) : (
        <div>
          <h3>Compra realizada con exito!</h3>
          <h4>Número de orden: {orderId} </h4>
        </div>
      )}
    </div>
  );
};

export default CheckoutContainer;
