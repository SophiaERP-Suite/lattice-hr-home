

import { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ProfileContext } from "../../utils/main/Contexts";
import type { CandidateFormValues } from "../../types/candidateForm";
import { createCandidateFirstStage } from "../../api/CandidateApi";
import { toast, ToastContainer } from "react-toastify";
import type { CityDto, CountryDto, StateDto } from "../../types/location";
import { getAllCities, getAllStates } from "../../api/LocationApi";
import hero7 from "../../assets/main/img/all-images/bg/hero-bg7.png";
import hero11 from "../../assets/main/img/all-images/hero/hero-img11.webp";
import { useForm } from "react-hook-form";
import {
  fetchCountries,
  fetchJobSectors,
  fetchStatesByCountryId,
  fetchCitiesByStateId,
  submitEmployerData,
} from "../../utils/Requests";
import { handleCreateEmployer } from "../../utils/ReponseHandlers";
import { useAuth } from "../../utils/Auth/useAuth";
import type { AuthData } from "../../utils/Auth/auth.types";
import { getJobCategories } from "../../api/JobMetaApi";
import Hashids from "hashids";

export interface JobCategory {
  jobCategoryId: number;
  categoryName: string;
}

export interface JobSector {
  jobSectorId: number;
  sectorName: string;
}

interface EmployerRegister {
  BusinessName: string;
  JobSectorId: string;
  CompanyMail: string;
  CompanyPhone: string;
  CompanySize: string;
  RegistrationNo: string;
  WebsiteUrl: string;
  CountryId: string;
  StateId: string;
  CityId: string;
  Address: string;
  PostCode: string;
  Email: string;
  FirstName: string;
  LastName: string;
  Phone: string;
  Position: string;
  Password: string;
  ConfirmPassword: string;
  Gender: string;
  DateOfBirth: string;
  EmployerLogo: string;
  ProfilePhoto: string;
  VAT: string;
  Terms: boolean;
  Declaration: boolean;
}

interface JobSectorData {
  jobSectorId: number;
  name: string;
}

function RegisterUser() {
  const [registerType, setRegisterType] = useState<"candidate" | "employer">(
    "candidate",
  );
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState<CountryDto[]>([]);
  const [candidateStates, setCandidateStates] = useState<StateDto[]>([]);
  const [candidateCities, setCandidateCities] = useState<CityDto[]>([]);
  const [employerStates, setEmployerStates] = useState<StateDto[]>([]);
  const [employerCities, setEmployerCities] = useState<CityDto[]>([]);
  const [jobSectors, setJobSectors] = useState<JobSectorData[]>([]);
  const hashIds = new Hashids('LatticeHumanResourceEncode', 10);
  const [candidateJobCategories, setCandidateJobCategories] = useState<
    JobCategory[]
  >([]);

  // Candidate form
  const {
    register: registerCandidate,
    handleSubmit: handleCandidateSubmit,
    formState: { errors: candidateErrors },
    setValue: setCandidateValue,
    watch: watchCandidate,
  } = useForm<
    CandidateFormValues & { JobSectorId: string; JobCategoryId: string }
  >();

  // Employer form
  const {
    register: registerEmployer,
    formState: { errors: employerErrors },
    handleSubmit: handleEmployerSubmit,
    reset: resetEmployer,
    setValue: setEmployerValue,
    watch: watchEmployer,
  } = useForm<EmployerRegister>();

  // Watch candidate fields
  const candidateCountryId = watchCandidate("CountryId");
  const candidateStateId = watchCandidate("StateId");
  const candidateJobSectorId = watchCandidate("JobSectorId");

  // Watch employer fields
  const employerCountryId = watchEmployer("CountryId");
  const employerStateId = watchEmployer("StateId");
  const employerPassword = watchEmployer("Password");

  // const hashIds = new Hashids("LatticeHumanResourceEncode", 10);
  const { login } = useAuth();

  // Initialize all data on component mount
  useEffect(() => {
    const initializeData = async () => {
      setIsLoading(true);
      try {
        // Fetch countries for both forms
        const countriesRes = await fetchCountries();
        if (countriesRes.status === 200) {
          const data = await countriesRes.json();
          setCountries(data.data || []);
        }

        // Fetch job sectors for both candidate and employer
        const jobSectorsRes = await fetchJobSectors();
        if (!jobSectorsRes) {
          return;
        }
        const jobSectorsData = await jobSectorsRes.json();
        setJobSectors(jobSectorsData || []);
      } catch (error) {
        console.error("Error initializing data:", error);
        toast.error("Failed to load initial data");
      } finally {
        setIsLoading(false);
      }
    };

    initializeData();
  }, []);

  // CANDIDATE: Fetch job categories when job sector changes
  useEffect(() => {
    const fetchCandidateJobCategories = async () => {
      if (!candidateJobSectorId || candidateJobSectorId === "0") {
        setCandidateJobCategories([]);
        setCandidateValue("JobCategoryId", "0");
        return;
      }

      try {
        const response = await getJobCategories(Number(candidateJobSectorId));

        if (response && Array.isArray(response)) {
          setCandidateJobCategories(response);
        } else if (response && response.data) {
          // Handle case where response has data property
          setCandidateJobCategories(
            Array.isArray(response.data) ? response.data : [],
          );
        } else {
          setCandidateJobCategories([]);
          toast.error("No categories found for this sector");
        }
      } catch (error) {
        console.error("Error fetching candidate job categories:", error);
        setCandidateJobCategories([]);
        toast.error("Failed to load job categories");
      }
    };

    fetchCandidateJobCategories();
  }, [candidateJobSectorId, setCandidateValue]);

  // CANDIDATE: Fetch states when country changes
  useEffect(() => {
    const fetchCandidateStates = async () => {
      if (!candidateCountryId || candidateCountryId === "0") {
        setCandidateStates([]);
        setCandidateValue("StateId", "0");
        setCandidateValue("CityId", "0");
        return;
      }

      try {
        const response = await getAllStates(Number(candidateCountryId));
        let statesData: StateDto[] = [];

        if (Array.isArray(response)) {
          statesData = response;
        } else if (response && response.data) {
          statesData = Array.isArray(response.data) ? response.data : [];
        }

        setCandidateStates(statesData);
      } catch (error) {
        console.error("Error fetching candidate states:", error);
        setCandidateStates([]);
        toast.error("Failed to load states");
      }
    };

    fetchCandidateStates();
  }, [candidateCountryId, setCandidateValue]);

  // CANDIDATE: Fetch cities when state changes
  useEffect(() => {
    const fetchCandidateCities = async () => {
      if (!candidateStateId || candidateStateId === "0") {
        setCandidateCities([]);
        setCandidateValue("CityId", "0");
        return;
      }

      try {
        const response = await getAllCities(Number(candidateStateId));
        let citiesData: CityDto[] = [];

        if (Array.isArray(response)) {
          citiesData = response;
        } else if (response && response.data) {
          citiesData = Array.isArray(response.data) ? response.data : [];
        }
        console.log("ccccc", response);
        setCandidateCities(citiesData);
      } catch (error) {
        console.error("Error fetching candidate cities:", error);
        setCandidateCities([]);
      }
    };

    fetchCandidateCities();
  }, [candidateStateId, setCandidateValue]);

  // EMPLOYER: Fetch states when country changes
  useEffect(() => {
    const fetchEmployerStates = async () => {
      if (!employerCountryId || employerCountryId === "") {
        setEmployerStates([]);
        setEmployerValue("StateId", "");
        setEmployerValue("CityId", "");
        return;
      }

      try {
        const response = await fetchStatesByCountryId(
          Number(employerCountryId),
        );
        let statesData: StateDto[] = [];

        if (response.status === 200) {
          const data = await response.json();
          statesData = Array.isArray(data.data) ? data.data : [];
        }

        setEmployerStates(statesData);
      } catch (error) {
        console.error("Error fetching employer states:", error);
        setEmployerStates([]);
      }
    };

    fetchEmployerStates();
  }, [employerCountryId, setEmployerValue]);

  // EMPLOYER: Fetch cities when state changes
  useEffect(() => {
    const fetchEmployerCities = async () => {
      if (!employerStateId || employerStateId === "") {
        setEmployerCities([]);
        setEmployerValue("CityId", "");
        return;
      }

      try {
        const response = await fetchCitiesByStateId(Number(employerStateId));
        if (response.status === 200 || response.status === 201) {
          const data = await response.json();
          setEmployerCities(data ?? []);
        }
      } catch (error) {
        console.error("Error fetching employer cities:", error);
        setEmployerCities([]);
      }
    };

    fetchEmployerCities();
  }, [employerStateId, setEmployerValue]);

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
      registerFormRef.current.animate({ opacity: [0, 1] }, { duration: 300 });
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

  const addJobSeeker = async (
    data: CandidateFormValues & { JobSectorId: string; JobCategoryId: string },
  ) => {
    try {
      const formData = new FormData();
      formData.append("FirstName", data.FirstName);
      formData.append("LastName", data.LastName);
      formData.append("DateOfBirth", data.DateOfBirth);
      formData.append("Gender", data.Gender);
      formData.append("Password", data.Password);
      formData.append("Email", data.Email);
      formData.append("MobileNo", data.MobileNo);
      formData.append("Address", data.Address);
      formData.append("CountryId", data.CountryId.toString());
      formData.append("CityId", data.CityId.toString());
      formData.append("StateId", data.StateId.toString());

      // Add job sector and category for candidate
      formData.append("JobSectorId", data.JobSectorId.toString());
      formData.append("JobCategoryId", data.JobCategoryId.toString());

      if (data.ProfilePhoto && data.ProfilePhoto[0]) {
        formData.append("ProfilePhoto", data.ProfilePhoto[0]);
      }

      const response = await createCandidateFirstStage(formData);

      if (!response || !response.result?.data?.token) {
        toast.error(response?.message || "Failed to create account");
        return;
      }

      toast.success("Account created successfully!");
      localStorage.setItem("token", response.result.data.token);

      if (response.data?.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
      console.log("token", response.result.data.token);

      const token = response.result.data.token;

      localStorage.setItem("token", token);

      window.open(
        `http://localhost:5175/one/lhr_cdt/auth-bridge?token=${token}`,
      );
    } catch (error) {
      console.error("Error creating candidate:", error);
      toast.error("An error occurred while creating your account");
    }
  };

  const submitEmployerRegistration = async (data: EmployerRegister) => {
    if (!employerErrors.FirstName && !employerErrors.LastName &&
      !employerErrors.ProfilePhoto && !employerErrors.Phone &&
      !employerErrors.Email && !employerErrors.RegistrationNo &&
      !employerErrors.DateOfBirth && !employerErrors.Gender &&
      !employerErrors.Address && !employerErrors.CountryId &&
      !employerErrors.BusinessName && !employerErrors.StateId &&
      !employerErrors.JobSectorId && !employerErrors.CompanySize &&
      !employerErrors.CityId && !employerErrors.Password &&
      !employerErrors.Position && !employerErrors.WebsiteUrl &&
      !employerErrors.PostCode && !employerErrors.EmployerLogo &&
      !employerErrors.CompanyMail && !employerErrors.CompanyPhone &&
      !employerErrors.VAT
    ) {
      const loader = document.getElementById('query-loader');
      const text = document.getElementById('query-text');
      if (loader) {
        loader.style.display = 'flex';
      }
      if (text) {
        text.style.display = 'none';
      }
      const formData = new FormData();
      formData.append('FirstName', data.FirstName);
      formData.append('LastName', data.LastName);
      formData.append('ProfilePhoto', data.ProfilePhoto[0]);
      formData.append('Phone', data.Phone);
      formData.append('Email', data.Email);
      formData.append('RegistrationNo', data.RegistrationNo);
      formData.append('DateOfBirth', data.DateOfBirth);
      formData.append('Gender', data.Gender);
      formData.append('Address', data.Address);
      formData.append('StateId', data.StateId);
      formData.append('CountryId', data.CountryId);
      formData.append('CityId', data.CityId);
      formData.append('JobSectorId', data.JobSectorId);
      formData.append('Position', data.Position);
      formData.append('BusinessName', data.BusinessName);
      formData.append('CompanySize', data.CompanySize);
      formData.append('WebsiteUrl', data.WebsiteUrl);
      formData.append('PostCode', data.PostCode);
      formData.append('Password', data.Password);
      formData.append('CompanyPhone', data.CompanyPhone);
      formData.append('CompanyMail', data.CompanyMail);
      formData.append('VAT', data.VAT);
      formData.append('EmployerLogo', data.EmployerLogo[0]);
      const res = await submitEmployerData(formData);
      const resStat = await handleCreateEmployer(res, loader, text, { toast }, resetEmployer);
      if (resStat?.status === 200 || resStat?.status === 201) {
        const data: AuthData = (resStat.data as unknown) as AuthData;
        login(data);
        const orgId = data.user.employerId ?? 0;
        setTimeout(() => {
          navigate(`/package/${hashIds.encode(orgId)}`);
        }, 2500);
      }
      
    }
  }

  // Show loading state
  if (isLoading) {
    return (
      <>
        <ToastContainer />
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
                  <h1>Register</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="contact-inner-area sp1"
          style={{ paddingTop: "50px", minHeight: "300px" }}
        >
          <div className="container text-center">
            <div
              className="spinner-border text-primary"
              role="status"
              style={{ width: "3rem", height: "3rem" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3" style={{ fontSize: "18px" }}>
              Loading registration data...
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <ToastContainer />
      <div
        className="inner-header-area"
        style={{
          backgroundImage: `url(${hero7})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <ToastContainer />
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
                <img src={hero11} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="contact-inner-area sp1"
        style={{ paddingBottom: "20px" }}
        ref={registerRef}
      >
        <div className="container">
          <div className="row g-5" style={{ justifyContent: "center" }}>
            <div className="col-lg-4 col-md-6">
              <div
                className={`single-box ${registerType === "candidate" ? "active" : ""}`}
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
                className={`single-box ${registerType === "employer" ? "active" : ""}`}
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

      {registerType === "candidate" && registerStage.candidate === 1 && (
        <div
          className="contact-inner-area sp1"
          style={{ paddingTop: 0 }}
          ref={registerFormRef}
          key="candidate-form"
        >
          <div className="container">
            <div className="row align-items-center g-5 register-form">
              <div className="col-lg-12">
                <h2>Registration Form</h2>
                <div className="contact-main-boxarea">
                  <div className="space16"></div>
                  <div className="space16"></div>

                  <div className="row" style={{ rowGap: "30px" }}>
                    <div className="col-lg-6 col-md-6">
                      <label>First Name:</label>
                      <div className="input-area">
                        <input
                          type="text"
                          placeholder="First Name"
                          {...registerCandidate("FirstName", {
                            required: "Required",
                          })}
                          required
                        />
                        <p className="error-msg">
                          {candidateErrors.FirstName?.message}
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Last Name:</label>
                      <div className="input-area">
                        <input
                          type="text"
                          placeholder="Last Name"
                          {...registerCandidate("LastName", {
                            required: "Required",
                          })}
                          required
                        />
                        <p className="error-msg">
                          {candidateErrors.LastName?.message}
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Email Address:</label>
                      <div className="input-area">
                        <input
                          type="text"
                          placeholder="Email Address"
                          {...registerCandidate("Email", {
                            required: "Required",
                            pattern: {
                              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                              message: "Invalid Email",
                            },
                          })}
                          required
                        />
                        <p className="error-msg">
                          {candidateErrors.Email?.message}
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Mobile Number:</label>
                      <div className="input-area">
                        <input
                          type="text"
                          placeholder="Mobile Number"
                          {...registerCandidate("MobileNo", {
                            required: "Required",
                          })}
                          required
                        />
                        <p className="error-msg">
                          {candidateErrors.MobileNo?.message}
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Gender:</label>
                      <div className="input-area">
                        <select
                          {...registerCandidate("Gender", {
                            required: "Required",
                          })}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        <p className="error-msg">
                          {candidateErrors.Gender?.message}
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Date of Birth:</label>
                      <div className="input-area">
                        <input
                          type="date"
                          {...registerCandidate("DateOfBirth", {
                            required: "Required",
                          })}
                          required
                        />
                        <p className="error-msg">
                          {candidateErrors.DateOfBirth?.message}
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Address:</label>
                      <div className="input-area">
                        <input
                          type="text"
                          {...registerCandidate("Address", {
                            required: "Required",
                          })}
                          required
                        />
                        <p className="error-msg">
                          {candidateErrors.Address?.message}
                        </p>
                      </div>
                    </div>

                    {/* CANDIDATE COUNTRY */}
                    <div className="col-lg-6 col-md-6">
                      <label>Country</label>
                      <div className="input-area">
                        <select
                          className="form-control"
                          style={{
                            paddingBottom: "15px",
                            paddingTop: "15px",
                          }}
                          {...registerCandidate("CountryId", {
                            required: "Required",
                          })}
                          disabled={countries.length === 0}
                        >
                          <option value="">Select Country</option>
                          {countries.length > 0 ? (
                            countries.map((data) => (
                              <option
                                key={data.countryId}
                                value={data.countryId}
                              >
                                {data.name}
                              </option>
                            ))
                          ) : (
                            <option value="">Loading countries...</option>
                          )}
                        </select>
                      </div>
                      <p className="error-msg">
                        {candidateErrors.CountryId?.message}
                      </p>
                    </div>

                    {/* CANDIDATE STATE */}
                    <div className="col-lg-6 col-md-6">
                      <label>State</label>
                      <div className="input-area">
                        <select
                          className="form-control"
                          style={{
                            paddingBottom: "15px",
                            paddingTop: "15px",
                          }}
                          {...registerCandidate("StateId", {
                            required: "Required",
                          })}
                          disabled={candidateStates.length === 0}
                        >
                          <option value="">Select State</option>
                          {candidateStates.map((data) => (
                            <option key={data.stateId} value={data.stateId}>
                              {data.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <p className="error-msg">
                        {candidateErrors.StateId?.message}
                      </p>
                    </div>

                    {/* CANDIDATE CITY */}
                    <div className="col-lg-6 col-md-6">
                      <label>City</label>
                      <div className="input-area">
                        <select
                          className="form-control"
                          style={{
                            paddingBottom: "15px",
                            paddingTop: "15px",
                          }}
                          {...registerCandidate("CityId", {
                            required: "Required",
                          })}
                          disabled={candidateCities.length === 0}
                        >
                          <option value="">Select City</option>
                          {candidateCities.map((data) => (
                            <option key={data.cityId} value={data.cityId}>
                              {data.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <p className="error-msg">
                        {candidateErrors.CityId?.message}
                      </p>
                    </div>

                    {/* CANDIDATE JOB SECTOR */}
                    <div className="col-lg-6 col-md-6">
                      <label>Job Sector</label>
                      <div className="input-area">
                        <select
                          className="form-control"
                          style={{
                            paddingBottom: "15px",
                            paddingTop: "15px",
                          }}
                          {...registerCandidate("JobSectorId", {
                            required: "Required",
                          })}
                        >
                          <option value="">Select Job Sector</option>
                          {jobSectors.map((data) => (
                            <option
                              key={data.jobSectorId}
                              value={data.jobSectorId}
                            >
                              {data.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <p className="error-msg">
                        {candidateErrors.JobSectorId?.message}
                      </p>
                    </div>

                    {/* CANDIDATE JOB CATEGORY */}
                    <div className="col-lg-6 col-md-6">
                      <label>Job Category</label>
                      <div className="input-area">
                        <select
                          className="form-control"
                          style={{
                            paddingBottom: "15px",
                            paddingTop: "15px",
                          }}
                          {...registerCandidate("JobCategoryId", {
                            required: "Required",
                          })}
                          disabled={candidateJobCategories.length === 0}
                        >
                          <option value="">Select Job Category</option>
                          {candidateJobCategories.map((data) => (
                            <option
                              key={data.jobCategoryId}
                              value={data.jobCategoryId}
                            >
                              {data.categoryName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <p className="error-msg">
                        {candidateErrors.JobCategoryId?.message}
                      </p>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <label>Passport:</label>
                      <div className="input-area">
                        <input
                          type="file"
                          accept="image/png, image/jpeg, image/jpg, image/webp"
                          {...registerCandidate("ProfilePhoto", {
                            required: "Required",
                            validate: (value) => {
                              if (
                                !value ||
                                (value as unknown as FileList).length === 0
                              ) {
                                return "Required";
                              }

                              const file = (value as unknown as FileList)[0];

                              if (file.size > 2 * 1024 * 1024) {
                                return "Max file size is 2MB";
                              }

                              const allowedTypes = [
                                "image/jpeg",
                                "image/png",
                                "image/jpg",
                                "image/webp",
                              ];

                              if (!allowedTypes.includes(file.type)) {
                                return "Only JPG, PNG or WEBP images are allowed";
                              }

                              return true;
                            },
                          })}
                        />
                        <p className="error-msg">
                          {candidateErrors.ProfilePhoto?.message}
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Password:</label>
                      <div className="input-area">
                        <input
                          type="password"
                          placeholder="Password"
                          {...registerCandidate("Password", {
                            required: "Required",
                          })}
                          required
                        />
                        <p className="error-msg">
                          {candidateErrors.Password?.message}
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Confirm Password:</label>
                      <div className="input-area">
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          {...registerCandidate("ConfirmPassword", {
                            required: "Required",
                          })}
                          required
                        />
                        <p className="error-msg">
                          {candidateErrors.ConfirmPassword?.message}
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-lg-12 col-md-12"
                      style={{ marginTop: "20px" }}
                    >
                      <p>
                        Already have an account?{" "}
                        <NavLink
                          to="/login"
                          style={{ color: "var(--ztc-bg-bg-6)" }}
                        >
                          Login
                        </NavLink>
                      </p>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="input-area">
                        <button
                          onClick={handleCandidateSubmit(addJobSeeker)}
                          type="submit"
                          className="vl-btn1 w-100 text-center"
                          style={{ marginTop: "30px", cursor: "pointer" }}
                        >
                          Submit <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {registerType === "employer" && registerStage.employer === 1 && (
        <div
          className="contact-inner-area sp1"
          style={{ paddingTop: 0 }}
          ref={registerFormRef}
          key="employer-form"
        >
          <div className="container">
            <div className="row align-items-center g-5 register-form">
              <div className="col-lg-12">
                <h2>Application Form</h2>
                <form
                  className="contact-main-boxarea"
                  noValidate
                  onSubmit={handleEmployerSubmit(submitEmployerRegistration)}
                >
                  <div className="space16"></div>
                  <div className="space16"></div>

                  <div className="row" style={{ rowGap: "30px" }}>
                    <h5>Business Details</h5>

                    <div className="col-12">
                      <label>Business Name</label>
                      <div className="input-area">
                        <input
                          type="text"
                          placeholder="Business Name"
                          className="form-control"
                          {...registerEmployer("BusinessName", {
                            required: "Required",
                          })}
                        />
                      </div>
                      <p className="error-msg">
                        {employerErrors.BusinessName?.message}
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <label>Company Mail</label>
                      <div className="input-area">
                        <input
                          type="text"
                          placeholder="Company Mail"
                          {...registerEmployer("CompanyMail", {
                            required: "Required",
                          })}
                        />
                      </div>
                      <p className="error-msg">
                        {employerErrors.CompanyMail?.message}
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Company Phone</label>
                      <div className="input-area">
                        <input
                          type="text"
                          placeholder="Company Phone"
                          {...registerEmployer("CompanyPhone", {
                            required: "Required",
                          })}
                        />
                      </div>
                      <p className="error-msg">
                        {employerErrors.CompanyPhone?.message}
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <label>Business Logo</label>
                      <div className="input-area">
                        <input
                          type="file"
                          placeholder="Business Logo"
                          className="form-control"
                          {...registerEmployer("EmployerLogo", {
                            required: "Required",
                          })}
                        />
                      </div>
                      <p className="error-msg">
                        {employerErrors.EmployerLogo?.message}
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <label>Job Sector</label>
                      <div className="input-area">
                        <select
                          className="form-control"
                          style={{
                            paddingBottom: "15px",
                            paddingTop: "15px",
                          }}
                          {...registerEmployer("JobSectorId", {
                            required: "Required",
                          })}
                        >
                          <option value="">-- Select Job Sector --</option>
                          {jobSectors.map((data, index) => (
                            <option key={index} value={data.jobSectorId}>
                              {data.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <p className="error-msg">
                        {employerErrors.JobSectorId?.message}
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <label>Company Size</label>
                      <div className="input-area">
                        <select
                          className="form-control"
                          style={{
                            paddingBottom: "15px",
                            paddingTop: "15px",
                          }}
                          {...registerEmployer("CompanySize", {
                            required: "Required",
                          })}
                        >
                          <option value="">Select Company Size</option>
                          <option value="small">
                            1 - 50 employees (Small)
                          </option>
                          <option value="medium">
                            51 - 250 employees (Medium)
                          </option>
                          <option value="large">250+ employees (Large)</option>
                        </select>
                      </div>
                      <p className="error-msg">
                        {employerErrors.CompanySize?.message}
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Business Registration Number</label>
                      <div className="input-area">
                        <input
                          type="text"
                          placeholder="Business Registration Number"
                          {...registerEmployer("RegistrationNo", {
                            required: "Required",
                          })}
                        />
                      </div>
                      <p className="error-msg">
                        {employerErrors.RegistrationNo?.message}
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Website</label>
                      <div className="input-area">
                        <input
                          type="text"
                          placeholder="Website"
                          {...registerEmployer("WebsiteUrl", {
                            required: "Required",
                          })}
                        />
                      </div>
                      <p className="error-msg">
                        {employerErrors.WebsiteUrl?.message}
                      </p>
                    </div>

                    {/* EMPLOYER COUNTRY */}
                    <div className="col-lg-6 col-md-6">
                      <label>Country</label>
                      <div className="input-area">
                        <select
                          className="form-control"
                          style={{
                            paddingBottom: "15px",
                            paddingTop: "15px",
                          }}
                          {...registerEmployer("CountryId", {
                            required: "Required",
                          })}
                        >
                          <option value="">Select Country</option>
                          {countries.map((data) => (
                            <option key={data.countryId} value={data.countryId}>
                              {data.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <p className="error-msg">
                        {employerErrors.CountryId?.message}
                      </p>
                    </div>

                    {/* EMPLOYER STATE */}
                    <div className="col-lg-6 col-md-6">
                      <label>State</label>
                      <div className="input-area">
                        <select
                          className="form-control"
                          disabled={employerStates.length === 0}
                          style={{
                            paddingBottom: "15px",
                            paddingTop: "15px",
                          }}
                          {...registerEmployer("StateId", {
                            required: "Required",
                          })}
                        >
                          <option value="">Select State</option>
                          {employerStates.map((data, index) => (
                            <option key={index} value={data.stateId}>
                              {data.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <p className="error-msg">
                        {employerErrors.StateId?.message}
                      </p>
                    </div>

                    {/* EMPLOYER CITY */}
                    <div className="col-lg-6 col-md-6">
                      <label>City</label>
                      <div className="input-area">
                        <select
                          className="form-control"
                          disabled={employerCities.length === 0}
                          style={{
                            paddingBottom: "15px",
                            paddingTop: "15px",
                          }}
                          {...registerEmployer("CityId", {
                            required: "Required",
                          })}
                        >
                          <option value="">Select City</option>
                          {employerCities.map((data, index) => (
                            <option key={index} value={data.cityId}>
                              {data.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <p className="error-msg">
                        {employerErrors.CityId?.message}
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>VAT Registration Number</label>
                      <div className="input-area">
                        <input
                          type="text"
                          placeholder="VAT Registration Number"
                          {...registerEmployer("VAT", {
                            required: "Required",
                          })}
                        />
                      </div>
                      <p className="error-msg">{employerErrors.VAT?.message}</p>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Postal Code</label>
                      <div className="input-area">
                        <input
                          type="text"
                          placeholder="Postal Code"
                          {...registerEmployer("PostCode", {
                            required: "Required",
                          })}
                        />
                      </div>
                      <p className="error-msg">
                        {employerErrors.PostCode?.message}
                      </p>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <label>Official Address</label>
                      <div className="input-area">
                        <textarea
                          placeholder="Official Address"
                          {...registerEmployer("Address", {
                            required: "Required",
                          })}
                        ></textarea>
                      </div>
                      <p className="error-msg">
                        {employerErrors.Address?.message}
                      </p>
                    </div>

                    <h5>Responsibility Officer Details</h5>

                    <div className="col-lg-6 col-md-6">
                      <label>First Name</label>
                      <div className="input-area">
                        <input
                          type="text"
                          placeholder="First Name"
                          {...registerEmployer("FirstName", {
                            required: "Required",
                          })}
                        />
                      </div>
                      <p className="error-msg">
                        {employerErrors.FirstName?.message}
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Last Name</label>
                      <div className="input-area">
                        <input
                          type="text"
                          placeholder="Last Name"
                          {...registerEmployer("LastName", {
                            required: "Required",
                          })}
                        />
                      </div>
                      <p className="error-msg">
                        {employerErrors.LastName?.message}
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Email Address</label>
                      <div className="input-area">
                        <input
                          type="text"
                          placeholder="Email Address"
                          {...registerEmployer("Email", {
                            required: "Required",
                          })}
                        />
                      </div>
                      <p className="error-msg">
                        {employerErrors.Email?.message}
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Mobile Number</label>
                      <div className="input-area">
                        <input
                          type="text"
                          placeholder="Mobile Number"
                          {...registerEmployer("Phone", {
                            required: "Required",
                          })}
                        />
                      </div>
                      <p className="error-msg">
                        {employerErrors.Phone?.message}
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <label>Gender</label>
                      <div className="input-area">
                        <select
                          className="form-control"
                          style={{
                            paddingBottom: "15px",
                            paddingTop: "15px",
                          }}
                          {...registerEmployer("Gender", {
                            required: "Required",
                          })}
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                      <p className="error-msg">
                        {employerErrors.Gender?.message}
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <label>Date Of Birth</label>
                      <div className="input-area">
                        <input
                          type="date"
                          placeholder="Date Of Birth"
                          {...registerEmployer("DateOfBirth", {
                            required: "Required",
                          })}
                        />
                      </div>
                      <p className="error-msg">
                        {employerErrors.DateOfBirth?.message}
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Position</label>
                      <div className="input-area">
                        <input
                          type="text"
                          placeholder="Position"
                          {...registerEmployer("Position", {
                            required: "Required",
                          })}
                        />
                      </div>
                      <p className="error-msg">
                        {employerErrors.Position?.message}
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <label>Profile Photo</label>
                      <div className="input-area">
                        <input
                          type="file"
                          placeholder="Profile Photo"
                          className="form-control"
                          {...registerEmployer("ProfilePhoto", {
                            required: "Required",
                          })}
                        />
                      </div>
                      <p className="error-msg">
                        {employerErrors.ProfilePhoto?.message}
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Password</label>
                      <div className="input-area">
                        <input
                          type="password"
                          placeholder="Password"
                          {...registerEmployer("Password", {
                            required: "Required",
                          })}
                        />
                      </div>
                      <p className="error-msg">
                        {employerErrors.Password?.message}
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Confirm Password</label>
                      <div className="input-area">
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          {...registerEmployer("ConfirmPassword", {
                            required: "Confirm your password",
                            validate: (value) =>
                              value === employerPassword ||
                              "Passwords do not match",
                          })}
                        />
                      </div>
                      <p className="error-msg">
                        {employerErrors.ConfirmPassword?.message}
                      </p>
                    </div>

                    <div
                      className="col-lg-12 col-md-12 checkbox-div"
                      style={{ marginTop: "10px" }}
                    >
                      <input
                        type="checkbox"
                        id="declaration"
                        {...registerEmployer("Declaration", {
                          required: "Required",
                        })}
                      />
                      <label htmlFor="declaration">
                        I hereby confirm that I have the authority to sign up on
                        behalf of this company.
                      </label>
                    </div>

                    <div className="col-lg-12 col-md-12 checkbox-div">
                      <input
                        type="checkbox"
                        id="terms-and-condition"
                        {...registerEmployer("Terms", {
                          required: "Required",
                        })}
                      />
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
                        <NavLink
                          to="/login"
                          style={{ color: "var(--ztc-bg-bg-6)" }}
                        >
                          Login
                        </NavLink>
                      </p>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="input-area">
                        <button type="submit" className="vl-btn1 w-100">
                          <div className="dots hidden" id="query-loader">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                          </div>
                          <span id="query-text">
                            Next <i className="fa-solid fa-arrow-right"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rest of your employer stages (2, 3, 4) remain the same */}
      {registerType === "employer" && registerStage.employer === 2 && (
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
                                            Great for small clinics starting to
                                            hire.
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
                                            Ideal for growing healthcare teams.
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
                                            Great for small clinics starting to
                                            hire.
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
                                            Ideal for growing healthcare teams.
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
      )}

      {registerType === "employer" && registerStage.employer === 3 && (
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
                    Please download and review the service agreement carefully.
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
      )}

      {registerType === "employer" && registerStage.employer === 4 && (
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
                            e.target.value as "card" | "paypal" | "transfer",
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
                      <h5 style={{ marginBottom: "10px" }}>Account Details</h5>

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
      )}
    </>
  );
}

export default RegisterUser;
