import React from "react";
// import global style
import { GlobalStyle } from "./style/Global.styles";
// Router
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/index";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
