import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./components/Header";
import Result from "./steps/Result";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";


function App() {
  return (
    <>
    <Header/>
    <Router>
      <Switch>
        <Route exact path="/" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/step3" component={Step3} />
        <Route path="/result" component={Result} />
      </Switch>

    </Router>
    </>
  );
}

export default App;
