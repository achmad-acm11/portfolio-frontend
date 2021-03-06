import "./assets/scss/style.scss";
import "./assets/js/script";
import HomePage from "pages/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutPage from "pages/AboutPage";
import QualificationPage from "pages/QualificationPage";
import SkillsPage from "pages/SkillsPage";
import PortfolioPage from "pages/PortfolioPage";
import ProjectDetailPage from "pages/ProjectDetailPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/qualification" component={QualificationPage} />
            <Route path="/skills" component={SkillsPage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route exact path="/:type(project|case_study)/:id" component={ProjectDetailPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
