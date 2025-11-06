const Jobs = () => {
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
                <h1>Jobs</h1>
                <div className="space20"></div>
                <div>
                  <a href="/">
                    Home <i className="fa-solid fa-angle-right"></i>
                  </a>{" "}
                  <span>Jobs</span>
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

      {/*===== CASE AREA STARTS =======*/}
      <div className="case1-section sp1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div
                className="heading1 space-margin60"
                style={{ marginBottom: 0 }}
              >
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
                  Jobs
                </h5>
                <div className="space16"></div>
                <h2
                  className="vl-section-title"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  Find Your Next Healthcare Opportunity
                </h2>
                <div className="space16"></div>
                <p data-aos="zoom-in" data-aos-duration="1100">
                  Explore verified job openings from trusted hospitals, clinics,
                  and healthcare organizations.
                </p>
              </div>
            </div>

            <div className="job-search-container">
              <h5>Showing 1 - 6 of 12 results</h5>

              <div className="job-search-div">
                <div className="job-search-box">
                  <input type="text" placeholder="Search..." />
                  <button type="submit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M19.25 19.25L13.75 13.75M2.75 9.16667C2.75 10.0093 2.91597 10.8437 3.23844 11.6222C3.56091 12.4007 4.03356 13.1081 4.6294 13.7039C5.22524 14.2998 5.93261 14.7724 6.71111 15.0949C7.48962 15.4174 8.32402 15.5833 9.16667 15.5833C10.0093 15.5833 10.8437 15.4174 11.6222 15.0949C12.4007 14.7724 13.1081 14.2998 13.7039 13.7039C14.2998 13.1081 14.7724 12.4007 15.0949 11.6222C15.4174 10.8437 15.5833 10.0093 15.5833 9.16667C15.5833 8.32402 15.4174 7.48962 15.0949 6.71111C14.7724 5.93261 14.2998 5.22524 13.7039 4.6294C13.1081 4.03356 12.4007 3.56091 11.6222 3.23844C10.8437 2.91597 10.0093 2.75 9.16667 2.75C8.32402 2.75 7.48962 2.91597 6.71111 3.23844C5.93261 3.56091 5.22524 4.03356 4.6294 4.6294C4.03356 5.22524 3.56091 5.93261 3.23844 6.71111C2.91597 7.48962 2.75 8.32402 2.75 9.16667Z"
                        stroke="#FB8500"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <div className="job-select-box">
                  <label>Sort By:</label>
                  <select name="sortBy" id="sortBy">
                    <option value="newest"> Newest</option>
                    <option value="oldest"> Oldest</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-12 job-select-container">
              <div className="job-select-box">
                <label>Filter By:</label>

                <div className="filters">
                  {/* Job Type */}
                  <select name="jobType" id="jobType">
                    <option value="">Job Type</option>
                    <option value="full-time">Full-Time</option>
                    <option value="part-time">Part-Time</option>
                    <option value="contract">Contract</option>
                    <option value="temporary">Temporary</option>
                    <option value="internship">Internship</option>
                  </select>

                  {/* Department */}
                  <select name="department" id="department">
                    <option value="">Department</option>
                    <option value="nursing">Nursing</option>
                    <option value="pharmacy">Pharmacy</option>
                    <option value="radiology">Radiology</option>
                    <option value="laboratory">Laboratory</option>
                    <option value="administration">Administration</option>
                    <option value="surgery">Surgery</option>
                    <option value="therapy">Therapy</option>
                  </select>

                  {/* Experience Level */}
                  <select name="experience" id="experience">
                    <option value="">Experience Level</option>
                    <option value="entry">Entry Level</option>
                    <option value="mid">Mid Level</option>
                    <option value="senior">Senior Level</option>
                    <option value="executive">Executive</option>
                  </select>

                  {/* Location */}
                  <select name="location" id="location">
                    <option value="">Location</option>
                    <option value="lagos">Lagos</option>
                    <option value="abuja">Abuja</option>
                    <option value="port-harcourt">Port Harcourt</option>
                    <option value="ibadan">Ibadan</option>
                    <option value="enugu">Enugu</option>
                    <option value="kaduna">Kaduna</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="job-result-text">
            <h5>Showing 1 - 6 of 12 results</h5>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {/*===== SERVICE AREA STARTS =======*/}
              <div className="service9 jobs-container">
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
                            <img src="/assets/main/img/logo/download.png" />
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
                          <a href="/job-details" className="title">
                            Pediatric Doctor
                          </a>

                          <div className="job-box-loc">
                            <i className="fa-solid fa-location-dot"></i>{" "}
                            <span>Lagos, Nigeria</span>
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

          <div className="col-lg-12">
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
      {/*===== CASE AREA ENDS =======*/}
    </>
  );
};

export default Jobs;
