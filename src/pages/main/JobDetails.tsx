import { NavLink } from "react-router-dom";

const JobDetails = () => {
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
                <h1> Pediatric Doctor</h1>
                <div className="space20"></div>
                <div>
                  <NavLink to="/home">
                    Home <i className="fa-solid fa-angle-right"></i>
                  </NavLink>{" "}
                  <span>Job Details</span>
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

      {/*===== JOB AREA STARTS =======*/}

      <div className="blog-details-section sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-main-content padding2 heading1">
                <div className="space32"></div>
                <h4>Job Description</h4>
                <div className="space16"></div>
                <div className="space16"></div>

                <div className="pera">
                  <p>
                    We are looking for a dedicated Pediatric Doctor to join our
                    medical team and provide exceptional care to children of all
                    ages. The role focuses on promoting healthy growth and
                    development while addressing both common and complex
                    childhood conditions with professionalism and empathy.
                    <br />
                    <br />
                    You’ll be part of a supportive environment that values
                    precision, compassion, and trust between doctors, patients,
                    and families. This position offers an opportunity to make a
                    lasting impact on young lives while contributing to a
                    collaborative and patient-centered healthcare setting.
                  </p>
                </div>

                <div className="space16"></div>
                <div className="space16"></div>

                <h4>Responsibilities and Duties:</h4>
                <div className="space16"></div>

                <div>
                  <ul className="job-duties-list">
                    <li>
                      Conduct regular check-ups to monitor growth and
                      development of children.
                    </li>
                    <li>
                      Diagnose and treat common childhood illnesses, infections,
                      and injuries.
                    </li>
                    <li>
                      Provide vaccinations and preventive healthcare guidance.
                    </li>
                    <li>
                      Advise parents or guardians on nutrition, hygiene, and
                      lifestyle for children.
                    </li>
                    <li>
                      Maintain accurate medical records and document patient
                      progress.
                    </li>
                    <li>
                      Collaborate with nurses and specialists to ensure
                      comprehensive care.
                    </li>
                    <li>
                      Order and interpret diagnostic tests to determine medical
                      conditions.
                    </li>
                    <li>
                      Respond promptly to emergency situations or urgent health
                      issues.
                    </li>
                    <li>
                      Stay updated with advancements in pediatric medicine and
                      healthcare practices.
                    </li>
                    <li>
                      Foster a compassionate and supportive environment for
                      young patients and their families.
                    </li>
                  </ul>
                </div>

                <div className="space16"></div>
                <div className="space16"></div>

                <h4>Required Skills</h4>

                <div className="space16"></div>
                <div>
                  <ul className="job-duties-list">
                    <li>Strong diagnostic and clinical skills</li>
                    <li>Excellent communication with children and parents</li>
                    <li>Attention to detail and patient care</li>
                    <li>Ability to work in a multidisciplinary team</li>
                    <li>Empathy and emotional intelligence</li>
                    <li>Proficiency in electronic medical records (EMR)</li>
                  </ul>
                </div>

                <div className="space16"></div>
                <div className="space16"></div>

                <div className="space16"></div>

                <div className="job-box-btn">
                  <a
                    style={{ cursor: "pointer" }}
                    className="vl-btn2"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Apply Now
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="blog-side-details">
                <div className="blog-widget-area1">
                  <h3>Job Information</h3>

                  <div className="space16"></div>
                  <div className="space16"></div>
                  <div className="card-body p-2 border-top pt-4">
                    <div className="d-flex widget align-items-center">
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
                        className="feather feather-layout fea icon-ex-md me-3"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                      </svg>
                      <div className="flex-1">
                        <h6 className="widget-title mb-0">Employer Name:</h6>
                        <small className="job-information-text mb-0">
                          Nova Health
                        </small>
                      </div>
                    </div>

                    <div className="d-flex widget align-items-center mt-3">
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
                        className="feather feather-user-check fea icon-ex-md me-3"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <polyline points="17 11 19 13 23 9"></polyline>
                      </svg>
                      <div className="flex-1">
                        <h6 className="widget-title mb-0">Employee Type:</h6>
                        <small className="job-information-text mb-0">
                          Part Time
                        </small>
                      </div>
                    </div>

                    <div className="d-flex widget align-items-center mt-3">
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
                        className="feather feather-map-pin fea icon-ex-md me-3"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <div className="flex-1">
                        <h6 className="widget-title mb-0">Location:</h6>
                        <small className="job-information-text mb-0">
                          Lagos, Nigeria
                        </small>
                      </div>
                    </div>

                    <div className="d-flex widget align-items-center mt-3">
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
                        className="feather feather-monitor fea icon-ex-md me-3"
                      >
                        <rect
                          x="2"
                          y="3"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                      <div className="flex-1">
                        <h6 className="widget-title mb-0">Job Name:</h6>
                        <small className="job-information-text mb-0">
                          Pediatric Doctor
                        </small>
                      </div>
                    </div>

                    <div className="d-flex widget align-items-center mt-3">
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
                        className="feather feather-briefcase fea icon-ex-md me-3"
                      >
                        <rect
                          x="2"
                          y="7"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                      <div className="flex-1">
                        <h6 className="widget-title mb-0">Experience:</h6>
                        <small className="job-information-text mb-0">
                          2+ Year
                        </small>
                      </div>
                    </div>

                    <div className="d-flex widget align-items-center mt-3">
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
                        className="feather feather-book fea icon-ex-md me-3"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                      <div className="flex-1">
                        <h6 className="widget-title mb-0">Qualifications:</h6>
                        <small className="job-information-text mb-0">
                          MBBS or MBChB from a recognized university
                        </small>
                      </div>
                    </div>

                    <div className="d-flex widget align-items-center mt-3">
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="black"
                        className="feather feather-credit-card fea icon-ex-md me-3"
                      >
                        <path d="M20.0049 6.99979V4.99979H4.00488V18.9998H20.0049V16.9998H12.0049C11.4526 16.9998 11.0049 16.5521 11.0049 15.9998V7.99979C11.0049 7.4475 11.4526 6.99979 12.0049 6.99979H20.0049ZM3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979ZM13.0049 8.99979V14.9998H20.0049V8.99979H13.0049ZM15.0049 10.9998H18.0049V12.9998H15.0049V10.9998Z"></path>
                      </svg>

                      <div className="flex-1">
                        <h6 className="widget-title mb-0">Salary:</h6>
                        <small className="job-information-text mb-0">
                          &#8358;250,000 - &#8358;300,000
                        </small>
                      </div>
                    </div>

                    <div className="d-flex widget align-items-center mt-3">
                      <svg
                        width="24"
                        height="24"
                        className="feather feather-clock fea icon-ex-md me-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 4H5V20H19V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H19.9997C20.5519 2 20.9996 2.44772 20.9997 3L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM11.2929 13.1213L15.5355 8.87868L16.9497 10.2929L11.2929 15.9497L7.40381 12.0607L8.81802 10.6464L11.2929 13.1213Z"></path>
                      </svg>
                      <div className="flex-1">
                        <h6 className="widget-title mb-0">Vacancies:</h6>
                        <small className="job-information-text mb-0 mb-0">
                          40
                        </small>
                      </div>
                    </div>

                    <div className="d-flex widget align-items-center mt-3">
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
                        className="feather feather-clock fea icon-ex-md me-3"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <div className="flex-1">
                        <h6 className="widget-title mb-0">Date posted:</h6>
                        <small className="job-information-text mb-0 mb-0">
                          5th Nov, 2025
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*===== JOB AREA ENDS =======*/}

      {/*===== RELATED JOB AREA STARTS =======*/}

      <div className="blog-inner-area sp11">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="heading1 text-center space-margin60">
                <h2>Related Jobs</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {/*===== JOBS AREA STARTS =======*/}
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
                            <img src="../../assets/main/img/logo/download.png" />
                          </div>

                          <div className="job-box-details">
                            <a href="#" className="job-box-name">
                              Nova Health
                            </a>
                            <span className="job-box-time">5 hours ago</span>
                          </div>

                          <div className="job-box-type">
                            <span>Part Time</span>
                          </div>
                        </div>

                        <div className="textarea">
                          <a href="#" className="title">
                            Pediatric Doctor
                          </a>

                          <div className="job-box-loc">
                            <i className="fa-solid fa-location-dot"></i>{" "}
                            <span>Lagos, Nigeria</span>
                          </div>

                          {/* <div className="job-vacancy-box">
                            <progress value="50" max="100"></progress>
                            <span>
                              20 applied of <span>40 vacancy</span>
                            </span>
                          </div> */}

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
              {/*===== JOBS AREA ENDS =======*/}
            </div>
          </div>
        </div>
      </div>

      {/*===== RELATED JOB AREA END =======*/}

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Application Form
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div
              className="modal-body"
              style={{ paddingLeft: 0, paddingRight: 0 }}
            >
              <div className="contact-inner-area">
                <div className="container">
                  <div
                    className="contact-main-boxarea register-form"
                    style={{ boxShadow: "none" }}
                  >
                    <div className="row" style={{ rowGap: "20px" }}>
                      <div className="col-lg-12 col-md-12">
                        <label>Position:</label>
                        <div className="input-area">
                          <input
                            type="text"
                            placeholder="Position"
                            value={"Pediatric Doctor"}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <label>Cover Letter:</label>
                        <div className="input-area">
                          <input type="file" />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <label>Preferred Start Date:</label>
                        <div className="input-area">
                          <input type="date" />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <label>Availability</label>
                        <div className="input-area">
                          <select>
                            <option value="immediate">Immediate</option>
                            <option value="1-week">Within 1 week</option>
                            <option value="2-weeks">Within 2 weeks</option>
                            <option value="1-month">Within 1 month</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <label>Upload Additional Documents:</label>
                        <div className="input-area">
                          <input type="file" />
                        </div>
                      </div>

                      <h6>Review Uploaded Files</h6>
                      <ul className="compliance-checklist application-form">
                        <li>
                          <input
                            type="checkbox"
                            id="cv"
                            defaultChecked={true}
                          />{" "}
                          <label htmlFor="cv">CV</label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="cert"
                            defaultChecked={true}
                          />{" "}
                          <label htmlFor="cert">
                            Qualification Certificates
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="verify"
                            defaultChecked={true}
                          />{" "}
                          ID
                          <label htmlFor="verify">Verification</label>
                        </li>
                      </ul>

                      <h6>Declaration</h6>

                      <div className="col-lg-12 col-md-12 checkbox-div">
                        <input type="checkbox" id="terms-and-condition" />
                        <label htmlFor="terms-and-condition">
                          I agree to share my verified profile with this
                          employer
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="submit"
                className="vl-btn1 w-100"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ marginTop: "30px", border: "none" }}
              >
                Submit <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
