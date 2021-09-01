import Home from "./pages/Home/Home";
import "./App.css";
import { ContextProvider } from "./context/Context";
const App = () => {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
};

export default App;
