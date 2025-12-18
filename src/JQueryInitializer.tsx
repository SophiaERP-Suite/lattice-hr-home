import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const JQueryInitializer: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.initComponents) {
      window.initComponents();
    }
  }, [location]);

  return null;
};

export default JQueryInitializer;
