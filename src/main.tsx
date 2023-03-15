import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Iitems } from "./components/types/Itypes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <App id={0} name={""} price={0} category={0} inCart={false} count={0} />
);
