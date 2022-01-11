import React from "react";
import { createGlobalStyle } from "styled-components";
// Router
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";

const GlobalStyle = createGlobalStyle`  
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  direction: ltr;
  display: flex;
  min-width: 320px;
  flex-direction: column;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  font-family: 'Koh Santepheap', sans-serif;
 }
`;

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
