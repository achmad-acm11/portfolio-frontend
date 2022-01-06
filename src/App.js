import "./assets/scss/style.scss";
import "./assets/js/script";
import HomePage from "pages/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutPage from "pages/AboutPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
