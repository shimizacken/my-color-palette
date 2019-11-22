import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ColoredTitle } from "./components/common/ColoredTitle";
import { ListContainer } from "./features/colors-list-container";
import { ColorCounterContainer } from "./features/colored-counter";
import { store } from "./state/store";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ColoredTitle text="My Color List" />
        <ColorCounterContainer />
        <ListContainer />
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
