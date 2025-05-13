import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Terms from "./components/Terms";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/Global";

import "./App.css";

const theme = {
  color: {
    lime: "hsl(61, 70%, 52%)",
    red: "hsl(4, 69%, 50%)",
    slate100: "hsl(202, 86%, 94%)",
    slate300: "hsl(203, 41%, 72%)",
    slate500: "hsl(200, 26%, 54%)",
    grey: "#e1e1e1",
    lightBlue: "#00a6e4",
    darkBlue: "#253340",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    laptop: "1070px",
  },
};

function AppRoutes() {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/terms", element: <Terms /> },
    { path: "/services", element: <Services /> },
  ]);
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <>
          <AppRoutes />
        </>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
