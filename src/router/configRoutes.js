import ItemDetailContainer from "../components/pages/itemList/itemDetail/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import CartContainer from "../components/pages/itemList/cart/CartContainer";
import Dashboard from "../Dashboard";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "detail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "dashboard",
    path: "/dashboard",
    Element: Dashboard,
  },
];
