import { Route, Routes } from "react-router-dom";
import AddCourse from "../components/admin/AddCourse";

const RootAdmin = () => {};

const Admin = () => {
  const userRole = localStorage.getItem("userRole");
  if (userRole !== "admin") {
    window.location.href = "/";
  }
  return (
    <Routes>
      <Route path="/" element={<RootAdmin />} />
      <Route path="/add-course" element={<AddCourse />} />
    </Routes>
  );
};

export default Admin;
