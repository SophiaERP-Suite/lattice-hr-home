import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link, NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import hero7 from "../../assets/main/img/all-images/bg/hero-bg7.png";
import hero11 from "../../assets/main/img/all-images/hero/hero-img11.webp";
// import OTPVerification from "../components/OTPVerification";
// import { verifyOTP, sendOTP } from "../api/AuthApi";
// import { verifyCandidateOTP } from "../api/CandidateApi";
// import { verifyEmployerOTP } from "../api/EmployerApi";

const EmailVerificatio = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get email from location state or query params
  const [email, setEmail] = useState<string>("");
  const [userType, setUserType] = useState<"candidate" | "employer">(
    "candidate",
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [verificationData, setVerificationData] = useState<any>(null);

  useEffect(() => {
    const state = location.state as {
      email: string;
      userType: "candidate" | "employer";
      data?: any;
    };

    if (state?.email) {
      setEmail(state.email);
      setUserType(state.userType || "candidate");
      if (state.data) {
        setVerificationData(state.data);
      }
    } else {
      const params = new URLSearchParams(location.search);
      const emailFromParams = params.get("email");
      const typeFromParams = params.get("type");

      if (emailFromParams) {
        setEmail(emailFromParams);
        setUserType(
          (typeFromParams as "candidate" | "employer") || "candidate",
        );
      } else {
        toast.error("No email provided for verification");
        // setTimeout(() => navigate("/register"), 2000);
      }
    }
  }, [location, navigate]);

  const handleVerifyOTP = async (otp: string) => {
    setIsLoading(true);
    try {
      toast.info("Verifying your code...");

      // First verify the OTP
      // const otpVerification = await verifyOTP(email, otp);

      // if (!otpVerification.success) {
      //   throw new Error("Invalid verification code");
      // }

      // Then verify with specific user type API
      let userVerification;
      if (userType === "candidate") {
        // userVerification = await verifyCandidateOTP(email, otp);
      } else {
        // userVerification = await verifyEmployerOTP(email, otp);
      }

      // if (userVerification.success) {
      //   toast.success("Account verified successfully!");
      //   setIsVerified(true);

      //   // Store verification in localStorage
      //   localStorage.setItem(`${userType}_verified`, "true");
      //   localStorage.setItem(`${userType}_email`, email);

      //   // Redirect after 2 seconds
      //   setTimeout(() => {
      //     navigate("/login", {
      //       state: {
      //         message: "Account verified successfully! Please login.",
      //         email: email,
      //       },
      //     });
      //   }, 2000);
      // } else {
      //   throw new Error("Verification failed");
      // }
    } catch (error: any) {
      console.error("Verification failed:", error);
      toast.error(error.message || "Verification failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    try {
      // await sendOTP(email, "registration");
      toast.success("New verification code sent to your email!");
    } catch (error) {
      console.error("Failed to resend OTP:", error);
      toast.error("Failed to resend code. Please try again.");
    }
  };

  return (
    <div className="verification-page">
      {/* Hero Section */}
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

      {/* Verification Content */}
      <div className="contact-inner-area sp1 p-5 mt-3 mb-3">
        <div className="container">
          <div className="row align-items-center g-5 register-form">
            <div className="col-lg-8 col-md-10">
              {isVerified ? (
                <div className="verification-success">
                  <div className="success-icon">
                    <i className="fa-solid fa-check-circle"></i>
                  </div>
                  <h2>Email Verified Successfully!</h2>
                  <p>
                    Your email <strong>{email}</strong> has been verified. You
                    can now login to your account.
                  </p>
                  <div className="success-actions">
                    <Link to="/login" className="vl-btn1">
                      <i className="fa-solid fa-sign-in-alt"></i> Login Now
                    </Link>
                    <Link to="/" className="vl-btn3">
                      <i className="fa-solid fa-home"></i> Back to Home
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="verification-container">
                  <div className="verification-header">
                    <h2>Enter Verification Code</h2>
                    <p className="email-display">
                      Code sent to:{" "}
                      <span className="email-highlight">{email}</span>
                    </p>
                    <p className="verification-instruction">
                      Please enter the 6-digit verification code that was sent
                      to your email address. The code will expire in 10 minutes.
                    </p>
                  </div>

                  {/* <OTPVerification
                    email={email}
                    onVerify={handleVerifyOTP}
                    onResendCode={handleResendOTP}
                    isLoading={isLoading}
                  /> */}

                  <div className="verification-footer">
                    <p>
                      Didn't receive the code?{" "}
                      <span
                        className="resend-link"
                        onClick={handleResendOTP}
                        style={{
                          cursor: "pointer",
                          color: "#2196F3",
                          fontWeight: "600",
                        }}
                      >
                        Resend Code
                      </span>
                    </p>
                    <p className="need-help">
                      Need help?{" "}
                      <Link to="/contact" style={{ color: "#2196F3" }}>
                        Contact Support
                      </Link>
                    </p>
                  </div>

                  <div className="back-to-register">
                    <Link to="/register" className="back-link">
                      <i className="fa-solid fa-arrow-left"></i> Back to
                      Registration
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificatio;
