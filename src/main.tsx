import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { AllRoutest } from "./router/AllRoutes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <AllRoutest />
  </HashRouter>
);
