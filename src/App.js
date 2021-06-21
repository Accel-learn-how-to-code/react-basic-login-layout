import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Forgot from "./components/forgot";
import Login from "./components/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/forgot">
          <Forgot />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
