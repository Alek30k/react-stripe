import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pay from "./Pay";
// import Success from "./Success";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pay">
          <Pay />
        </Route>
        {/* <Route path="/success">
          <Success />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
