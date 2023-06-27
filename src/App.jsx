import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemList/itemListContainer";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";

function App() {
  const bienvenida = "Bienvenido a";
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
        <ItemListContainer bienvenida={bienvenida} />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
