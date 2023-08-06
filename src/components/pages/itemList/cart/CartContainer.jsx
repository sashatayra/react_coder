import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { Link } from "react-router-dom";

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
      {cart.length > 0 ? (
        <>
          <button onClick={clearCart}>Limpiar carrito</button>
          <Link to="/checkout">
            <button>Finalizar Compra</button>
          </Link>
          <h3>Total: $ {total}</h3>
        </>
      ) : (
        <h2>Aun no hay productos en el carrito</h2>
      )}
    </div>
  );
};

export default CartContainer;
