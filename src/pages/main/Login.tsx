const Login = () => {
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
                <h1>Login</h1>
                <div className="space20"></div>
                <div>
                  <a href="/">
                    Home <i className="fa-solid fa-angle-right"></i>
                  </a>{" "}
                  <span>Login</span>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <div className="imges">
                <img
                  src="/assets/main/img/all-images/hero/hero-img11.webp"
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
          <div className="space70"></div>
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
                <img
                  src="/assets/main/img/all-images/others/ot-img1.webp"
                  alt=""
                  style={{ borderRadius: "8px" }}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <h2 data-aos="zoom-in" data-aos-duration="1000">
                Sign in to your account
              </h2>
              <div
                className="contact-main-boxarea"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="space16"></div>

                <div className="space16"></div>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <label>Email Address:</label>
                    <div className="input-area">
                      <input type="text" placeholder="Email Address" />
                    </div>
                  </div>

                  <div
                    className="col-lg-12 col-md-12"
                    style={{ marginTop: "30px" }}
                  >
                    <label>Password:</label>
                    <div className="input-area">
                      <input type="text" placeholder="Password" />
                    </div>
                  </div>

                  <div
                    className="col-lg-12 col-md-12"
                    style={{ marginTop: "30px" }}
                  >
                    <p>
                      Don't have an account?{" "}
                      <a
                        href="/register"
                        style={{ color: "var(--ztc-bg-bg-6)" }}
                      >
                        Sign Up
                      </a>
                    </p>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="input-area">
                      <button
                        type="submit"
                        className="vl-btn1 w-100"
                        style={{ marginTop: "50px" }}
                      >
                        Login <i className="fa-solid fa-arrow-right"></i>
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

export default Login;
