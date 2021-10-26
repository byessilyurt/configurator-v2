import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ModelProvider } from "./modelContext";
ReactDOM.render(
  <ModelProvider>
    <App />
  </ModelProvider>,
  document.getElementById("root"),
);
