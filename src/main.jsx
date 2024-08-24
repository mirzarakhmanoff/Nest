import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "@/components/context";
import { initialState, reducer } from "./components/context/reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider initialState={initialState} reducer={reducer}>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
