import { Link, Outlet } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="contenedor-header">
        <div className="header">
          <Link to="/">
            <h1 className="logo">NFT Indumentaria</h1>
          </Link>
          <a class="boton-carrito" href="carrito.html">
            <CartWidget />
          </a>
        </div>
        <nav>
          <ul>
            <Link className="categoria" to="/">
              Inicio
            </Link>
            <Link className="categoria" to="/category/gorras">
              Gorras
            </Link>
            <Link className="categoria" to="/category/camisetas">
              Camisetas
            </Link>
            <Link className="categoria" to="/category/pantalones">
              Pantalones
            </Link>
          </ul>
        </nav>
      </header>
      <Outlet />;
    </>
  );
};

export default Navbar;
