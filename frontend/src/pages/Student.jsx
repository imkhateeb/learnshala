import { Route, Routes } from "react-router-dom";
import EnrolledCourses from "../components/student/EnrolledCourses";

const RootStudent = () => {};

const Student = () => {
  const userRole = localStorage.getItem("userRole");
  if (userRole !== "student") {
    window.location.href = "/";
  }

  return (
    <Routes>
      <Route path="/" element={<RootStudent />} />
      <Route path="/enrolled" element={<EnrolledCourses />} />
    </Routes>
  );
};

export default Student;
