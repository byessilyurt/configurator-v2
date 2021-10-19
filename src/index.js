import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ModelProvider } from "./modelContext";
ReactDOM.render(
  <React.StrictMode>
    <ModelProvider>
    <App />
    </ModelProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

