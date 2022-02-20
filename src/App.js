import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import "./App.css";
import { HomePage } from "./components/HomePage/HomePage";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <HomePage />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
