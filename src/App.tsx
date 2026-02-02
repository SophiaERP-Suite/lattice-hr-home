import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import JQueryInitializer from "./JQueryInitializer";
import "./assets/main/css/plugins/fontawesome.css";
import { AuthProvider } from "./utils/Auth/AuthProvider";


function App() {
  return (
    <BrowserRouter basename="/one">
      <JQueryInitializer />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
