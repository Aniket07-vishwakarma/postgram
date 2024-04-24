import { Provider } from "react-redux";
import "./App.css";
import { LayoutRoutes } from "./layout/routes";
import store from "./redux/store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <LayoutRoutes />
      </Provider>      
    </div>
  );
}

export default App;
