import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/main/Home";
import About from "../pages/main/About";
import Contact from "../pages/main/Contact";
import Jobs from "../pages/main/Jobs";
import JobDetails from "../pages/main/JobDetails";
import Employers from "../pages/main/Employers";
import EmployerProfile from "../pages/main//EmployerProfile";
import Candidates from "../pages/main/Candidates";
import Pricing from "../pages/main/Pricing";
import Login from "../pages/main/Login";
import Profile from "../pages/main/Profile";
import EmailVerification from "../pages/main/EmailVerification";
import SelectPackage from "../pages/main/Packages";
import PackageDetailsView from "../pages/main/PackageDetails";
import PaymentRedirect from "../pages/main/PaymentRedirect";
import { RequireLogin } from "../utils/Auth/RequireLogin";
import RegisterUser from "../pages/main/Register";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="job-details" element={<JobDetails />} />
        <Route path="employers" element={<Employers />} />
        <Route path="employer-profile" element={<EmployerProfile />} />
        <Route path="candidates" element={<Candidates />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="PaymentRedirect/:tx_ref" element={<PaymentRedirect />} />
        <Route path="package/:id" element={<RequireLogin><SelectPackage /></RequireLogin>} />
        <Route path="package/:id/:packageId" element={<RequireLogin><PackageDetailsView /></RequireLogin>} />
        <Route path="login" element={<Login />} />
        <Route path="emailVerification" element={<EmailVerification />} />
        <Route path="register" element={<RegisterUser />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
