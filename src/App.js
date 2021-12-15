import "./assets/styles/App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Nav } from "./components";
import { Home } from "./pages";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <AnimatePresence>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
