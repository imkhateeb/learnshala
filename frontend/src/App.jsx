import { Route, Routes } from "react-router-dom";
import {
  Home,
  Course,
  Auth,
  Student,
  Instructor,
  Admin,
  NotFound,
} from "./pages";
import Navbar from "./components/utility/Navbar";
import { Toaster } from "react-hot-toast";
import { BottomBar } from "./components/navigation";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCourses } from "./redux/reducers/getCourses";
import { fetchUser } from "./redux/reducers/getUser";
import Profile from "./pages/Profile";
import { getEnrolledCourses } from "./redux/reducers/getEnrolledCourses";
import { getInstructors } from "./redux/reducers/getInstructors";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses());
    dispatch(fetchUser());
    dispatch(getEnrolledCourses());
    dispatch(getInstructors());
  }, []);

  return (
    <div className="bg-secondary w-full max-sm:pb-[80px]">
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/*" element={<Course />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/student/*" element={<Student />} />
        <Route path="/instructor/*" element={<Instructor />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="fixed bottom-0 w-full sm:hidden h-[70px] rounded-t-[50px] bg-tertiary border-t-[2px] border-tertiary shadow-xl">
        <BottomBar />
      </div>
    </div>
  );
};

export default App;
