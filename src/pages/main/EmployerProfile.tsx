import { NavLink } from "react-router-dom";
import hero7 from "../../assets/main/img/all-images/bg/hero-bg7.png"
import hero11 from "../../assets/main/img/all-images/hero/hero-img11.webp"
import blog23 from "../../assets/main/img/all-images/blog/blog-img23.webp"
import blog25 from "../../assets/main/img/all-images/blog/blog-img25.webp"
import download from "../../assets/main/img/logo/download.png"

const EmployerDetails = () => {
  return (
    <>
      {/*===== HERO AREA STARTS =======*/}
      <div
        className="inner-header-area"
        style={{
          backgroundImage: `url(${hero7})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="inner-heading">
                <h1>Nova Health</h1>
                <div className="space20"></div>
                <div>
                  <NavLink to="/home">
                    Home <i className="fa-solid fa-angle-right"></i>
                  </NavLink>{" "}
                  <span>Employer Details</span>
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

      {/*===== EMPLOYER AREA STARTS =======*/}

      <div className="blog-details-section sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-main-content padding2 heading1">
                <div className="space32"></div>
                <h4>About NovaHealth</h4>
                <div className="space16"></div>
                <div className="space16"></div>

                <div className="pera">
                  <p>
                    Nova Health is a trusted name in healthcare, dedicated to
                    improving lives through exceptional medical care,
                    innovation, and compassion. Founded with the vision of
                    creating a healthier community, we combine modern technology
                    with a patient-centered approach to deliver outstanding
                    results.
                    <br />
                    <br />
                    Our team of skilled doctors, nurses, and healthcare
                    professionals work tirelessly to ensure every patient
                    receives personalized care in a safe and supportive
                    environment. From preventive health services to advanced
                    medical treatments, Nova Health remains committed to setting
                    new standards in quality healthcare — built on integrity,
                    empathy, and a genuine passion for making a difference.
                  </p>
                </div>

                <div className="space16"></div>
                <div className="space16"></div>
                <div className="space16"></div>

                <div className="img1">
                  <img
                    src={blog23}
                    alt=""
                  />
                </div>

                <div className="space32"></div>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="img1">
                      <img
                        src={blog25}
                        alt=""
                      />
                    </div>
                    <div className="space30 d-md-none d-block"></div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="img1">
                      <img
                        src={blog25}
                        alt=""
                      />
                    </div>
                    <div className="space30 d-md-none d-block"></div>
                  </div>
                </div>

                <div className="space16"></div>
                <div className="space16"></div>

                <h4>Open Positions:</h4>
                <div className="space16"></div>

                <div className="row">
                  <div className="col-lg-12">
                    {/*===== SERVICE AREA STARTS =======*/}
                    <div
                      className="service9 jobs-container"
                      style={{ marginTop: "20px" }}
                    >
                      <div className="container">
                        <div className="row">
                          <div
                            className="col-lg-6 col-md-12"
                            data-aos="zoom-in-up"
                            data-aos-duration="900"
                          >
                            <div className="service9-boxarea">
                              <div className="job-box-head">
                                <div className="job-box-details">
                                  <a
                                    href="/job-details"
                                    className="job-box-name"
                                  >
                                    Pediatric Doctor
                                  </a>
                                </div>

                                <div className="job-box-type">
                                  <span>Part Time</span>
                                </div>
                              </div>

                              <div className="textarea textarea2">
                                <div className="job-box-loc">
                                  <i className="fa-solid fa-location-dot"></i>{" "}
                                  <span>Lagos, Nigeria</span>
                                </div>

                                <div className="job-box-loc job-box-date2">
                                  <i className="fa-solid fa-clock"></i>{" "}
                                  <span>5 hours ago</span>
                                </div>

                                <div className="job-box-loc job-box-price">
                                  <i className="fa-solid fa-tags"></i>{" "}
                                  <span> &#8358;250,000 - &#8358;300,000</span>
                                </div>

                                <div className="job-vacancy-box">
                                  <progress value="50" max="100"></progress>
                                  <span>
                                    20 applied of <span>40 vacancy</span>
                                  </span>
                                </div>

                                <div className="job-box-btn">
                                  <a href="/job-details" className="vl-btn2">
                                    View Job
                                    <span>
                                      <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*===== SERVICE AREA ENDS =======*/}
                  </div>
                </div>

                <div className="case1-section  col-lg-12">
                  <div className="testimonial-arrow job-arrow-box">
                    <div className="prev-arrow">
                      <button>
                        <i className="fa-solid fa-arrow-left"></i>
                      </button>
                    </div>
                    <div className="prev-arrow">
                      <button>1</button>
                    </div>
                    <div className="prev-arrow">
                      <button>2</button>
                    </div>
                    <div className="next-arrow">
                      <button>
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="blog-side-details">
                <div className="blog-widget-area1">
                  <h3>Employer Information</h3>

                  <div className="space16"></div>
                  <div className="space16"></div>

                  <div className="card-body p-2 border-top pt-4">
                    <div className="map border-0">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46310757624!2d3.1191427001003134!3d6.5483693711779205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1762353991000!5m2!1sen!2sng"
                        className="rounded"
                        style={{ border: 0, width: "100%", height: "350px" }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>

                    <div className="mt-4">
                      <div className="d-flex align-items-center justify-content-between mt-2 employer-detail">
                        <span className="text-muted fw-medium">Founded:</span>
                        <span>1997</span>
                      </div>

                      <div className="d-flex align-items-center justify-content-between mt-3 employer-detail">
                        <span className="text-muted fw-medium">Founder:</span>
                        <span>Okoye Julius</span>
                      </div>

                      <div className="d-flex align-items-center justify-content-between mt-3 employer-detail">
                        <span className="text-muted fw-medium">
                          Headquarters:
                        </span>
                        <span>Lagos, Nigeria</span>
                      </div>

                      <div className="d-flex align-items-center justify-content-between mt-3 employer-detail">
                        <span className="text-muted fw-medium">Category:</span>
                        <span>Hospital</span>
                      </div>

                      <div className="d-flex align-items-center justify-content-between mt-3 employer-detail">
                        <span className="text-muted fw-medium">
                          Number of employees:
                        </span>
                        <span>150+</span>
                      </div>

                      <h5 style={{ margin: "30px 0" }}>Get In Touch</h5>

                      <div className="d-flex align-items-center justify-content-between   employer-detail">
                        <span className="text-muted fw-medium">Website:</span>
                        <a href="www.google.com">www.novahealth.com</a>
                      </div>

                      <div className="d-flex align-items-center justify-content-between mt-3 employer-detail">
                        <span className="text-muted fw-medium">Email:</span>
                        <a href="mailto:info@novahealth.com">
                          info@novahealth.com
                        </a>
                      </div>

                      <div className="d-flex align-items-center justify-content-between mt-3 employer-detail">
                        <span className="text-muted fw-medium">
                          Phone Number:
                        </span>
                        <a href="tel:+2341234567890">+234 123 456 7890</a>
                      </div>

                      <div className="d-flex align-items-center justify-content-between mt-3 employer-detail">
                        <span className="text-muted fw-medium">Social:</span>

                        <ul className="list-unstyled social-icon text-sm-end mb-0">
                          <li className="list-inline-item">
                            <a
                              href="http://linkedin.com/company/shreethemes"
                              target="_blank"
                              className="rounded"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-linkedin fea icon-sm align-middle"
                              >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                              </svg>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="https://www.facebook.com/shreethemes"
                              target="_blank"
                              className="rounded"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-facebook fea icon-sm align-middle"
                              >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                              </svg>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="https://www.instagram.com/shreethemes/"
                              target="_blank"
                              className="rounded"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-instagram fea icon-sm align-middle"
                              >
                                <rect
                                  x="2"
                                  y="2"
                                  width="20"
                                  height="20"
                                  rx="5"
                                  ry="5"
                                ></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line
                                  x1="17.5"
                                  y1="6.5"
                                  x2="17.51"
                                  y2="6.5"
                                ></line>
                              </svg>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="https://twitter.com/shreethemes"
                              target="_blank"
                              className="rounded"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-twitter fea icon-sm align-middle"
                              >
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*===== EMPLOYER AREA ENDS =======*/}

      {/*===== RELATED EMPLOYER AREA STARTS =======*/}

      <div className="blog-inner-area sp11">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="heading1 text-center space-margin60">
                <h2>Related Employers</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {/*===== SERVICE AREA STARTS =======*/}
              <div className="service9 jobs-container" style={{ marginTop: 0 }}>
                <div className="container">
                  <div className="row">
                    <div
                      className="col-lg-4 col-md-6"
                      data-aos="zoom-in-up"
                      data-aos-duration="900"
                    >
                      <div className="service9-boxarea">
                        <div className="job-box-head">
                          <div className="job-logo">
                            <img src={download} />
                          </div>
                        </div>

                        <div className="textarea">
                          <a href="/employer-profile" className="title">
                            Nova Health
                          </a>

                          <div className="job-box-category">
                            <label>Category:</label>
                            <span>Hospital</span>
                          </div>

                          <div className="job-box-position">
                            <label>Open Positions:</label>
                            <span>5</span>
                          </div>

                          <div className="job-box-loc">
                            <i className="fa-solid fa-location-dot"></i>{" "}
                            <span>Lagos, Nigeria</span>
                          </div>

                          <div className="job-box-btn">
                            <a href="/employer-profile" className="vl-btn2">
                              View Profile
                              <span>
                                <i className="fa-solid fa-arrow-right"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*===== SERVICE AREA ENDS =======*/}
            </div>
          </div>
        </div>
      </div>

      {/*===== RELATED EMPLOYER AREA END =======*/}
    </>
  );
};

export default EmployerDetails;
