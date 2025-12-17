import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import { ProfileContext } from "../utils/main/Contexts";

const MainLayout = () => {
  const [registeredScripts, setRegisteredScripts] = useState<boolean>(false);

  const [profileType, setProfileType] = useState<"employer" | "candidate">(
    "candidate"
  );

  useEffect(() => {
    const scriptUrls = [
      "/one/assets/main/js/plugins/jquery-3-7-1.min.js",
      "/one/assets/main/js/plugins/bootstrap.min.js",
      "/one/assets/main/js/plugins/fontawesome.js",
      "/one/assets/main/js/plugins/aos.js",
      "/one/assets/main/js/plugins/counter.js",
      "/one/assets/main/js/plugins/magnific-popup.js",
      "/one/assets/main/js/plugins/nice-select.js",
      "/one/assets/main/js/plugins/waypoints.js",
      "/one/assets/main/js/plugins/slick-slider.js",
      "/one/assets/main/js/plugins/circle-progress.js",
      "/one/assets/main/js/main.js",
    ];

    // Load all scripts sequentially
    const loadScriptsSequentially = async () => {
      for (const src of scriptUrls) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.async = true;
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
      }

      setRegisteredScripts(true);
    };

    if (!registeredScripts) loadScriptsSequentially();
  }, []);

  return (
    <>
      {/*===== PROGRESS STARTS=======*/}
      <div className="paginacontainer">
        <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
      </div>
      {/*===== PROGRESS ENDS=======*/}

      <Header />

      <main>
        <ProfileContext.Provider value={{ profileType, setProfileType }}>
          {" "}
          <Outlet />
        </ProfileContext.Provider>
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
