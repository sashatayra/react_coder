import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="contenedor-header">
      <div className="header">
        <h1>NFT Indumentaria</h1>
        <a class="boton-carrito" href="carrito.html">
          <CartWidget />
        </a>
      </div>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Gorras</li>
          <li>Camisetas</li>
          <li>Pantalones</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
