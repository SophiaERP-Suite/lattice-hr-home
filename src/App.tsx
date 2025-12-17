import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import "./assets/main/css/plugins/bootstrap.min.css";
import "./assets/main/css/plugins/aos.css";
import "./assets/main/css/plugins/fontawesome.css";
import "./assets/main/css/plugins/magnific-popup.css";
import "./assets/main/css/plugins/slick-slider.css";
import "./assets/main/css/plugins/nice-select.css";
import "./assets/main/css/main.css";

function App() {
  return (
    <BrowserRouter basename="/one">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
