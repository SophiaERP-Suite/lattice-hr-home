import { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ProfileContext } from "../../utils/main/Contexts";
import hero7 from "../../assets/main/img/all-images/bg/hero-bg7.png"
import hero11 from "../../assets/main/img/all-images/hero/hero-img11.webp"

const Register = () => {
  const [registerType, setRegisterType] = useState<"candidate" | "employer">(
    "candidate"
  );

  const [registerStage, setRegisterStage] = useState<{
    candidate: number;
    employer: number;
  }>({ candidate: 1, employer: 1 });

  const [paymentMethod, setPaymentMethod] = useState<
    "card" | "transfer" | "paypal"
  >("card");

  const { setProfileType } = useContext(ProfileContext);

  const registerRef = useRef<HTMLDivElement>(null!);
  const registerFormRef = useRef<HTMLDivElement>(null!);

  const navigate = useNavigate();

  useEffect(() => {
    if (registerFormRef.current) {
      registerFormRef.current.animate(
        { opacity: [0, 1] },
        {
          duration: 300,
        }
      );
    }
  }, [registerType]);

  const changeRegisterType = (type: "candidate" | "employer") => () => {
    setRegisterType(type);
  };

  const changeStage = (value: "prev" | "next") => () => {
    let stage;

    const maxStage = registerType === "candidate" ? 1 : 4;

    if (value === "next")
      stage = Math.min(registerStage[registerType] + 1, maxStage);
    else stage = Math.max(registerStage[registerType] - 1, 1);

    setRegisterStage((prev) => ({ ...prev, [registerType]: stage }));

    if (registerRef.current) registerRef.current.scrollIntoView();
  };

  const navigateToProfile = () => {
    setProfileType(registerType);
    navigate("/profile");
  };

  return (
    <>
      {/*===== HERO AREA STARTS =======*/}
      <div
        className="inner-header-area"
        style={{
          backgroundImage: hero7,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="inner-heading">
                <h1>Register</h1>
                <div className="space20"></div>
                <div>
                  <NavLink to="/home">
                    Home <i className="fa-solid fa-angle-right"></i>
                  </NavLink>{" "}
                  <span>Register</span>
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

      {/*===== SELECT AREA STARTS =======*/}
      <div
        className="contact-inner-area sp1"
        style={{ paddingBottom: "20px" }}
        ref={registerRef}
      >
        <div className="container">
          <div className="row g-5" style={{ justifyContent: "center" }}>
            <div className="col-lg-4 col-md-6">
              <div
                className={`single-box ${
                  registerType === "candidate" ? "active" : ""
                }`}
                style={{
                  justifyContent: "center",
                  columnGap: "10px",
                  cursor: "pointer",
                }}
                onClick={changeRegisterType("candidate")}
              >
                <div className="icons">
                  <svg
                    width="33"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path>
                  </svg>
                </div>
                <div className="text">
                  <h4>As a Candidate</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className={`single-box ${
                  registerType === "employer" ? "active" : ""
                }`}
                style={{
                  justifyContent: "center",
                  columnGap: "10px",
                  cursor: "pointer",
                }}
                onClick={changeRegisterType("employer")}
              >
                <div className="icons">
                  <svg
                    width="32"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 14V22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM21 17H22V22H14V17H15V16C15 14.3431 16.3431 13 18 13C19.6569 13 21 14.3431 21 16V17ZM19 17V16C19 15.4477 18.5523 15 18 15C17.4477 15 17 15.4477 17 16V17H19Z"></path>
                  </svg>
                </div>
                <div className="text">
                  <h4>As an Employer</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== SELECT AREA ENDS =======*/}

      {registerType === "candidate" && registerStage.candidate === 1 && (
        <div
          className="contact-inner-area sp1"
          style={{ paddingTop: 0 }}
          ref={registerFormRef}
        >
          <div className="container">
            <div className="row align-items-center g-5 register-form">
              <div className="col-lg-12">
                <h2>Application Form</h2>
                <div className="contact-main-boxarea">
                  <div className="space16"></div>

                  <div className="space16"></div>

                  <div className="row" style={{ rowGap: "30px" }}>
                    <div className="col-lg-6 col-md-6">
                      <label>First Name:</label>
                      <div className="input-area">
                        <input type="text" placeholder="First Name" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Last Name:</label>
                      <div className="input-area">
                        <input type="text" placeholder="Last Name" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Email Address:</label>
                      <div className="input-area">
                        <input type="text" placeholder="Email Address" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Confirm Email Address:</label>
                      <div className="input-area">
                        <input
                          type="text"
                          placeholder="Confirm Email Address"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Mobile Number:</label>
                      <div className="input-area">
                        <input type="text" placeholder="Mobile Number" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Gender:</label>
                      <div className="input-area">
                        <select>
                          <option>Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Date of Birth:</label>
                      <div className="input-area">
                        <input type="date" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Role:</label>
                      <div className="input-area">
                        <select name="role" id="role">
                          <option value="">Select Role</option>
                          <option value="software-engineer">
                            Software Engineer
                          </option>
                          <option value="marketing-specialist">
                            Marketing Specialist
                          </option>
                          <option value="sales-representative">
                            Sales Representative
                          </option>
                          <option value="project-manager">
                            Project Manager
                          </option>
                          <option value="customer-support">
                            Customer Support
                          </option>
                          <option value="data-analyst">Data Analyst</option>
                          <option value="accountant">Accountant</option>
                          <option value="human-resources">
                            Human Resources
                          </option>
                          <option value="graphic-designer">
                            Graphic Designer
                          </option>
                          <option value="operations-officer">
                            Operations Officer
                          </option>
                          <option value="business-analyst">
                            Business Analyst
                          </option>
                          <option value="content-writer">Content Writer</option>
                          <option value="product-manager">
                            Product Manager
                          </option>
                          <option value="technician">Technician</option>
                          <option value="intern">Intern</option>
                          <option value={"others"}>Others</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <label>Full Address:</label>
                      <div className="input-area">
                        <input type="text" placeholder="Full Address" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Password:</label>
                      <div className="input-area">
                        <input type="text" placeholder="Password" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Confirm Password:</label>
                      <div className="input-area">
                        <input type="text" placeholder="Confirm Password" />
                      </div>
                    </div>

                    <div
                      className="col-lg-12 col-md-12"
                      style={{ marginTop: "20px" }}
                    >
                      <p>
                        Already have an account?{" "}
                        <NavLink to="/login"
                          style={{ color: "var(--ztc-bg-bg-6)" }}
                        >
                          Login
                        </NavLink>
                      </p>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="input-area">
                        <a
                          onClick={navigateToProfile}
                          type="submit"
                          className="vl-btn1 w-100 text-center"
                          style={{ marginTop: "30px", cursor: "pointer" }}
                        >
                          Submit <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {registerType === "employer" &&
        (registerStage.employer === 1 ? (
          <div
            className="contact-inner-area sp1"
            style={{ paddingTop: 0 }}
            ref={registerFormRef}
          >
            <div className="container">
              <div className="row align-items-center g-5 register-form">
                <div className="col-lg-12">
                  <h2>Application Form</h2>
                  <div className="contact-main-boxarea">
                    <div className="space16"></div>

                    <div className="space16"></div>

                    <div className="row" style={{ rowGap: "30px" }}>
                      <h5>Company Details</h5>

                      <div className="col-lg-6 col-md-6">
                        <label>Business Name:</label>
                        <div className="input-area">
                          <input type="text" placeholder="Business Name" />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <label>Business Type:</label>
                        <div className="input-area">
                          <select>
                            <option value="">-- Select Business Type --</option>
                            <option value="technology">Technology / IT</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="education">Education</option>
                            <option value="finance">Finance</option>
                            <option value="manufacturing">Manufacturing</option>
                            <option value="retail">Retail / E-commerce</option>
                            <option value="hospitality">Hospitality</option>
                            <option value="construction">Construction</option>
                            <option value="transport">
                              Transport & Logistics
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <label>Country:</label>
                        <div className="input-area">
                          <select>
                            <option value="">-- Select Country --</option>
                            <option value="nigeria">Nigeria</option>
                            <option value="canada">Canada</option>
                            <option value="usa">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="south-africa">South Africa</option>
                            <option value="ghana">Ghana</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <label>State / County:</label>
                        <div className="input-area">
                          <select>
                            <option value="">-- Select State --</option>
                            <option value="lagos">Lagos</option>
                            <option value="abuja">Abuja (FCT)</option>
                            <option value="rivers">Rivers</option>
                            <option value="oyo">Oyo</option>
                            <option value="kano">Kano</option>
                            <option value="enugu">Enugu</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <label>City:</label>
                        <div className="input-area">
                          <select>
                            <option value="">-- Select City --</option>
                            <option value="ikeja">Ikeja</option>
                            <option value="lekki">Lekki</option>
                            <option value="surulere">Surulere</option>
                            <option value="victoria-island">
                              Victoria Island
                            </option>
                            <option value="ikorodu">Ikorodu</option>
                            <option value="ajegunle">Ajegunle</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <label>Postal Code:</label>
                        <div className="input-area">
                          <input type="text" placeholder="Postal Code" />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <label>Official Address:</label>
                        <div className="input-area">
                          <input type="text" placeholder="Official Address" />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <label>Company Registration Number:</label>
                        <div className="input-area">
                          <input
                            type="text"
                            placeholder="Company Registration Number"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <label>VAT Registration Number:</label>
                        <div className="input-area">
                          <input
                            type="text"
                            placeholder="VAT Registration Number"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <label>Company Size:</label>
                        <div className="input-area">
                          <select>
                            <option value="">-- Select Company Size --</option>
                            <option value="micro">
                              1 - 10 employees (Micro)
                            </option>
                            <option value="small">
                              11 - 50 employees (Small)
                            </option>
                            <option value="medium">
                              51 - 250 employees (Medium)
                            </option>
                            <option value="large">
                              251 - 1000 employees (Large)
                            </option>
                            <option value="enterprise">
                              1000+ employees (Enterprise)
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <label>Website:</label>
                        <div className="input-area">
                          <input type="text" placeholder="Website" />
                        </div>
                      </div>

                      <h5>Responsibility Officer Details</h5>

                      <div className="col-lg-6 col-md-6">
                        <label>First Name:</label>
                        <div className="input-area">
                          <input type="text" placeholder="First Name" />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <label>Last Name:</label>
                        <div className="input-area">
                          <input type="text" placeholder="Last Name" />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <label>Email Address:</label>
                        <div className="input-area">
                          <input type="text" placeholder="Email Address" />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <label>Mobile Number:</label>
                        <div className="input-area">
                          <input type="text" placeholder="Mobile Number" />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <label>Position:</label>
                        <div className="input-area">
                          <input type="text" placeholder="Position" />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <label>Password:</label>
                        <div className="input-area">
                          <input type="text" placeholder="Password" />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <label>Confirm Password:</label>
                        <div className="input-area">
                          <input type="text" placeholder="Confirm Password" />
                        </div>
                      </div>

                      <div
                        className="col-lg-12 col-md-12 checkbox-div"
                        style={{ marginTop: "10px" }}
                      >
                        <input type="checkbox" id="declaration" />
                        <label htmlFor="declaration">
                          I hereby confirm that I have the authority to sign up
                          on behalf of this company.
                        </label>
                      </div>

                      <div className="col-lg-12 col-md-12 checkbox-div">
                        <input type="checkbox" id="terms-and-condition" />
                        <label htmlFor="terms-and-condition">
                          I have read and agree to the{" "}
                          <a href="#">Terms & Conditions</a> and{" "}
                          <a href="#">Privacy Policy</a>.
                        </label>
                      </div>

                      <div
                        className="col-lg-12 col-md-12"
                        style={{ marginTop: "20px" }}
                      >
                        <p>
                          Already have an account?{" "}
                          <NavLink to="/login"
                            style={{ color: "var(--ztc-bg-bg-6)" }}
                          >
                            Login
                          </NavLink>
                        </p>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="input-area">
                          <button
                            type="submit"
                            className="vl-btn1 w-100"
                            style={{ marginTop: "30px" }}
                            onClick={changeStage("next")}
                          >
                            Next <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : registerStage.employer === 2 ? (
          <div
            className="contact-inner-area sp1"
            style={{ paddingTop: 0 }}
            ref={registerFormRef}
          >
            <div className="container">
              <div className="row align-items-center g-5 register-form">
                <div className="col-lg-12">
                  <h2>Pick a Package</h2>
                  <div className="contact-main-boxarea">
                    <div className="space16"></div>

                    <div className="space16"></div>

                    <div className="payment-package-container">
                      <div className="payment-package-box">
                        <h4>
                          <span>1.</span>
                          <span>Pay-as-you-go</span>
                        </h4>

                        <div className="payment-package-features">
                          <h5>Features:</h5>
                          <ul>
                            <li>Purchase job posting credits as needed.</li>

                            <li> Candidates apply directly to posted jobs.</li>

                            <li>
                              {" "}
                              Employers can engage only with applicants who
                              applied for their jobs—no unsolicited outreach.
                            </li>
                          </ul>
                        </div>

                        <div style={{ marginTop: "20px" }}>
                          <a
                            className="vl-btn3"
                            style={{ cursor: "pointer" }}
                            onClick={changeStage("next")}
                          >
                            Select Package
                          </a>
                        </div>
                      </div>

                      <div className="payment-package-box">
                        <h4>
                          <span>2.</span>
                          <span>Subscription Plans</span>
                        </h4>

                        <div className="pricing1" style={{ padding: "10px 0" }}>
                          <div className="container">
                            <div className="row">
                              <div className="col-12 text-center">
                                <div className="plan-toggle-wrap">
                                  <div className="toggle-inner">
                                    <input id="ce-toggle" type="checkbox" />
                                    <span className="custom-toggle"></span>
                                    <div className="t-month">
                                      <h4>Monthly</h4>
                                    </div>
                                    <div className="t-year">
                                      <h4>Yearly</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-content">
                                  <div id="monthly">
                                    <div className="row">
                                      <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-area">
                                          <div className="pricing-box">
                                            <h3>Basic Plan</h3>
                                            <p>
                                              Great for small clinics starting
                                              to hire.
                                            </p>
                                            <h2>
                                              &#8358;5,000/<span>monthly</span>
                                            </h2>

                                            <div className="list-heading">
                                              <a
                                                className="vl-btn3"
                                                onClick={changeStage("next")}
                                              >
                                                Select Package
                                              </a>

                                              <ul>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  Post up to 3 jobs
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  Access limited candidate
                                                  profiles
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  14-day job visibility
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  Email support
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-area">
                                          <div className="pricing-box active">
                                            <h3>Standard Plan</h3>
                                            <p>
                                              Ideal for growing healthcare
                                              teams.
                                            </p>
                                            <h2>
                                              &#8358;7,000/<span>monthly</span>
                                            </h2>

                                            <div className="list-heading">
                                              <a
                                                className="vl-btn3"
                                                onClick={changeStage("next")}
                                              >
                                                Select Package
                                              </a>

                                              <ul>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  Post up to 10 jobs
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  Full candidate access
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  Priority job visibility
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  Basic analytics
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-area">
                                          <div className="pricing-box">
                                            <h3>Premium Plan</h3>
                                            <p>
                                              Perfect for hospitals with
                                              continuous hiring needs.
                                            </p>
                                            <h2>
                                              &#8358;10,000/<span>monthly</span>
                                            </h2>

                                            <div className="list-heading">
                                              <a
                                                className="vl-btn3"
                                                onClick={changeStage("next")}
                                              >
                                                Select Package
                                              </a>

                                              <ul>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  Unlimited job posts
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  Advanced candidate filters
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  Featured job placement
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  24/7 priority support
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div id="yearly" style={{ display: "none" }}>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-area">
                                          <div className="pricing-box">
                                            <h3>Basic Plan</h3>
                                            <p>
                                              Great for small clinics starting
                                              to hire.
                                            </p>
                                            <h2>
                                              &#8358;40,000/<span>yearly</span>
                                            </h2>

                                            <div className="list-heading">
                                              <a
                                                className="vl-btn3"
                                                onClick={changeStage("next")}
                                              >
                                                Select Package
                                              </a>

                                              <ul>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  Post up to 3 jobs
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  Access limited candidate
                                                  profiles
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  14-day job visibility
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  Email support
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-area">
                                          <div className="pricing-box active">
                                            <h3>Standard Plan</h3>
                                            <p>
                                              Ideal for growing healthcare
                                              teams.
                                            </p>
                                            <h2>
                                              &#8358;60,000/<span>yearly</span>
                                            </h2>

                                            <div className="list-heading">
                                              <a
                                                className="vl-btn3"
                                                onClick={changeStage("next")}
                                              >
                                                Select Package
                                              </a>

                                              <ul>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  Post up to 10 jobs
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  Full candidate access
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  Priority job visibility
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  Basic analytics
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-area">
                                          <div className="pricing-box">
                                            <h3>Premium Plan</h3>
                                            <p>
                                              Perfect for hospitals with
                                              continuous hiring needs.
                                            </p>
                                            <h2>
                                              &#8358;80000/<span>yearly</span>
                                            </h2>

                                            <div className="list-heading">
                                              <a
                                                className="vl-btn3"
                                                onClick={changeStage("next")}
                                              >
                                                Select Package
                                              </a>

                                              <ul>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  Unlimited job posts
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  Advanced candidate filters
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  Featured job placement
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M11.2105 5.91453C11.2628 5.96677 11.3043 6.02881 11.3326 6.0971C11.3609 6.16538 11.3754 6.23858 11.3754 6.3125C11.3754 6.38642 11.3609 6.45962 11.3326 6.5279C11.3043 6.59619 11.2628 6.65823 11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86223 10.5288 5.82074 10.5971 5.79244C10.6654 5.76413 10.7386 5.74956 10.8125 5.74956C10.8864 5.74956 10.9596 5.76413 11.0279 5.79244C11.0962 5.82074 11.1582 5.86223 11.2105 5.91453ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
                                                      fill="#091E42"
                                                    />
                                                  </svg>
                                                  24/7 priority support
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
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="input-area">
                        <button
                          type="submit"
                          className="vl-btn1 w-100"
                          style={{ marginTop: "30px" }}
                          onClick={changeStage("prev")}
                        >
                          <i className="fa-solid fa-arrow-left"></i> Prev
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : registerStage.employer === 3 ? (
          <div
            className="contact-inner-area sp1"
            style={{ paddingTop: 0 }}
            ref={registerFormRef}
          >
            <div className="container">
              <div className="row align-items-center g-5 register-form">
                <div className="col-lg-12">
                  <h2>Agreement</h2>
                  <div className="contact-main-boxarea">
                    <div className="space16"></div>

                    <div className="space16"></div>

                    <p>
                      Please download and review the service agreement
                      carefully.
                    </p>

                    <div className="space16"></div>

                    <p>
                      You must sign and upload the completed document before
                      proceeding.
                    </p>

                    <div className="space16"></div>

                    <div className="space16"></div>
                    <a className="vl-btn3" href="#">
                      Download Agreement
                    </a>

                    <div className="space16"></div>

                    <div className="space16"></div>

                    <p>Please read through all sections before signing.</p>

                    <div className="space16"></div>

                    <div className="space16"></div>
                    <div className="col-lg-12 col-md-12">
                      <label style={{ fontSize: "18px", fontWeight: 600 }}>
                        Upload Signed Agreement
                      </label>
                      <div className="input-area">
                        <input type="file" />
                      </div>
                    </div>

                    <div
                      className="col-lg-12 col-md-12 checkbox-div"
                      style={{ marginTop: "20px" }}
                    >
                      <input type="checkbox" id="agreement" />
                      <label htmlFor="agreement">
                        I confirm that I have read, understood, and signed the
                        service agreement.
                      </label>
                    </div>

                    <div className="row" style={{ marginTop: "30px" }}>
                      {" "}
                      <div className="col-lg-6 col-md-6">
                        <div className="input-area">
                          <button
                            type="submit"
                            className="vl-btn1 w-100"
                            style={{ marginTop: "30px" }}
                            onClick={changeStage("prev")}
                          >
                            <i className="fa-solid fa-arrow-left"></i> Prev
                          </button>
                        </div>
                      </div>{" "}
                      <div className="col-lg-6 col-md-6">
                        <div className="input-area">
                          <button
                            type="submit"
                            className="vl-btn1 w-100"
                            style={{ marginTop: "30px" }}
                            onClick={changeStage("next")}
                          >
                            Next <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="contact-inner-area sp1"
            style={{ paddingTop: 0 }}
            ref={registerFormRef}
          >
            <div className="container">
              <div className="row align-items-center g-5 register-form">
                <div className="col-lg-12">
                  <h2>Payment</h2>
                  <div className="contact-main-boxarea">
                    <div className="space16"></div>

                    <div className="space16"></div>

                    <div className="payment-summary">
                      <h5>Summary:</h5>

                      <div className="space16"></div>

                      <ul>
                        <li>
                          <label>Selected Package:</label>{" "}
                          <span>
                            Subscription Plan - Standard Plan (Monthly){" "}
                          </span>
                        </li>
                        <li>
                          <label>Price:</label> <span>&#8358;7000</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space16"></div>

                    <div className="space16"></div>

                    <div className="col-lg-12 col-md-12">
                      <label style={{ fontSize: "18px", fontWeight: 600 }}>
                        Payment Method
                      </label>
                      <div className="input-area">
                        <select
                          name="paymentMethod"
                          id="paymentMethod"
                          value={paymentMethod}
                          onChange={(e) =>
                            setPaymentMethod(
                              e.target.value as "card" | "paypal" | "transfer"
                            )
                          }
                        >
                          <option value="">Select Payment Method</option>
                          <option value="card">Card</option>
                          <option value="paypal">PayPal</option>
                          <option value="transfer">Bank Transfer</option>
                        </select>
                      </div>
                    </div>

                    {paymentMethod === "card" && (
                      <div
                        className="row"
                        style={{ rowGap: "20px", marginTop: "30px" }}
                      >
                        <div className="col-lg-12 col-md-12">
                          <label style={{ fontSize: "18px", fontWeight: 600 }}>
                            Card Number
                          </label>
                          <div className="input-area">
                            <input type="text" placeholder="Card Number" />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <label style={{ fontSize: "18px", fontWeight: 600 }}>
                            Expiry Date
                          </label>
                          <div className="input-area">
                            <input type="date" />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <label style={{ fontSize: "18px", fontWeight: 600 }}>
                            CVV
                          </label>
                          <div className="input-area">
                            <input type="text" placeholder="CVV" />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "transfer" && (
                      <div className="bank-transfer-info">
                        <h5 style={{ marginBottom: "10px" }}>
                          Account Details
                        </h5>

                        <p>
                          <strong>Bank Name:</strong> Zenith Bank
                        </p>
                        <p>
                          <strong>Account Number:</strong> 1234567890
                        </p>
                        <p>
                          <strong>Account Name:</strong> Lattice HR
                        </p>

                        <div
                          className="col-lg-12 col-md-12"
                          style={{ marginTop: "10px" }}
                        >
                          <label style={{ fontSize: "18px", fontWeight: 600 }}>
                            Upload Receipt
                          </label>
                          <div className="input-area">
                            <input type="file" />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="row" style={{ marginTop: "30px" }}>
                      {" "}
                      <div className="col-lg-6 col-md-6">
                        <div className="input-area">
                          <button
                            type="submit"
                            className="vl-btn1 w-100"
                            style={{ marginTop: "30px" }}
                            onClick={changeStage("prev")}
                          >
                            <i className="fa-solid fa-arrow-left"></i> Prev
                          </button>
                        </div>
                      </div>{" "}
                      <div className="col-lg-6 col-md-6">
                        <div className="input-area">
                          <a
                            onClick={navigateToProfile}
                            type="submit"
                            className="vl-btn1 w-100 text-center"
                            style={{ marginTop: "30px", cursor: "pointer" }}
                          >
                            Confirm & Pay{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Register;
