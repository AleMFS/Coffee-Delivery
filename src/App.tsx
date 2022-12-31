import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Routes";
import { CartContextProvider } from "./context/CartContext";


export default function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider >
          <Router />
        </CartContextProvider>

      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

