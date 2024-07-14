import { Fragment } from "react";
import CoreConcepts from "./components/CoreConcept/CoreConceps.jsx";
import Examples from "./components/CoreConcept/Examples.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
