import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { App } from "./App";
import "./index.css";
import MyComponent from "./MyComponent";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <MyComponent />
  </StrictMode>
);
