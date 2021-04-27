// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Game from "./game/Game";

function App() {
  return (
      <div className="App">
          <Game title={"Starwars Quartet"}/>
      </div>
  );
}

export default App;
