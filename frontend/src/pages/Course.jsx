import { Route, Routes } from "react-router-dom";
import { CourseDetail, Courses } from "../components/courses";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCourses } from "../redux/reducers/getCourses";

const Course = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/:courseId" element={<CourseDetail />} />
        <Route path="/enrolled" element={<CourseDetail />} />
      </Routes>
    </>
  );
};

export default Course;
