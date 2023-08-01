import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
