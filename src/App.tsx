import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter basename="/one">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
