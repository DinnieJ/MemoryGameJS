
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Single from "./pages/single";

function App() {
  document.title = "MemoryJS"
  return (
    <Provider store={store}>
      <div className="app bg-gray-200 h-screen relative">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Menu />
            </Route>
            <Route path="/single">
              <Single/>
            </Route>
          </Switch>
        </Router>
      </div>


    </Provider>
  );
}

export default App;
