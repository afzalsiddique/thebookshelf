import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
      <React.Fragment>
          <header>
              <Header />
          </header>
          <main>
              <Routes>
                  <Route path="/" element={<Home />} exact />
              </Routes>
          </main>
      </React.Fragment>

  );
}

export default App;
