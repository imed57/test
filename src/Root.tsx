/* eslint-disable global-require */
import { FC } from "react";
import { Provider } from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";
import { Web3ContextProvider } from "./hooks/web3Context";

import store from "./store";
import LandingPage from "./views/landing/LandingPage";
import Dashboard from "./Dashboard";
import NotFound from "./views/404/NotFound";
import App from "./App";

const Root: FC = () => {
  return (
    <Web3ContextProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Web3ContextProvider>
  );
};

export default Root;
