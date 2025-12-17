import { NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import logo1 from "../../assets/main/img/logo/logo1.png"
import nigeria from "../../assets/main/img/countries/nigeria.png"
import britain from "../../assets/main/img/countries/britain.png"
import ghana from "../../assets/main/img/countries/ghana.png"
import canada from "../../assets/main/img/countries/canada.png"
import southAfrica from "../../assets/main/img/countries/south-africa.jpeg"
import usflag from "../../assets/main/img/countries/usa.png"

const bannerPages = ["home"];

const Header = () => {
  const pagePath = useLocation()
    .pathname.split("/")
    .filter((value) => value)[0];

  const [country, setCountry] = useState<{ name: string; src: string }>({
    name: "NGN",
    src: nigeria,
  });

  const changeCountry = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.currentTarget as HTMLLIElement;
    const value = target.getAttribute("data-value");

    const imgSrc = target.querySelector("img")?.src;
    setCountry({ name: String(value).toUpperCase(), src: String(imgSrc) });
  };

  return (
    <>
      {/*=====HEADER START=======*/}
      {!pagePath || bannerPages.includes(pagePath) ? (
        <header className="homepage2-body">
          <div
            id="vl-header-sticky"
            className="vl-header-area vl-transparent-header"
          >
            <div
              className="container mobile-head-bg"
              style={{ maxWidth: "100%", padding: "0 50px" }}
            >
              <div
                className="row align-items-center"
                style={{ justifyContent: "space-between", flexWrap: "nowrap" }}
              >
                <div className="col-lg-2 col-md-6 col-6">
                  <div className="vl-logo">
                    <NavLink to="/home">
                      <img src={logo1} alt="" />
                    </NavLink>
                  </div>
                </div>
                <div
                  className="col-lg-8 d-none d-lg-block"
                  style={{ width: "fit-content" }}
                >
                  <div className="vl-main-menu text-center">
                    <nav className="vl-mobile-menu-active">
                      <ul>
                        <li className="has-dropdown home-nav-link">
                          <a href="/one/home">Home </a>
                        </li>
                        <li className="has-dropdown">
                          <NavLink to="/jobs">Jobs</NavLink>
                        </li>

                        <li>
                          <a href="/one/employers">Employers</a>
                        </li>

                        <li>
                          <NavLink to="/candidates">Candidates</NavLink>
                        </li>

                        <li>
                          <NavLink to="/pricing">Pricing</NavLink>
                        </li>

                        <li>
                          <NavLink to="/login">Login</NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-6 top-right-nav">
                  <div className="vl-hero-btn d-none d-lg-block text-end">
                    <div className="hero-btn1">
                      <NavLink to="/register" className="vl-btn2">
                        Get started
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </NavLink>
                    </div>
                  </div>

                  <div className="country-selector">
                    <span className="selected-country">
                      <img src={country.src} alt="" /> &nbsp;&nbsp;
                      <span className="selected-country-name">
                        {" "}
                        {country.name}
                      </span>
                    </span>

                    <ul className="country-selector-list">
                      <li data-value="ngn" onClick={changeCountry}>
                        <img
                          src={nigeria}
                          alt=""
                        />{" "}
                        <span>NGN</span>
                      </li>
                      <li data-value="gbp" onClick={changeCountry}>
                        <img
                          src={britain}
                          alt=""
                        />{" "}
                        <span>GBP</span>
                      </li>
                      <li data-value="usd" onClick={changeCountry}>
                        <img src={usflag} alt="" />{" "}
                        <span>USD</span>
                      </li>{" "}
                      <li data-value="ghs" onClick={changeCountry}>
                        <img
                          src={ghana}
                          alt=""
                        />{" "}
                        <span>GHS</span>
                      </li>{" "}
                      <li data-value="cad" onClick={changeCountry}>
                        <img
                          src={canada}
                          alt=""
                        />{" "}
                        <span>CAD</span>
                      </li>{" "}
                      <li data-value="zar" onClick={changeCountry}>
                        <img
                          src={southAfrica}
                          alt=""
                        />{" "}
                        <span>ZAR</span>
                      </li>
                    </ul>
                  </div>

                  <div className="vl-header-action-item d-block d-lg-none">
                    <button type="button" className="vl-offcanvas-toggle">
                      <i className="fa-solid fa-bars-staggered"></i>
                    </button>
                  </div>
                  <div className="cart-container">
                    <IoCartOutline className="cart-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <header className="homepage1-body">
          <div
            id="vl-header-sticky"
            className="vl-header-area vl-transparent-header"
          >
            <div
              className="container mobile-head-bg"
              style={{ maxWidth: "100%", padding: "0 50px" }}
            >
              <div
                className="row align-items-center mobile-head-bg"
                style={{ justifyContent: "space-between", flexWrap: "nowrap" }}
              >
                <div className="col-lg-2 col-md-6 col-6">
                  <div className="vl-logo">
                    <NavLink to="/home">
                      <img src={logo1} alt="" />
                    </NavLink>
                  </div>
                </div>
                <div
                  className="col-lg-8 d-none d-lg-block"
                  style={{ width: "fit-content" }}
                >
                  <div className="vl-main-menu text-center">
                    <nav className="vl-mobile-menu-active">
                      <ul>
                        <li className="has-dropdown home-nav-link">
                          <NavLink to="/home">Home </NavLink>
                        </li>
                        <li className="has-dropdown">
                          <NavLink to="/jobs">Jobs</NavLink>
                        </li>

                        <li>
                          <a href="/one/employers">Employers</a>
                        </li>

                        <li>
                          <NavLink to="/candidates">Candidates</NavLink>
                        </li>

                        <li>
                          <NavLink to="/pricing">Pricing</NavLink>
                        </li>

                        <li>
                          <NavLink to="/login">Login</NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-6 top-right-nav">
                  <div className="vl-hero-btn d-none d-lg-block text-end">
                    <div className="hero-btn1">
                      <NavLink to="/register" className="vl-btn2">
                        Get started
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </NavLink>
                    </div>
                  </div>

                  <div className="country-selector">
                    <span className="selected-country">
                      <img src={country.src} alt="" /> &nbsp;&nbsp;
                      <span className="selected-country-name">
                        {" "}
                        {country.name}
                      </span>
                    </span>

                    <ul className="country-selector-list">
                      <li data-value="ngn" onClick={changeCountry}>
                        <img
                          src={nigeria}
                          alt=""
                        />{" "}
                        <span>NGN</span>
                      </li>
                      <li data-value="gbp" onClick={changeCountry}>
                        <img
                          src={britain}
                          alt=""
                        />{" "}
                        <span>GBP</span>
                      </li>
                      <li data-value="usd" onClick={changeCountry}>
                        <img src={usflag} alt="" />{" "}
                        <span>USD</span>
                      </li>{" "}
                      <li data-value="ghs" onClick={changeCountry}>
                        <img
                          src={ghana}
                          alt=""
                        />{" "}
                        <span>GHS</span>
                      </li>{" "}
                      <li data-value="cad" onClick={changeCountry}>
                        <img
                          src={canada}
                          alt=""
                        />{" "}
                        <span>CAD</span>
                      </li>{" "}
                      <li data-value="zar" onClick={changeCountry}>
                        <img
                          src={southAfrica}
                          alt=""
                        />{" "}
                        <span>ZAR</span>
                      </li>
                    </ul>
                  </div>

                  <div className="vl-header-action-item d-block d-lg-none">
                    <button type="button" className="vl-offcanvas-toggle">
                      <i className="fa-solid fa-bars-staggered"></i>
                    </button>
                  </div>

                  <div className="cart-container">
                    <IoCartOutline className="cart-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
      {/*=====HEADER END =======*/}

      {/*===== MOBILE HEADER STARTS =======*/}
      <div className="homepage2-body">
        <div className="vl-offcanvas">
          <div className="vl-offcanvas-wrapper">
            <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-90">
              <div className="vl-offcanvas-logo">
                <NavLink to="/home">
                  <img src={logo1} alt="" />
                </NavLink>
              </div>
              <div className="vl-offcanvas-close">
                <button className="vl-offcanvas-close-toggle">
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>

            <div className="vl-offcanvas-menu d-lg-none mb-40">
              <nav></nav>

              <nav className="cart-mobile">
                <ul>
                  <li>
                    <a href="#">Cart</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="space20"></div>
            <div className="vl-offcanvas-info">
              <h3 className="vl-offcanvas-sm-title">Contact Us</h3>
              <div className="space20"></div>
              <span>
                <a href="#">
                  {" "}
                  <i className="fa-regular fa-envelope"></i> +234 805 678 9947
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="fa-solid fa-phone"></i> contact@lattice.com
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="fa-solid fa-location-dot"></i> 22 Adeola Odeku
                  Street, Victoria Island, Lagos, Nigeria
                </a>
              </span>
            </div>
            <div className="space20"></div>
            <div className="vl-offcanvas-social">
              <h3 className="vl-offcanvas-sm-title">Follow Us</h3>
              <div className="space20"></div>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="vl-offcanvas-overlay"></div>
      </div>
      {/*===== MOBILE HEADER STARTS =======*/}
    </>
  );
};

export default Header;
