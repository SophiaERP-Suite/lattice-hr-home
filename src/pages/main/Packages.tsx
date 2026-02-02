import { NavLink, useParams } from "react-router-dom";
import hero7 from "../../assets/main/img/all-images/bg/hero-bg7.png"
import element5 from "../../assets/main/img/elements/elements5.png"
import hero11 from "../../assets/main/img/all-images/hero/hero-img11.webp"
import cta1 from "../../assets/main/img/all-images/cta/cta-img1.png"
import { useEffect, useState } from "react";
import { fetchAllPackages } from "../../utils/Requests";
import HtmlRenderer from "../../layout/HTMLRenderer";
import Hashids from "hashids";
import { useAuth } from "../../utils/Auth/useAuth";

interface PackageData {
  packageId: number;
  packageName: string;
  packageDescription: string;
  duration: number;
  durationUnit: string;
  amount: number;
  currency: string;
  totalFeatures: number;
  totalEmployers: number;
  dateCreated: string;
  isActive: boolean;
}


const SelectPackage = () => {
  const [packages, setPackages] = useState<PackageData[]>([]);
  const hashIds = new Hashids('LatticeHumanResourceEncode', 10);
  const { id } = useParams();
  const { user } = useAuth();
  console.log(user)
  
  useEffect(() => {
    fetchAllPackages()
    .then(res => {
    if (res.status === 200) {
        res.json()
        .then(data => {
            console.log(data);
            setPackages(data.data);
        })
    } else {
        res.text()
        .then(data => {
        console.log(JSON.parse(data));
        })
    }
    })
  }, []);
  return (
    <>
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
                <h1>Packages</h1>
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

      {/*===== PRICING AREA STARTS =======*/}
      <div className="pricing1 sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 m-auto">
              <div className="heading3 text-center space-margin60">
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
                      fill="#091E42"
                    />
                    <path
                      d="M8.55001 17.8772C3.78851 17.6442 0 13.7338 0 8.94408C0 7.47429 0.356744 6.08731 0.988876 4.86398C3.52358 6.3183 4.79093 7.04546 5.74937 8.02547C6.89397 9.19583 7.72761 10.6308 8.17521 12.2011C8.55001 13.5159 8.55001 14.9697 8.55001 17.8772Z"
                      fill="#091E42"
                    />
                    <path
                      d="M1.43959 4.08981C3.97405 5.54399 5.24127 6.27107 6.57492 6.60594C8.16664 7.00559 9.83338 7.00559 11.4251 6.60594C12.7587 6.27108 14.026 5.54399 16.5604 4.08982C14.9571 1.62862 12.1699 0 9 0C5.8301 0 3.04295 1.62862 1.43959 4.08981Z"
                      fill="#091E42"
                    />
                  </svg>{" "}
                  Available Packages
                </h5>
                <div className="space16"></div>
                <h2
                  className="vl-section-title"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  Flexible plans built for your business, { user?.businessName }
                </h2>
                <div className="space16"></div>
                <p data-aos="zoom-in" data-aos-duration="1100">
                  { user && `Hello ${user.userFirstName}, `} Choose a transparent pricing option designed to match your
                  business goals, budget, and hiring needs.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content">
                <div id="monthly">
                  <div className="row">
                    {
                        packages.map((data, index) => (
                          <div
                            key={index}
                            className="col-lg-4 col-md-6"
                            data-aos="flip-right"
                            data-aos-duration="800"
                            >
                            <div className="single-pricing-area">
                                <div className={`pricing-box ${index % 2 !== 0 && 'active'}`}
                                >
                                <h3>{data.packageName}</h3>
                                <p style={{ height: '160px', overflowY: 'auto', scrollbarColor: '#fff #fff', scrollbarWidth: 'none' }}><HtmlRenderer html={data.packageDescription} /></p>
                                <h2 style={{ fontSize: '30px' }}>
                                   { `${data.currency} ${data.amount.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2})}` }
                                </h2>

                                <div className="list-heading">
                                    <NavLink to={`/package/${id}/${hashIds.encode(data.packageId)}`} className="vl-btn3">
                                        View Details
                                    </NavLink>
                                </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== PRICING AREA ENDS =======*/}

      {/*===== FAQ AREA STARTS =======*/}
      <div className="faq1 sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="heading3 text-center space-margin60">
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
                      fill="#091E42"
                    />
                    <path
                      d="M8.55001 17.8772C3.78851 17.6442 0 13.7338 0 8.94408C0 7.47429 0.356744 6.08731 0.988876 4.86398C3.52358 6.3183 4.79093 7.04546 5.74937 8.02547C6.89397 9.19583 7.72761 10.6308 8.17521 12.2011C8.55001 13.5159 8.55001 14.9697 8.55001 17.8772Z"
                      fill="#091E42"
                    />
                    <path
                      d="M1.43959 4.08981C3.97405 5.54399 5.24127 6.27107 6.57492 6.60594C8.16664 7.00559 9.83338 7.00559 11.4251 6.60594C12.7587 6.27108 14.026 5.54399 16.5604 4.08982C14.9571 1.62862 12.1699 0 9 0C5.8301 0 3.04295 1.62862 1.43959 4.08981Z"
                      fill="#091E42"
                    />
                  </svg>{" "}
                  FAQ
                </h5>
                <div className="space16"></div>
                <h2
                  className="vl-section-title"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  Frequently Asked Questions
                </h2>
                <div className="space16"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="accordion-widget-area">
                <div className="accordion" id="accordionExample">
                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Can I upgrade or downgrade my plan anytime?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, you can switch between plans at any time. Changes
                          take effect immediately, and your billing will adjust
                          accordingly.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space30"></div>
                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-duration="900"
                  >
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What payment methods do you accept?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          We accept major credit/debit cards and other secure
                          online payment options.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space30"></div>
                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Can I change or cancel my plan anytime?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes. You can upgrade, downgrade, or cancel your plan
                          whenever you like — no penalties or restrictions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space30"></div>
                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-duration="1100"
                  >
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Are there any hidden fees?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          No — our pricing is completely transparent. You only
                          pay for the plan you choose, with no additional
                          charges.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== FAQ AREA ENDS =======*/}

      {/* FAQ ENDS */}

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
                        src={cta1}
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

export default SelectPackage;
