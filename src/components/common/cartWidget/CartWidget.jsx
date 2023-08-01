import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
// import { CartContext } from "../../../context/CartContext";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  let total = totalQuantity();

  return (
    <div>
      <Link to="/cart" style={{ color: "#40128B" }}>
        <Badge badgeContent={total} color="secondary" showZero>
          <ShoppingCartIcon sx={{ color: "#40128B" }} />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
