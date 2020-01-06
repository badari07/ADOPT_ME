import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => (
  <div>
    <h1 id="somthing-important">Adopt_Me</h1>
    <SearchParams />
  </div>
);

render(<App />, document.getElementById("root"));
