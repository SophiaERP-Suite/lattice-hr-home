import { useState } from "react";

const Register = () => {
  const [registerType, setRegisterType] = useState<{
    candidate: { stage: number; active: boolean };
    employer: { stage: number; active: boolean };
  }>({
    candidate: {
      stage: 1,
      active: true,
    },
    employer: {
      stage: 1,
      active: false,
    },
  });

  const changeRegisterType = (type: "candidate" | "employer") => () => {
    setRegisterType((prev) => ({
      candidate: { ...prev.candidate, active: false },
      employer: { ...prev.employer, active: false },
      [type]: { ...prev[type], active: true },
    }));
  };

  const changeStage =
    (value: "prev" | "next", type: "candidate" | "employer") => () => {
      let stage;

      if (value === "next") stage = Math.min(registerType[type].stage + 1, 2);
      else stage = Math.max(registerType[type].stage - 1, 1);

      setRegisterType((prev) => ({
        ...prev,
        [type]: { ...prev[type], stage },
      }));
    };

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
                <h1>Register</h1>
                <div className="space20"></div>
                <div>
                  <a href="/">
                    Home <i className="fa-solid fa-angle-right"></i>
                  </a>{" "}
                  <span>Register</span>
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

      {/*===== SELECT AREA STARTS =======*/}
      <div className="contact-inner-area sp1" style={{ paddingBottom: "20px" }}>
        <div className="container">
          <div className="row g-5" style={{ justifyContent: "center" }}>
            <div className="col-lg-4 col-md-6">
              <div
                className={`single-box ${
                  registerType.candidate.active ? "active" : ""
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
                  registerType.employer.active ? "active" : ""
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

      {registerType.candidate.active &&
        (registerType.candidate.stage === 1 ? (
          <div className="contact-inner-area sp1" style={{ paddingTop: 0 }}>
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
                        <label>Age:</label>
                        <div className="input-area">
                          <input type="text" placeholder="Age" />
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
                            <option value="content-writer">
                              Content Writer
                            </option>
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
                          <a
                            href="/login"
                            style={{ color: "var(--ztc-bg-bg-6)" }}
                          >
                            Login
                          </a>
                        </p>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="input-area">
                          <button
                            type="submit"
                            className="vl-btn1 w-100"
                            style={{ marginTop: "30px" }}
                            onClick={changeStage("next", "candidate")}
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
          <div className="contact-inner-area sp1" style={{ paddingTop: 0 }}>
            <div className="container">
              <div className="row align-items-center g-5 register-form">
                <div className="col-lg-12">
                  <h2>Compliance Management</h2>
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
                        <label>Age:</label>
                        <div className="input-area">
                          <input type="text" placeholder="Age" />
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
                            <option value="content-writer">
                              Content Writer
                            </option>
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
                          <a
                            href="/login"
                            style={{ color: "var(--ztc-bg-bg-6)" }}
                          >
                            Login
                          </a>
                        </p>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="input-area">
                          <button
                            type="submit"
                            className="vl-btn1 w-100"
                            style={{ marginTop: "30px" }}
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
        ))}
    </>
  );
};

export default Register;
