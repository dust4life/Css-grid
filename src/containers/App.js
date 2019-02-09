import React, { Component } from "react";

// constants
import { Titles, TitleArray } from "constants/const";
// components
import { PrintData } from "components/PrintData";

class App extends Component {
  render() {
    return <PrintData titles={Titles} dataArray={TitleArray} />;
  }
}

export default App;
