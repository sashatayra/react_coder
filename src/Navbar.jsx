import ListaNav from "./ListaNav";

const Navbar = () => {
  return (
    <header>
      <h1>NFT Indumentaria</h1>
      <a class="boton-carrito" href="carrito.html">
        <i class="bi bi-cart-fill"></i>Carrito
        <span id="numero-carrito"> 0</span>
      </a>
      <nav>
        <ListaNav />
      </nav>
    </header>
  );
};

export default Navbar;
