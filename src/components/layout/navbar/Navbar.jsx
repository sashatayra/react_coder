import ListaNav from "../../../ListaNav";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="contenedor-header">
      <div className="header">
        <h1>NFT Indumentaria</h1>
        <a class="boton-carrito" href="carrito.html">
          <i class="bi bi-cart-fill"></i>Carrito
          <span id="numero-carrito"> 0</span>
        </a>
      </div>
      <nav>
        <ListaNav />
      </nav>
    </header>
  );
};

export default Navbar;
