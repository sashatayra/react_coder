import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={1} color="secondary">
        <ShoppingCartIcon sx={{ color: "#40128B" }} />
      </Badge>
    </div>
  );
};

export default CartWidget;
