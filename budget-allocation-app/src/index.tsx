import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ChannelsProvider from "./context/channels";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChannelsProvider>
      <App />
    </ChannelsProvider>
  </React.StrictMode>
);
