import { GifList, GifSelected } from "./components";
import "./App.css";
const App = () => (
  <>
    <h1>Giphy App</h1>
    <div className="search">
      <input className="search-input" type="text" />
      <input className="search-button" type="submit" />
    </div>
    <div className="content">
      <GifList  />
      {/*gifSelected.images*/ true && <GifSelected />}
    </div>
  </>
);

export default App;
