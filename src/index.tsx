import React from "react";
import ReactDOM from "react-dom/client"; 
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// SSR をサポートするために hydrateRoot を使用
const container = document.getElementById("root");

if (container) {
  ReactDOM.hydrateRoot(
    container,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// アプリのパフォーマンス測定
reportWebVitals();
