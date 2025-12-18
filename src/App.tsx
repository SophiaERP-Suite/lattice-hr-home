import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import JQueryInitializer from "./JQueryInitializer";
import "./assets/main/css/plugins/fontawesome.css";


function App() {
  return (
    <BrowserRouter basename="/one">
      <JQueryInitializer />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
