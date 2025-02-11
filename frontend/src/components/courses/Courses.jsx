import { useSelector } from "react-redux";
import { Funnel } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const userId = localStorage.getItem("userId");

const Courses = () => {
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const { courses, coursesLoading } = useSelector((state) => state.courses);

  const [filteredCourses, setFilteredCourses] = useState([]);

  // Handlers
  const filterUnInrolledCourses = (courses) => {
    const unInrolledCourses = courses?.filter((course) => {
      const isEnrolled = course?.enrolledStudents?.find(
        (student) => student?._id === userId
      );
      return !isEnrolled;
    });
    setFilteredCourses(unInrolledCourses);
  };

  const filterWithCourseNameOrInstructor = (value) => {
    const filteredCourses = courses?.filter((course) => {
      const courseName = course?.name?.toLowerCase();
      const instructorName = course?.instructor?.name?.toLowerCase();
      return (
        courseName.includes(value.toLowerCase()) ||
        instructorName.includes(value.toLowerCase())
      );
    });
    setFilteredCourses(filteredCourses);
    filterUnInrolledCourses(filteredCourses);
  };

  // Effcts
  useEffect(() => {
    filterUnInrolledCourses(courses);
  }, [courses]);

  return (
    <div className="bg-primary rounded-[50px] min-h-[85vh] flex flex-col w-[90%] max-md:w-[95%] mx-auto p-20 max-lg:p-10 max-sm:p-5 max-md:p-8 gap-5">
      <div>
        {coursesLoading ? (
          <div className="flex w-full items-center justify-between">
            <div className="w-[300px] max-sm:w-[250px] h-[50px] bg-gray-100 rounded-full animate-pulse" />

            <div className="w-[50px] h-[50px] bg-gray-100 rounded-full animate-pulse" />
          </div>
        ) : (
          <div className="flex w-full items-center justify-between">
            <input
              type="text"
              onChange={(e) => filterWithCourseNameOrInstructor(e.target.value)}
              placeholder="Search Here..."
              className="w-[300px] max-sm:w-[250px] h-[50px] bg-transparent rounded-full outline-none border-[2px] border-white px-5 placeholder:text-gray-400 text-white"
            />
            <div
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="w-[50px] h-[50px] border-[2px] border-white rounded-full cursor-pointer flex items-center justify-center text-white hover:bg-white hover:text-tertiary transition-all duration-300 ease-in-out"
            >
              <Funnel size={20} weight="fill" />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-12 w-full">
        {coursesLoading ? (
          [1, 2, 3, 4].map((item, idx) => (
            <div key={item + idx} className="flex gap-4 w-full max-sm:flex-col">
              <div className="w-[180px] h-[180px] bg-gray-100 rounded-lg animate-pulse max-sm:mx-auto" />
              <div className="flex flex-col gap-3">
                <div className="w-[180px] h-[20px] bg-gray-100 rounded-full animate-pulse" />
                <div className="w-[300px] h-[20px] bg-gray-100 rounded-full animate-pulse" />
                <div className="w-[50px] h-[20px] bg-gray-100 rounded-full animate-pulse" />
                <div className="w-[50px] h-[20px] bg-gray-100 rounded-full animate-pulse" />
                <div className="h-full flex flex-col justify-between">
                  <div />
                  <div className="w-[200px] max-sm:w-full h-[50px] bg-gray-100 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          ))
        ) : filteredCourses?.length ? (
          filteredCourses?.map((course) => (
            <CourseCard key={course?._id} course={course} />
          ))
        ) : (
          <div className="w-full h-[50vh] flex items-center justify-center text-white text-2xl font-semibold">
            No Courses Found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
