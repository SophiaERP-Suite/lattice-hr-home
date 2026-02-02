import { Link, NavLink } from "react-router-dom";
import hero7 from "../../assets/main/img/all-images/bg/hero-bg7.png";
import hero11 from "../../assets/main/img/all-images/hero/hero-img11.webp";
import ot11 from "../../assets/main/img/all-images/others/ot-img1.webp";
import { useState } from "react";

const EmailVerification = () => {
  const [email, setEmail] = useState<string>("");
  const [isVerified, setIsVerified] = useState(false);

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
                <h1>Email Verification</h1>
                <div className="space20"></div>
                <div>
                  <NavLink to="/home">
                    Home <i className="fa-solid fa-angle-right"></i>
                  </NavLink>{" "}
                  <span>Email Verification</span>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <div className="imges">
                <img src={hero11} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== HERO AREA ENDS =======*/}

      {/*===== CONTACT AREA STARTS =======*/}
      <div className="contact-inner-area">
        <div className="container">
          <div className="row align-items-center g-5">
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
                  SIGN IN
                </h5>
                <div className="space16"></div>
              </div>
              <br />
              <div
                className="img1 aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-duration="900"
              >
                <img src={ot11} alt="" style={{ borderRadius: "8px" }} />
              </div>
            </div>

            <div className="col-lg-6">
              <h2 data-aos="zoom-in" data-aos-duration="1000">
                Email Verification
              </h2>
              <div
                className="contact-main-boxarea"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="space16"></div>

                <div className="space16"></div>

                <div className="">
                  <br />
                  <p className="mb-3">
                    Please enter the 6-digit verification code that was sent to
                    your email address. The code will expire in 10 minutes.
                  </p>
                  <br />
                  <br />
                  <div className="col-lg-12 col-md-12">
                    <label>Code:</label>
                    <div className="input-area">
                      <input type="text" placeholder="Email Address" />
                    </div>
                  </div>

                  <div className="">
                    <p>
                      Didn't receive the code?{" "}
                      <span
                        className="resend-link"
                        // onClick={handleResendOTP}
                        style={{
                          cursor: "pointer",
                          color: "var(--ztc-bg-bg-6)",
                          fontWeight: "600",
                        }}
                      >
                        Resend Code
                      </span>
                    </p>
                    {/* <p className="need-help">
                      Need help?{" "}
                      <Link to="/contact" style={{ color: "var(--ztc-bg-bg-6)" }}>
                        Contact Support
                      </Link>
                    </p> */}
                  </div>

                  {/* <div
                    className="col-lg-12 col-md-12"
                    style={{ marginTop: "30px" }}
                  >
                    <p>
                      Don't have an account?{" "}
                      <NavLink
                        to="/register"
                        style={{ color: "var(--ztc-bg-bg-6)" }}
                      >
                        Sign Up
                      </NavLink>
                    </p>
                  </div> */}

                  <div className="col-lg-12 col-md-12">
                    <div className="input-area">
                      <button
                        type="submit"
                        className="vl-btn1 w-100"
                        style={{ marginTop: "50px" }}
                      >
                        Verify Email <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== CONTACT AREA ENDS =======*/}
    </>
  );
};

export default EmailVerification;
