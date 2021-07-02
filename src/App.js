import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Game from "./game/Game";
import Admin from "./admin/Admin";

export default function App() {
  return (
      <div className="App">
          <Router>
              <Switch>
                  <Route
                      path="/admin"
                      render={() => {
                          return <Admin />;
                      }}
                  />
                  <Route
                      path="/"
                      render={() => {
                          return <Game title="Starwars Quartet" />;
                      }}
                  />
              </Switch>
          </Router>
      </div>
  );
}
