import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { store } from "./global/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { NextRouter } from "./Router/NextRouter";

let persistor = persistStore(store);

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={NextRouter} />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
