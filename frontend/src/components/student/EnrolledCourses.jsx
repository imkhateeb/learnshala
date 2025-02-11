import { useDispatch, useSelector } from "react-redux";
import { Funnel } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import EnrolledCourseCard from "./EnrolledCard";
import { getEnrolledCourses } from "../../redux/reducers/getEnrolledCourses";

const EnrolledCourses = () => {
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const { enrolledCourses, enrolledLoading } = useSelector(
    (state) => state.enrollments
  );
  const [filteredCourses, setFilteredCourses] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEnrolledCourses());
  }, []);

  const filterWithCourseNameOrInstructor = (value) => {
    const filteredCourses = enrolledCourses?.filter((course) => {
      const courseName = course?.course?.name?.toLowerCase();
      const instructorName = course?.course?.instructor?.name?.toLowerCase();
      return (
        courseName.includes(value.toLowerCase()) ||
        instructorName.includes(value.toLowerCase())
      );
    });
    setFilteredCourses(filteredCourses);
  };

  useEffect(() => {
    setFilteredCourses(enrolledCourses);
  }, [enrolledCourses]);

  return (
    <div className="bg-primary rounded-[50px] min-h-[85vh] flex flex-col w-[90%] max-md:w-[95%] mx-auto p-20 max-lg:p-10 max-sm:p-5 max-md:p-8 gap-5">
      <div>
        {enrolledLoading ? (
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
        {enrolledLoading
          ? [1, 2, 3, 4].map((item, idx) => (
              <div
                key={item + idx}
                className="flex gap-4 w-full max-sm:flex-col"
              >
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
          : filteredCourses?.map((enrollment) => (
              <EnrolledCourseCard
                key={enrollment?._id}
                course={enrollment?.course}
                completed={enrollment?.completed}
                progress={enrollment?.progress}
              />
            ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;
