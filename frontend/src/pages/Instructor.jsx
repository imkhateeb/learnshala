import { Route, Routes } from "react-router-dom";
import InstructorCourses from "../components/instructor/InstructorCourses";

const RootInstructor = () => {};

const Instructor = () => {
  const userRole = localStorage.getItem("userRole");
  if (userRole !== "instructor") {
    window.location.href = "/";
  }

  return (
    <Routes>
      <Route path="/" element={<RootInstructor />} />
      <Route path="/courses" element={<InstructorCourses />} />
    </Routes>
  );
};

export default Instructor;
