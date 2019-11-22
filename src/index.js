import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ColoredTitle } from "./components/ColoredTitle";
import { ListContainer } from "./components/ListContainer";
import { ColorCounterContainer } from "./components/ColorCounterContainer";
import { store } from "./state/store";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ColoredTitle text="My Colors List" />
        <ColorCounterContainer />
        <ListContainer />
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
