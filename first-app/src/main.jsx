import { createRoot } from "react-dom/client"
import "./index.css";
import ReactFacts from "./reactFacts"


const rootDiv = createRoot(document.querySelector("#root"));
rootDiv.render(
  <>
    <ReactFacts />
  </>
)
