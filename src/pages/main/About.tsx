import { NavLink } from "react-router-dom";
import wIcons10 from "../../assets/main/img/icons/w-icons10.svg"
import hero11 from "../../assets/main/img/all-images/hero/hero-img11.webp"
import about9 from "../../assets/main/img/all-images/about/about-img9.webp"
import about3 from "../../assets/main/img/icons/about-icons3.svg"
import about4 from "../../assets/main/img/icons/about-icons4.svg"
import choose1 from "../../assets/main/img/all-images/others/choose-img1.webp"
import element5 from "../../assets/main/img/elements/elements5.png"
import wIcons8 from "../../assets/main/img/icons/w-icons8.svg"

const About = () => {
  return (
    <>
      {/*===== HERO AREA STARTS =======*/}
      <div
        className="inner-header-area"
        style={{
          backgroundImage: "url(/assets/main/img/all-images/bg/hero-bg7.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="inner-heading">
                <h1>About Us</h1>
                <div className="space20"></div>
                <div>
                  <NavLink to="/home">
                    Home <i className="fa-solid fa-angle-right"></i>
                  </NavLink>{" "}
                  <span>About Us</span>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <div className="imges">
                <img
                  src={hero11}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== HERO AREA ENDS =======*/}
      {/*===== ABOUT AREA STARTS =======*/}
      <div className="about-inner1-area sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-widget-area1 heading1">
                <div className="img1">
                  <img
                    src={about9}
                    alt=""
                  />
                </div>
                <div className="space32"></div>
                <div
                  className="about2-boxarea"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                >
                  <div className="icons">
                    <img src={about3} alt="" />
                  </div>
                  <div className="text-area">
                    <a href="#">Committed to Connecting Talent with Purpose</a>
                    <div className="space16"></div>
                    <p>
                      We believe success happens when people find the right fit.
                      Our mission is to link passionate professionals with
                      organizations where their contributions make a difference.
                    </p>
                  </div>
                </div>
                <div className="space24"></div>
                <div
                  className="about2-boxarea"
                  data-aos="fade-left"
                  data-aos-duration="1300"
                >
                  <div className="icons">
                    <img src={about4} alt="" />
                  </div>
                  <div className="text-area">
                    <a href="#"> Building a New Standard in Recruitment</a>
                    <div className="space16"></div>
                    <p>
                      Driven by innovation and trust, we’re reshaping how
                      businesses hire and how professionals find meaningful
                      career opportunities in every field.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="heading1">
                <h5
                  className="vl-section-subtitle"
                  data-aos="zoom-in"
                  data-aos-duration="900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M9.45001 17.8772C14.2115 17.6442 18 13.7338 18 8.94408C18 7.4743 17.6433 6.08732 17.0111 4.86399C14.4764 6.3183 13.2091 7.04546 12.2507 8.02546C11.1061 9.19582 10.2724 10.6308 9.82481 12.201C9.45001 13.5159 9.45001 14.9697 9.45001 17.8772Z"
                      fill="#28AA4A"
                    />
                    <path
                      d="M8.55001 17.8772C3.78851 17.6442 0 13.7338 0 8.94408C0 7.47429 0.356744 6.08731 0.988876 4.86398C3.52358 6.3183 4.79093 7.04546 5.74937 8.02547C6.89397 9.19583 7.72761 10.6308 8.17521 12.2011C8.55001 13.5159 8.55001 14.9697 8.55001 17.8772Z"
                      fill="#28AA4A"
                    />
                    <path
                      d="M1.43959 4.08981C3.97405 5.54399 5.24127 6.27107 6.57492 6.60594C8.16664 7.00559 9.83338 7.00559 11.4251 6.60594C12.7587 6.27108 14.026 5.54399 16.5604 4.08982C14.9571 1.62862 12.1699 0 9 0C5.8301 0 3.04295 1.62862 1.43959 4.08981Z"
                      fill="#28AA4A"
                    />
                  </svg>{" "}
                  aBOUT US
                </h5>
                <div className="space16"></div>
                <h2
                  className="vl-section-title"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  Dedicated to Transforming Careers & Workplaces
                </h2>
                <div className="space16"></div>
                <p data-aos="zoom-in" data-aos-duration="1100">
                  From short-term contracts to full-time placements, we connect
                  skilled professionals with companies across industries,
                  helping both grow and succeed.
                </p>
                <div className="space32"></div>
                <div className="img1">
                  <img
                    src="../../assets/main/img/all-images/about/about-img10.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== ABOUT AREA ENDS =======*/}
      {/*===== WORK AREA STARTS =======*/}
      <div className="choose-about-area sp1" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 m-auto">
              <div className="heading1 text-center space-margin60">
                <h5
                  className="vl-section-subtitle"
                  data-aos="zoom-in"
                  data-aos-duration="900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M9.45001 17.8772C14.2115 17.6442 18 13.7338 18 8.94408C18 7.4743 17.6433 6.08732 17.0111 4.86399C14.4764 6.3183 13.2091 7.04546 12.2507 8.02546C11.1061 9.19582 10.2724 10.6308 9.82481 12.201C9.45001 13.5159 9.45001 14.9697 9.45001 17.8772Z"
                      fill="#28AA4A"
                    />
                    <path
                      d="M8.55001 17.8772C3.78851 17.6442 0 13.7338 0 8.94408C0 7.47429 0.356744 6.08731 0.988876 4.86398C3.52358 6.3183 4.79093 7.04546 5.74937 8.02547C6.89397 9.19583 7.72761 10.6308 8.17521 12.2011C8.55001 13.5159 8.55001 14.9697 8.55001 17.8772Z"
                      fill="#28AA4A"
                    />
                    <path
                      d="M1.43959 4.08981C3.97405 5.54399 5.24127 6.27107 6.57492 6.60594C8.16664 7.00559 9.83338 7.00559 11.4251 6.60594C12.7587 6.27108 14.026 5.54399 16.5604 4.08982C14.9571 1.62862 12.1699 0 9 0C5.8301 0 3.04295 1.62862 1.43959 4.08981Z"
                      fill="#28AA4A"
                    />
                  </svg>{" "}
                  Why Choose Us
                </h5>
                <div className="space16"></div>
                <h2
                  className="vl-section-title"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  Let Us Help You Reach Your Goals
                </h2>
                <div className="space16"></div>
                <p>
                  {" "}
                  We go beyond recruitment by providing staffing solutions
                  tailored to the unique needs of professionals and employers
                  across all industries.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="choose-button-area">
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Our Mission
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Our Vision
                    </button>
                  </li>
                </ul>
              </div>
              <div className="space50"></div>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabIndex={0}
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="choose-heading">
                        <h4>Empowering Careers Everywhere</h4>
                        <div className="space20"></div>
                        <p>
                          Our mission is to connect talented professionals with
                          the right opportunities, helping them grow and make a
                          meaningful impact in their fields.
                        </p>
                        <div className="space32"></div>
                        <div
                          className="choose2-boxarea"
                          data-aos="fade-left"
                          data-aos-duration="1200"
                        >
                          <div className="icons">
                            <img
                              src="../../assets/main/img/icons/c-icons1.svg"
                              alt=""
                            />
                          </div>
                          <div className="text-area">
                            <a href="#">
                              Building Stronger Teams
                            </a>
                            <div className="space16"></div>
                            <p>
                              We help organizations find reliable, qualified
                              talent that drives productivity, innovation, and
                              long-term success.
                            </p>
                          </div>
                        </div>
                        <div className="space32"></div>
                        <div
                          className="choose2-boxarea"
                          data-aos="fade-left"
                          data-aos-duration="1300"
                        >
                          <div className="icons">
                            <img
                              src="../../assets/main/img/icons/c-icons2.svg"
                              alt=""
                            />
                          </div>
                          <div className="text-area">
                            <a href="#">
                              Creating Meaningful Connections
                            </a>
                            <div className="space16"></div>
                            <p>
                              Through efficient recruitment solutions, we bridge
                              the gap between employers and professionals to
                              build lasting partnerships.
                            </p>
                          </div>
                        </div>

                        <div className="space32"></div>
                        <div
                          className="choose2-boxarea"
                          data-aos="fade-left"
                          data-aos-duration="1300"
                        >
                          <div className="icons">
                            <img
                              src="../../assets/main/img/icons/c-icons3.svg"
                              alt=""
                            />
                          </div>
                          <div className="text-area">
                            <a href="#">
                              Driving Excellence Through Innovation
                            </a>
                            <div className="space16"></div>
                            <p>
                              We continuously enhance our platform to make
                              hiring and job searching faster, smarter, and more
                              effective across all industries.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="img1">
                        <img
                          src={choose1}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabIndex={0}
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="choose-heading">
                        <h4>Transforming Recruitment for the Future</h4>
                        <div className="space20"></div>
                        <p>
                          Our vision is to revolutionize how organizations
                          discover, hire, and manage exceptional talent.
                        </p>
                        <div className="space32"></div>
                        <div
                          className="choose2-boxarea"
                          data-aos="fade-left"
                          data-aos-duration="1200"
                        >
                          <div className="icons">
                            <img
                              src="../../assets/main/img/icons/c-icons1.svg"
                              alt=""
                            />
                          </div>
                          <div className="text-area">
                            <a href="#">
                              Connecting People, Powering Progress
                            </a>
                            <div className="space16"></div>
                            <p>
                              We aim to build a dynamic network where
                              professionals and employers grow, collaborate, and
                              succeed together.
                            </p>
                          </div>
                        </div>
                        <div className="space32"></div>
                        <div
                          className="choose2-boxarea"
                          data-aos="fade-left"
                          data-aos-duration="1300"
                        >
                          <div className="icons">
                            <img
                              src="../../assets/main/img/icons/c-icons2.svg"
                              alt=""
                            />
                          </div>
                          <div className="text-area">
                            <a href="service-single.html">
                              Leading with Trust and Integrity
                            </a>
                            <div className="space16"></div>
                            <p>
                              We envision a transparent and reliable platform
                              trusted by businesses and job seekers across every
                              industry.
                            </p>
                          </div>
                        </div>

                        <div className="space32"></div>
                        <div
                          className="choose2-boxarea"
                          data-aos="fade-left"
                          data-aos-duration="1300"
                        >
                          <div className="icons">
                            <img
                              src="../../assets/main/img/icons/c-icons3.svg"
                              alt=""
                            />
                          </div>
                          <div className="text-area">
                            <a href="service-single.html">
                              Inspiring a Better Tomorrow
                            </a>
                            <div className="space16"></div>
                            <p>
                              By empowering people and organizations, we strive
                              to create a stronger, more connected workforce for
                              the future.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="img1">
                        <img
                          src={choose1}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== WORK AREA ENDS =======*/}
      {/*===== WORK process STARTS =======*/}
      <div className="work1 sp1" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 m-auto">
              <div className="heading1 text-center space-margin60">
                <h5
                  className="vl-section-subtitle"
                  data-aos="zoom-in"
                  data-aos-duration="900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M9.45001 17.8772C14.2115 17.6442 18 13.7338 18 8.94408C18 7.4743 17.6433 6.08732 17.0111 4.86399C14.4764 6.3183 13.2091 7.04546 12.2507 8.02546C11.1061 9.19582 10.2724 10.6308 9.82481 12.201C9.45001 13.5159 9.45001 14.9697 9.45001 17.8772Z"
                      fill="#28AA4A"
                    />
                    <path
                      d="M8.55001 17.8772C3.78851 17.6442 0 13.7338 0 8.94408C0 7.47429 0.356744 6.08731 0.988876 4.86398C3.52358 6.3183 4.79093 7.04546 5.74937 8.02547C6.89397 9.19583 7.72761 10.6308 8.17521 12.2011C8.55001 13.5159 8.55001 14.9697 8.55001 17.8772Z"
                      fill="#28AA4A"
                    />
                    <path
                      d="M1.43959 4.08981C3.97405 5.54399 5.24127 6.27107 6.57492 6.60594C8.16664 7.00559 9.83338 7.00559 11.4251 6.60594C12.7587 6.27108 14.026 5.54399 16.5604 4.08982C14.9571 1.62862 12.1699 0 9 0C5.8301 0 3.04295 1.62862 1.43959 4.08981Z"
                      fill="#28AA4A"
                    />
                  </svg>{" "}
                  How it works
                </h5>
                <div className="space16"></div>
                <h3
                  className="vl-section-title"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  Our Process Made Simple & Effective
                </h3>
                <div className="space16"></div>
                <p data-aos="zoom-in" data-aos-duration="1100">
                  We connect the right talent to the right roles through smart,
                  tailored matching.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div
                className="works-main-widget-area"
                data-aos="zoom-in-up"
                data-aos-duration="900"
              >
                <div className="text-end">
                  <div className="icons">
                    <img src={wIcons8} alt="" />
                  </div>
                </div>
                <div className="space70 d-lg-block d-none"></div>
                <div className="space30 d-lg-none d-block"></div>
                <div className="works8-boxarea">
                  <a href="projects-single.html">Set Your Goals</a>
                  <div className="space16"></div>
                  <p>
                    Job seekers highlight skills; employers outline hiring
                    needs.
                  </p>
                  <h5>02</h5>
                </div>
              </div>
              <div
                className="works-main-widget-area"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <div className="space70 d-lg-block d-none"></div>
                <div className="space30 d-lg-none d-block"></div>
                <div className="text-end">
                  <div className="icons">
                    <img src={wIcons10} alt="" />
                  </div>
                </div>
                <div className="space70 d-lg-block d-none"></div>
                <div className="space30 d-lg-none d-block"></div>
                <div className="works8-boxarea">
                  <a href="projects-single.html">Hire & Grow</a>
                  <div className="space16"></div>
                  <p>
                    Build your team or advance your career — in any industry.
                  </p>
                  <h5>04</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="space30 d-lg-none d-block"></div>
              <div className="works-main-widget-area2">
                <div
                  className="works8-boxarea"
                  data-aos="zoom-in-up"
                  data-aos-duration="1100"
                >
                  <a href="projects-single.html">Sign Up</a>
                  <div className="space16"></div>
                  <p>Create your profile as a professional or employer.</p>
                  <h5>01</h5>
                </div>
                <div className="space70 d-lg-block d-none"></div>
                <div className="space30 d-lg-none d-block"></div>
                <div className="text-start">
                  <div className="icons">
                    <img src={wIcons8} alt="" />
                  </div>
                </div>
                <div className="space70 d-lg-block d-none"></div>
                <div className="space30 d-lg-none d-block"></div>
              </div>

              <div
                className="works-main-widget-area2"
                data-aos="zoom-in-up"
                data-aos-duration="1200"
              >
                <div className="works8-boxarea">
                  <a href="projects-single.html">Connect & Apply</a>
                  <div className="space16"></div>
                  <p>Browse jobs or review candidates that fit perfectly.</p>
                  <h5>03</h5>
                </div>
                <div className="space70 d-lg-block d-none"></div>
                <div className="space30 d-lg-none d-block"></div>
                <div className="text-start">
                  <div className="icons">
                    <img src={wIcons10} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== WORK process ENDS =======*/}

      {/*===== CTA AREA STARTS =======*/}
      <div className="cta2-aection-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-bg-area">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div
                      className="cta-images-area"
                      data-aos="zoom-in"
                      data-aos-duration="900"
                    >
                      <img
                        src={element5}
                        alt=""
                        className="elements5"
                      />
                      <img
                        src="../../assets/main/img/all-images/cta/cta-img1.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="cta-heading">
                      <h2 data-aos="zoom-in" data-aos-duration="900">
                        Empower Your Team, Shape Your Future
                      </h2>
                      <div className="row">
                        <div
                          className="col-lg-6 col-md-6"
                          data-aos="zoom-in"
                          data-aos-duration="1000"
                        >
                          <div className="cta-contact-area">
                            <div className="icons">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                              >
                                <path
                                  d="M17.7333 9.0013C19.0357 9.2554 20.2325 9.89232 21.1708 10.8306C22.1091 11.7688 22.746 12.9656 23 14.268M17.7333 3.66797C20.4391 3.96856 22.9621 5.1802 24.8884 7.10398C26.8145 9.02776 28.0295 11.5493 28.3333 14.2546M23.6667 29.0013C12.2528 29.0013 3 19.7485 3 8.33464C3 7.81968 3.01884 7.30912 3.05585 6.80361C3.09833 6.22346 3.11957 5.9334 3.2716 5.66934C3.39752 5.45065 3.62067 5.24325 3.84797 5.13364C4.12241 5.0013 4.44251 5.0013 5.08268 5.0013H8.83909C9.37744 5.0013 9.64661 5.0013 9.87736 5.0899C10.0812 5.16817 10.2627 5.29529 10.4059 5.4601C10.568 5.64668 10.66 5.89965 10.844 6.40558L12.3988 10.6814C12.6128 11.27 12.7199 11.5643 12.7017 11.8436C12.6857 12.0898 12.6016 12.3267 12.4589 12.528C12.2971 12.7563 12.0286 12.9175 11.4915 13.2397L9.66667 14.3346C11.2692 17.8665 14.1335 20.7345 17.6667 22.3346L18.7616 20.5098C19.0839 19.9726 19.2449 19.7041 19.4732 19.5424C19.6745 19.3997 19.9115 19.3156 20.1577 19.2996C20.4369 19.2814 20.7313 19.3885 21.32 19.6025L25.5957 21.1573C26.1016 21.3413 26.3547 21.4333 26.5412 21.5954C26.706 21.7386 26.8332 21.9201 26.9113 22.124C27 22.3546 27 22.6238 27 23.1622V26.9186C27 27.5588 27 27.8789 26.8676 28.1533C26.758 28.3806 26.5507 28.6038 26.332 28.7297C26.0679 28.8817 25.7779 28.9029 25.1977 28.9454C24.6921 28.9825 24.1816 29.0013 23.6667 29.0013Z"
                                  stroke="#28AA4A"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="text">
                              <p>Call Us 24/7</p>
                              <div className="space16"></div>
                              <a href="tel:+2348056789947">
                                {" "}
                                +234 805 678 9947
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-6 col-md-6"
                          data-aos="zoom-in"
                          data-aos-duration="1100"
                        >
                          <div className="cta-contact-area">
                            <div className="icons">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="34"
                                viewBox="0 0 34 34"
                                fill="none"
                              >
                                <path
                                  d="M5.66667 25.4987L12.75 16.9987M28.3333 25.4987L21.25 16.9987M4.25 11.332L14.4854 18.1555C15.3942 18.7615 15.8485 19.0645 16.3397 19.1821C16.7738 19.2862 17.2262 19.2862 17.6603 19.1821C18.1515 19.0645 18.6058 18.7615 19.5146 18.1555L29.75 11.332M8.78333 26.9154H25.2167C26.8035 26.9154 27.597 26.9154 28.203 26.6065C28.7361 26.335 29.1696 25.9015 29.4412 25.3684C29.75 24.7623 29.75 23.9688 29.75 22.382V11.6154C29.75 10.0286 29.75 9.23514 29.4412 8.62906C29.1696 8.09593 28.7361 7.66248 28.203 7.39085C27.597 7.08203 26.8035 7.08203 25.2167 7.08203H8.78333C7.19652 7.08203 6.40311 7.08203 5.79703 7.39085C5.26389 7.66248 4.83045 8.09593 4.55882 8.62906C4.25 9.23514 4.25 10.0285 4.25 11.6154V22.382C4.25 23.9688 4.25 24.7623 4.55882 25.3684C4.83045 25.9015 5.26389 26.335 5.79703 26.6065C6.40311 26.9154 7.19651 26.9154 8.78333 26.9154Z"
                                  stroke="#28AA4A"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="text">
                              <p>Mail Us Anytime</p>
                              <div className="space16"></div>
                              <a href="mailto: contact@lattice.com">
                                contact@lattice.com
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== CTA AREA ENDS =======*/}
    </>
  );
};

export default About;
