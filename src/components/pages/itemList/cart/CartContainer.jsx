import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

const CartContainer = () => {
  const { deleteById, cart, clearCart, totalPrice } = useContext(CartContext);

  let total = totalPrice();

  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{ width: "200px", border: "2px solid steelblue" }}
          >
            <h3>{elemento.title}</h3>
            <h3>{elemento.price}</h3>
            <h4>Cantidad: {elemento.quantity}</h4>
            <button onClick={() => deleteById(elemento.id)}>Eliminar</button>
          </div>
        );
      })}

      <button onClick={clearCart}>Limpiar carrito</button>

      <h2>Total de la compra: ${total} </h2>
    </div>
  );
};

export default CartContainer;
