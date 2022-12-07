import React from "react";
import { store } from "./store/store";
import { Provider } from "react-redux";
import TheLayout from "./container/MainLyout";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <TheLayout />
      </Provider>
    </>
  );
};

export default App;
