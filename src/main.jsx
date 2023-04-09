import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store, persistor } from "./Redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "@fontsource/montserrat";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ClientId } from "./Utils/ClientId";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={ClientId}>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
