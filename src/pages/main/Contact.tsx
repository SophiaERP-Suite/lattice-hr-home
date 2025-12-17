import { NavLink } from "react-router-dom";

const Contact = () => {
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
                <h1>Contact Us</h1>
                <div className="space20"></div>
                <div>
                  <NavLink to="/home">
                    Home <i className="fa-solid fa-angle-right"></i>
                  </NavLink>{" "}
                  <span>Contact Us</span>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <div className="imges">
                <img
                  src="../../assets/main/img/all-images/hero/hero-img11.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== HERO AREA ENDS =======*/}
      {/*===== CONTACT AREA STARTS =======*/}
      <div className="contact-inner-area sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-box">
                <div className="icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <path
                      d="M5.83333 24.0013L12.5 16.0013M27.1667 24.0013L20.5 16.0013M4.5 10.668L14.1333 17.0901C14.9887 17.6604 15.4163 17.9456 15.8785 18.0562C16.2871 18.1542 16.7129 18.1542 17.1215 18.0562C17.5837 17.9456 18.0113 17.6604 18.8667 17.0901L28.5 10.668M8.76667 25.3346H24.2333C25.7268 25.3346 26.4736 25.3346 27.044 25.044C27.5457 24.7884 27.9537 24.3804 28.2093 23.8786C28.5 23.3082 28.5 22.5614 28.5 21.068V10.9346C28.5 9.44117 28.5 8.69442 28.2093 8.124C27.9537 7.62222 27.5457 7.21428 27.044 6.95862C26.4736 6.66797 25.7268 6.66797 24.2333 6.66797H8.76667C7.2732 6.66797 6.52645 6.66797 5.95603 6.95862C5.45425 7.21428 5.04631 7.62222 4.79065 8.124C4.5 8.69442 4.5 9.44116 4.5 10.9346V21.068C4.5 22.5614 4.5 23.3082 4.79065 23.8786C5.04631 24.3804 5.45425 24.7884 5.95603 25.044C6.52645 25.3346 7.27319 25.3346 8.76667 25.3346Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="text">
                  <h4>Our Email</h4>
                  <div className="space14"></div>
                  <a href="mailto:info@staffx.com"> contact@lattice.com</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-box">
                <div className="icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M18.7333 7.9974C20.0357 8.25149 21.2325 8.88841 22.1708 9.82665C23.1091 10.7649 23.746 11.9617 24 13.2641M18.7333 2.66406C21.4391 2.96465 23.9621 4.17629 25.8884 6.10008C27.8145 8.02385 29.0295 10.5454 29.3333 13.2507M24.6667 27.9974C13.2528 27.9974 4 18.7446 4 7.33073C4 6.81577 4.01884 6.30521 4.05585 5.7997C4.09833 5.21956 4.11957 4.92949 4.2716 4.66544C4.39752 4.44674 4.62067 4.23934 4.84797 4.12973C5.12241 3.9974 5.44251 3.9974 6.08268 3.9974H9.83909C10.3774 3.9974 10.6466 3.9974 10.8774 4.086C11.0812 4.16426 11.2627 4.29138 11.4059 4.4562C11.568 4.64277 11.66 4.89574 11.844 5.40168L13.3988 9.67746C13.6128 10.2661 13.7199 10.5604 13.7017 10.8397C13.6857 11.0859 13.6016 11.3228 13.4589 11.5241C13.2971 11.7524 13.0286 11.9136 12.4915 12.2358L10.6667 13.3307C12.2692 16.8626 15.1335 19.7306 18.6667 21.3307L19.7616 19.5059C20.0839 18.9687 20.2449 18.7002 20.4732 18.5385C20.6745 18.3958 20.9115 18.3117 21.1577 18.2957C21.4369 18.2775 21.7313 18.3846 22.32 18.5986L26.5957 20.1534C27.1016 20.3374 27.3547 20.4294 27.5412 20.5915C27.706 20.7347 27.8332 20.9162 27.9113 21.1201C28 21.3507 28 21.6199 28 22.1583V25.9147C28 26.5549 28 26.875 27.8676 27.1494C27.758 27.3767 27.5507 27.5999 27.332 27.7258C27.0679 27.8778 26.7779 27.899 26.1977 27.9415C25.6921 27.9786 25.1816 27.9974 24.6667 27.9974Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="text">
                  <h4>Call</h4>
                  <div className="space14"></div>
                  <a href="tel:+11234567890"> +234 805 678 9947</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-box">
                <div className="icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M16.0013 28C20.668 23.2 25.3346 18.9019 25.3346 13.6C25.3346 8.29807 21.156 4 16.0013 4C10.8466 4 6.66797 8.29807 6.66797 13.6C6.66797 18.9019 11.3346 23.2 16.0013 28Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 17.332C18.2092 17.332 20 15.5412 20 13.332C20 11.1229 18.2092 9.33203 16 9.33203C13.7908 9.33203 12 11.1229 12 13.332C12 15.5412 13.7908 17.332 16 17.332Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="text">
                  <h4>our location</h4>
                  <div className="space14"></div>
                  <a href="#">
                    {" "}
                    22 Adeola Odeku Street, Victoria Island, Lagos, Nigeria
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="space70"></div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading1">
                <h5 data-aos="zoom-in" data-aos-duration="900">
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
                  Contact Us
                </h5>
                <div className="space16"></div>
                <h2 data-aos="zoom-in" data-aos-duration="1000">
                  Let’s Work Together to Achieve Your Goals
                </h2>
                <div className="space16"></div>
                <p>
                  We’re dedicated to connecting skilled professionals with
                  meaningful job opportunities. Whether you’re an employer
                  searching for the ideal candidate or a job seeker pursuing
                  your next career move, we’re here to support you every step of
                  the way.
                </p>
                <div className="space16"></div>
                <p>
                  Reach out to us by phone or email — we look forward to working
                  with you and making your hiring or job search experience
                  smooth and successful.
                </p>
                <div className="space32"></div>
                <ul className="contact-social">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="contact-main-boxarea"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <h3>Send Massage</h3>
                <div className="space16"></div>

                <div className="space16"></div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="input-area">
                      <input type="text" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="input-area">
                      <input type="text" placeholder="Last Name" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="input-area">
                      <input type="email" placeholder="Email Address" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="input-area">
                      <input type="text" placeholder="Phone Number" />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="input-area">
                      <input type="text" placeholder="Subject" />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="input-area">
                      <textarea placeholder="How can we help you?"></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="input-area text-end">
                      <button type="submit" className="vl-btn1">
                        Send Now <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="space100 d-lg-block d-none"></div>
            <div className="space50 d-lg-none d-block"></div>
            <div className="col-lg-12">
              <div className="contact-maps-area">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46310757624!2d3.1191427001003134!3d6.5483693711779205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1762353991000!5m2!1sen!2sng"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== CONTACT AREA ENDS =======*/}

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
                        src="../../assets/main/img/elements/elements5.png"
                        alt=""
                        className="elements5"
                      />
                      <img
                        src="../../assets/main/img/all-images/cta/cta-img1.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-6">
                    <div className="cta-heading">
                      <h2 data-aos="zoom-in" data-aos-duration="800">
                        Transform Your Workforce & Transform Your Future
                      </h2>
                      <div className="space16"></div>
                      <p
                        data-aos="zoom-in"
                        data-aos-duration="900"
                        className="text-white"
                      >
                        Ready to take the next step? Whether you're looking to
                        build your dream team or find the perfect career.
                      </p>
                      <div className="space32"></div>
                      <div
                        className="form-area"
                        data-aos="zoom-in"
                        data-aos-duration="1100"
                      >
                        <form>
                          <input
                            type="text"
                            placeholder="Your Email Address"
                            style={{ background: "white" }}
                          />
                          <button className="vl-btn1" type="submit">
                            Subscribe{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        </form>
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

export default Contact;
