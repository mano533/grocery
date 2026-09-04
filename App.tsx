import React from "react";
import MainApp from "./MainApp";
import { store } from "./src/store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default App;
