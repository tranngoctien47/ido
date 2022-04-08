import React, { Suspense } from "react";
import { useEffect } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import store from "./redux";
import Routes from "./core/RouterConfig";
import Loadding from "./components/Loadding";
import TranslateProvider from "./translate";
import { ParallaxProvider } from "react-scroll-parallax";
import Aos from "aos";
import "aos/dist/aos.css";
import { GlobalStyle } from "components/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "components/styles/Theme";

function App() {
  useEffect(() => {
    Aos.init({ duration: 500, startEvent: "load" });
    Aos.refresh();
  }, []);
  return (
    <ParallaxProvider>
      <TranslateProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Provider store={store}>
            <BrowserRouter>
              <Suspense fallback={<div> Loading... </div>}>
                {" "}
                {/* <Suspense fallback={<Loadding />}> */} <Routes />
              </Suspense>{" "}
            </BrowserRouter>{" "}
          </Provider>{" "}
        </ThemeProvider>{" "}
      </TranslateProvider>
    </ParallaxProvider>
  );
}

export default App;
