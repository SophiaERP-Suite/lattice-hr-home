import { useContext, useEffect } from "react";
import { ProfileContext } from "../../utils/main/Contexts";

const Profile = () => {
  const { profileType } = useContext(ProfileContext);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

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
                <h1>Profile</h1>
                <div className="space20"></div>
                <div>
                  <a href="/">
                    Home <i className="fa-solid fa-angle-right"></i>
                  </a>{" "}
                  <span>Profile</span>
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

      {/*===== PROFILE AREA STARTS =======*/}

      {profileType === "candidate" && (
        <div className="blog-details-section sp1">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="blog-main-content padding2 heading1">
                  <div className="space32"></div>

                  <div className="profile-photo-box">
                    <figure>
                      <img src="/assets/main/img/users/user1.jpeg" />

                      <figcaption>
                        <h4>Joseph Benson</h4>
                        <h6>Software Engineer</h6>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="space16"></div>

                  <p style={{ fontSize: "16px" }}>
                    Your profile has been created successfully! <br /> Our team
                    is currently reviewing your documents. You’ll be notified
                    once your account is verified.
                  </p>

                  <div className="space16"></div>
                  <div className="space16"></div>

                  <div className="status-box">
                    <div className="status-heading">
                      <span>Status:</span> <h6>Pending Verification</h6>
                    </div>

                    <div className="status-progress-box">
                      <span>75%</span>
                      <progress value="75" max="100"></progress>
                    </div>
                  </div>

                  <div className="space16"></div>
                  <div className="space16"></div>

                  <h4>Compliance Checklist:</h4>
                  <div className="space16"></div>

                  <p style={{ fontSize: "16px" }}>
                    The ticked items indicate documents and checks that have
                    been reviewed and verified by our team.
                  </p>

                  <div className="space16"></div>

                  <div>
                    <ul className="compliance-checklist">
                      <li>
                        <input type="checkbox" checked={true} /> CV
                      </li>
                      <li>
                        <input type="checkbox" checked={true} /> Reference (2)
                      </li>
                      <li>
                        <input type="checkbox" checked={true} /> Right to Work &
                        ID Checks
                      </li>
                      <li>
                        <input type="checkbox" checked={true} /> Criminal Record
                        Check
                      </li>
                      <li>
                        <input type="checkbox" checked={true} /> Fitness to Work
                      </li>
                      <li>
                        <input type="checkbox" checked={true} /> Qualification
                      </li>
                      <li>
                        <input type="checkbox" /> Professional Registration
                      </li>
                      <li>
                        <input type="checkbox" /> Professional Indemnity
                        Insurance
                      </li>
                      <li>
                        <input type="checkbox" /> Mandatory Training
                      </li>
                    </ul>
                  </div>

                  <div className="space16"></div>

                  <h4>Uploaded Documents:</h4>

                  <div className="space16"></div>

                  <div className="uploaded-documents">
                    <article className="uploaded-item">
                      <span>1.</span>

                      <div className="uploaded-item-details">
                        <span>CV</span>
                        <time>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
                          </svg>
                          Nov 6, 2025 - 11:30 M
                        </time>
                        <a className="vl-btn3" href="#">
                          <i className="fa-solid fa-download"></i> Download
                        </a>
                      </div>
                    </article>
                  </div>

                  <div className="space16"></div>
                  <div className="space16"></div>

                  <h4>Verification Timeline</h4>

                  <div
                    style={{
                      margin: "30px auto",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    {/* Step 1 */}
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          background: "var(--ztc-bg-bg-6)",
                          marginTop: "4px",
                          marginRight: "12px",
                        }}
                      ></div>
                      <div>
                        <div style={{ fontWeight: "bold" }}>
                          Registration Completed
                        </div>
                        <div style={{ fontSize: "14px", color: "#666" }}>
                          04 Nov 2025, 10:45 AM
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        borderLeft: "2px solid var(--ztc-bg-bg-6)",
                        height: "35px",
                        margin: "4px 0 4px 7px",
                      }}
                    ></div>

                    {/* Step 2 */}
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          background: "var(--ztc-bg-bg-6)",
                          marginTop: "4px",
                          marginRight: "12px",
                        }}
                      ></div>
                      <div>
                        <div style={{ fontWeight: "bold" }}>
                          Documents Submitted
                        </div>
                        <div style={{ fontSize: "14px", color: "#666" }}>
                          04 Nov 2025, 12:22 PM
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        borderLeft: "2px solid var(--ztc-bg-bg-6)",
                        height: "35px",
                        margin: "4px 0 4px 7px",
                      }}
                    ></div>

                    {/* Step 3 */}
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          background: "var(--ztc-bg-bg-6)",
                          marginTop: "4px",
                          marginRight: "12px",
                        }}
                      ></div>
                      <div>
                        <div style={{ fontWeight: "bold" }}>
                          Application Review
                        </div>
                        <div style={{ fontSize: "14px", color: "#666" }}>
                          04 Nov 2025, 03:10 PM
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        borderLeft: "2px solid #e5e7eb",
                        height: "35px",
                        margin: "4px 0 4px 7px",
                      }}
                    ></div>

                    {/* Step 4 */}
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          background: "#e5e7eb",
                          marginTop: "4px",
                          marginRight: "12px",
                        }}
                      ></div>
                      <div>
                        <div style={{ fontWeight: "bold" }}>Verified</div>
                        <div style={{ fontSize: "14px", color: "#666" }}>
                          Pending...
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space16"></div>
                  <div className="space16"></div>

                  <p style={{ fontSize: "17px", fontWeight: 600 }}>
                    Your profile is being reviewed by our compliance team.{" "}
                    <br />
                    You’ll gain access to your portal once verification is
                    complete.
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="blog-side-details">
                  <div className="blog-widget-area1">
                    <h3>Profile Details</h3>

                    <div className="space16"></div>
                    <div className="space16"></div>
                    <div className="card-body p-2 border-top pt-4">
                      <div className="d-flex widget align-items-center">
                        <svg
                          width="24"
                          height="24"
                          className="feather feather-layout fea icon-ex-md me-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
                        </svg>
                        <div className="flex-1">
                          <h6 className="widget-title mb-0">First Name:</h6>
                          <small className="job-information-text mb-0">
                            Benson
                          </small>
                        </div>
                      </div>

                      <div className="d-flex widget align-items-center mt-3">
                        <svg
                          width="24"
                          height="24"
                          className="feather feather-layout fea icon-ex-md me-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM13 16.083V20H17.6586C16.9423 17.9735 15.1684 16.4467 13 16.083ZM11 20V16.083C8.83165 16.4467 7.05766 17.9735 6.34141 20H11ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.2104 11 16 9.21043 16 7C16 4.78957 14.2104 3 12 3C9.78957 3 8 4.78957 8 7C8 9.21043 9.78957 11 12 11Z"></path>
                        </svg>
                        <div className="flex-1">
                          <h6 className="widget-title mb-0">Last Name:</h6>
                          <small className="job-information-text mb-0">
                            Joseph
                          </small>
                        </div>
                      </div>

                      <div className="d-flex widget align-items-center mt-3">
                        <svg
                          width="24"
                          height="24"
                          className="feather feather-user-check fea icon-ex-md me-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                        </svg>
                        <div className="flex-1">
                          <h6 className="widget-title mb-0">Email:</h6>
                          <small className="job-information-text mb-0">
                            josephbenson99@gmail.com
                          </small>
                        </div>
                      </div>

                      <div className="d-flex widget align-items-center mt-3">
                        <svg
                          width="24"
                          height="24"
                          className="feather feather-user-check fea icon-ex-md me-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8.95126 8.53668C10.2131 7.57265 11.7898 7.00002 13.5004 7.00002C17.6425 7.00002 21.0004 10.3579 21.0004 14.5C21.0004 18.6422 17.6425 22 13.5004 22C9.35825 22 6.00038 18.6422 6.00038 14.5C6.00038 12.7895 6.57302 11.2127 7.53705 9.95089L4.66155 7.0754L2.18667 9.55027L0.772461 8.13606L7.13642 1.77209L8.55064 3.18631L6.07576 5.66118L8.95126 8.53668ZM13.5004 20C16.5379 20 19.0004 17.5376 19.0004 14.5C19.0004 11.4625 16.5379 9.00002 13.5004 9.00002C10.4628 9.00002 8.00038 11.4625 8.00038 14.5C8.00038 17.5376 10.4628 20 13.5004 20Z"></path>
                        </svg>
                        <div className="flex-1">
                          <h6 className="widget-title mb-0">Gender:</h6>
                          <small className="job-information-text mb-0">
                            Male
                          </small>
                        </div>
                      </div>

                      <div className="d-flex widget align-items-center mt-3">
                        <svg
                          width="24"
                          height="24"
                          className="feather feather-user-check fea icon-ex-md me-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
                        </svg>
                        <div className="flex-1">
                          <h6 className="widget-title mb-0">Date of Birth:</h6>
                          <small className="job-information-text mb-0">
                            31st Dec, 1996
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
                          <h6 className="widget-title mb-0">Role:</h6>
                          <small className="job-information-text mb-0">
                            Software Engineer
                          </small>
                        </div>
                      </div>

                      <div className="d-flex widget align-items-center mt-3">
                        <svg
                          width="24"
                          height="24"
                          className="feather feather-monitor fea icon-ex-md me-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                        </svg>

                        <div className="flex-1">
                          <h6 className="widget-title mb-0">Mobile Number:</h6>
                          <small className="job-information-text mb-0">
                            +234 123 4567 890
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
                          <h6 className="widget-title mb-0">Address:</h6>
                          <small className="job-information-text mb-0">
                            Lagos, Nigeria
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
      )}

      {profileType === "employer" && (
        <div className="blog-details-section sp1">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="blog-main-content padding2 heading1">
                  <div className="space32"></div>

                  <div className="profile-photo-box">
                    <figure>
                      <img src="/assets/main/img/users/company.jpeg" />

                      <figcaption>
                        <h4>Nova Health</h4>
                        <h6>Hospital</h6>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="space16"></div>

                  <p style={{ fontSize: "16px" }}>
                    Your account has been created successfully! <br />
                    We’re reviewing your business details and payment. You’ll be
                    notified once your account is verified.
                  </p>

                  <div className="space16"></div>
                  <div className="space16"></div>

                  <div className="status-box">
                    <div className="status-heading">
                      <span>Status:</span> <h6>Pending Verification</h6>
                    </div>

                    <div className="status-progress-box">
                      <span>80%</span>
                      <progress value="80" max="100"></progress>
                    </div>
                  </div>

                  <div className="space16"></div>
                  <div className="space16"></div>

                  <h4>Verification Checklist:</h4>
                  <div className="space16"></div>

                  <p style={{ fontSize: "16px" }}>
                    The ticked items indicate documents and checks that have
                    been reviewed and verified by our team.
                  </p>

                  <div className="space16"></div>

                  <div>
                    <ul className="compliance-checklist">
                      <li>
                        <input type="checkbox" checked={true} /> Account
                        Registration
                      </li>
                      <li>
                        <input type="checkbox" checked={true} /> Business
                        Information Verification
                      </li>
                      <li>
                        <input type="checkbox" checked={true} /> Responsibility
                        Officer Verification
                      </li>
                      <li>
                        <input type="checkbox" checked={true} /> Agreement
                        Verification
                      </li>
                      <li>
                        <input type="checkbox" checked={true} /> Payment
                        Verification
                      </li>
                      <li>
                        <input type="checkbox" /> Account Activation
                      </li>
                    </ul>
                  </div>

                  <div className="space16"></div>

                  <h4>Uploaded Documents:</h4>

                  <div className="space16"></div>

                  <div className="uploaded-documents">
                    <article className="uploaded-item">
                      <span>1.</span>

                      <div className="uploaded-item-details">
                        <span>Agreement File</span>
                        <time>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
                          </svg>
                          Nov 6, 2025 - 11:30 AM
                        </time>
                        <a className="vl-btn3" href="#">
                          <i className="fa-solid fa-download"></i> Download
                        </a>
                      </div>
                    </article>
                  </div>

                  <div className="space16"></div>
                  <div className="space16"></div>

                  <h4>Verification Timeline</h4>

                  <div
                    style={{
                      margin: "30px auto",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    {/* Step 1 */}
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          background: "var(--ztc-bg-bg-6)",
                          marginTop: "4px",
                          marginRight: "12px",
                        }}
                      ></div>
                      <div>
                        <div style={{ fontWeight: "bold" }}>
                          Registration Completed
                        </div>
                        <div style={{ fontSize: "14px", color: "#666" }}>
                          04 Nov 2025, 10:45 AM
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        borderLeft: "2px solid var(--ztc-bg-bg-6)",
                        height: "35px",
                        margin: "4px 0 4px 7px",
                      }}
                    ></div>

                    {/* Step 2 */}

                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          background: "var(--ztc-bg-bg-6)",
                          marginTop: "4px",
                          marginRight: "12px",
                        }}
                      ></div>
                      <div>
                        <div style={{ fontWeight: "bold" }}>
                          Agreement Signed
                        </div>
                        <div style={{ fontSize: "14px", color: "#666" }}>
                          04 Nov 2025, 11:45 AM
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        borderLeft: "2px solid var(--ztc-bg-bg-6)",
                        height: "35px",
                        margin: "4px 0 4px 7px",
                      }}
                    ></div>

                    {/* Step 3 */}
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          background: "var(--ztc-bg-bg-6)",
                          marginTop: "4px",
                          marginRight: "12px",
                        }}
                      ></div>
                      <div>
                        <div style={{ fontWeight: "bold" }}>
                          Payment Completed
                        </div>
                        <div style={{ fontSize: "14px", color: "#666" }}>
                          04 Nov 2025, 12:22 PM
                        </div>
                      </div>
                    </div>

                    {/* Step 4 */}

                    <div
                      style={{
                        borderLeft: "2px solid var(--ztc-bg-bg-6)",
                        height: "35px",
                        margin: "4px 0 4px 7px",
                      }}
                    ></div>

                    {/* Step 5 */}
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          background: "var(--ztc-bg-bg-6)",
                          marginTop: "4px",
                          marginRight: "12px",
                        }}
                      ></div>
                      <div>
                        <div style={{ fontWeight: "bold" }}>
                          Application Review
                        </div>
                        <div style={{ fontSize: "14px", color: "#666" }}>
                          04 Nov 2025, 03:10 PM
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        borderLeft: "2px solid #e5e7eb",
                        height: "35px",
                        margin: "4px 0 4px 7px",
                      }}
                    ></div>

                    {/* Step 6 */}
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          background: "#e5e7eb",
                          marginTop: "4px",
                          marginRight: "12px",
                        }}
                      ></div>
                      <div>
                        <div style={{ fontWeight: "bold" }}>Verified</div>
                        <div style={{ fontSize: "14px", color: "#666" }}>
                          Pending...
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space16"></div>
                  <div className="space16"></div>

                  <p style={{ fontSize: "17px", fontWeight: 600 }}>
                    Your documents and payment are under review. <br />
                    You’ll gain access to your portal once verification is
                    complete.
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="blog-side-details">
                  <div className="blog-widget-area1">
                    <h3>Profile Details</h3>

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
                          <h6 className="widget-title mb-0">Business Name:</h6>
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
                          <h6 className="widget-title mb-0">
                            {" "}
                            Type of Business:
                          </h6>
                          <small className="job-information-text mb-0">
                            Hospital
                          </small>
                        </div>
                      </div>

                      <div className="d-flex widget align-items-center mt-3">
                        <svg
                          width="24"
                          height="24"
                          className="feather feather-user-check fea icon-ex-md me-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 3H15V0.5L18.5 4L15 7.5V5H8V7.5L4.5 4L8 0.5V3ZM3 17V6.5H5V17C5 18.1046 5.89543 19 7 19H17.5V21H7C4.79086 21 3 19.2091 3 17ZM21 16V9H23.5L20 5.5L16.5 9H19V16H16.5L20 19.5L23.5 16H21Z"></path>
                        </svg>
                        <div className="flex-1">
                          <h6 className="widget-title mb-0"> Company Size:</h6>
                          <small className="job-information-text mb-0">
                            Mid-Size
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
                          <h6 className="widget-title mb-0">Address:</h6>
                          <small className="job-information-text mb-0">
                            Lagos, Nigeria
                          </small>
                        </div>
                      </div>

                      <div className="d-flex widget align-items-center mt-3">
                        <svg
                          width="24"
                          height="24"
                          className="feather feather-user-check fea icon-ex-md me-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path>
                        </svg>
                        <div className="flex-1">
                          <h6 className="widget-title mb-0"> Website:</h6>
                          <small className="job-information-text mb-0">
                            <a href="#" style={{ color: "var(--ztc-bg-bg-6)" }}>
                              www.novahealth.com
                            </a>
                          </small>
                        </div>
                      </div>

                      <h5 className="mt-4">Responsibility Officer Details</h5>

                      <div className="d-flex widget align-items-center mt-4">
                        <svg
                          width="24"
                          height="24"
                          className="feather feather-layout fea icon-ex-md me-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
                        </svg>
                        <div className="flex-1">
                          <h6 className="widget-title mb-0">First Name:</h6>
                          <small className="job-information-text mb-0">
                            David
                          </small>
                        </div>
                      </div>

                      <div className="d-flex widget align-items-center mt-3">
                        <svg
                          width="24"
                          height="24"
                          className="feather feather-layout fea icon-ex-md me-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM13 16.083V20H17.6586C16.9423 17.9735 15.1684 16.4467 13 16.083ZM11 20V16.083C8.83165 16.4467 7.05766 17.9735 6.34141 20H11ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.2104 11 16 9.21043 16 7C16 4.78957 14.2104 3 12 3C9.78957 3 8 4.78957 8 7C8 9.21043 9.78957 11 12 11Z"></path>
                        </svg>
                        <div className="flex-1">
                          <h6 className="widget-title mb-0">Last Name:</h6>
                          <small className="job-information-text mb-0">
                            Okoye
                          </small>
                        </div>
                      </div>

                      <div className="d-flex widget align-items-center mt-3">
                        <svg
                          width="24"
                          height="24"
                          className="feather feather-user-check fea icon-ex-md me-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                        </svg>
                        <div className="flex-1">
                          <h6 className="widget-title mb-0">Email:</h6>
                          <small className="job-information-text mb-0">
                            davidokoye5@gmail.com
                          </small>
                        </div>
                      </div>

                      <div className="d-flex widget align-items-center mt-3">
                        <svg
                          width="24"
                          height="24"
                          className="feather feather-monitor fea icon-ex-md me-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                        </svg>

                        <div className="flex-1">
                          <h6 className="widget-title mb-0">Mobile Number:</h6>
                          <small className="job-information-text mb-0">
                            +234 123 4567 890
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
                          <h6 className="widget-title mb-0">Role:</h6>
                          <small className="job-information-text mb-0">
                            Medical Consultant
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
      )}
      {/*===== PROFILE AREA ENDS =======*/}
    </>
  );
};

export default Profile;
