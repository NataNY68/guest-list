import { GuestProvider } from "./GuestContext.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <GuestProvider>
    <App />
  </GuestProvider>
);
