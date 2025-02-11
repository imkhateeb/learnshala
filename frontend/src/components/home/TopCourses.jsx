import { useSelector } from "react-redux";
import Like from "../courses/Like";
import Enrolled from "../courses/Enrolled";
import { Star } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const TopCourses = () => {
  const { topCourses, topCoursesLoading } = useSelector(
    (state) => state.courses
  );

  console.log(topCourses);

  return (
    <div
      id="top-courses"
      className="w-[90%] max-md:w-[95%] mx-auto flex flex-col overflow-hidden my-16"
    >
      <h1 className="heading mx-auto">Top Courses.</h1>
      <div
        className="flex justify-start w-full overflow-x-auto scrollbar-hide py-4 px-12 gap-8 animate-slight-up"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {topCoursesLoading
          ? [1, 2, 3, 4, 5].map((item, idx) => (
              <div
                key={item + idx}
                className="flex-shrink-0 w-[310px] h-[350px] bg-primary/50 rounded-3xl"
              >
                <div className="flex flex-col items-center justify-between gap-4 w-full h-full p-5">
                  <div>
                    <div className="w-[100px] h-[100px] bg-gray-300 rounded-full animate-pulse" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="w-[200px] h-[20px] bg-gray-300 rounded-full animate-pulse" />
                    <p className="w-[150px] h-[20px] bg-gray-300 rounded-full animate-pulse" />
                    <p className="w-[250px] h-[20px] bg-gray-300 rounded-full animate-pulse" />
                  </div>
                  <div className="w-[90%] h-[50px] rounded-3xl animate-pulse bg-gray-300" />
                </div>
              </div>
            ))
          : topCourses?.map((course) => {
              return (
                <div
                  key={course?._id}
                  className="flex-shrink-0 w-[310px] h-[350px] bg-primary rounded-3xl"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="flex flex-col items-center justify-between gap-3 w-full h-full p-5">
                    <div>
                      {course?.thumbnail ? (
                        <img
                          src={course.thumbnail}
                          alt="Course Thumbnail"
                          className="w-[100px] h-[100px] rounded-full"
                        />
                      ) : (
                        <div className="w-[100px] h-[100px] bg-gray-300 rounded-full" />
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="font-bold text-xl text-white">
                        {course?.name}
                      </div>
                      <div className="flex items-center gap-5 text-white">
                        <Like course={course} />
                        <Enrolled enrolledStudents={course?.enrolledStudents} />
                      </div>
                      <div className="flex items-center gap-5 text-white">
                        <div className="flex gap-1 items-center">
                          <Star
                            size={18}
                            weight="fill"
                            className="text-yellow-400"
                          />
                          {course?.reviews?.length || 0}
                        </div>
                        <p>
                          {course?.syllabus?.length
                            ? `${course?.syllabus?.length} Week${
                                course?.syllabus?.length > 1 && "s"
                              }`
                            : `Syllabus not added.`}
                        </p>
                      </div>
                    </div>
                    <Link
                      to={`/courses/${course._id}`}
                      className="w-full h-[50px] bg-primary rounded-full flex items-center justify-center text-white border-[2px] border-white hover:bg-white hover:text-tertiary transition-all duration-300 ease-in-out font-bold"
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default TopCourses;
