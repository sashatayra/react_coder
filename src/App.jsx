import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";
import AppRouter from "./router/AppRouter";
import CartContextComponent from "./context/CartContext";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <CartContextComponent>
          <Navbar />
          <AppRouter />
          <Footer />
        </CartContextComponent>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
