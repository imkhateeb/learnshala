import { Link } from "react-router-dom";
import Like from "./Like";
import Enrolled from "./Enrolled";

const CourseCard = ({ course }) => {
  return (
    <div className="flex gap-4 w-full max-sm:flex-col">
      <div>
        {course?.thumbnail ? (
          <div className="w-[180px] h-[180px] bg-gray-100 rounded-lg max-sm:mx-auto" />
        ) : (
          <div className="w-[180px] h-[180px] bg-gray-100 rounded-lg max-sm:mx-auto" />
        )}
      </div>
      <div className="flex flex-col max-sm:gap-3 gap-0.5">
        <div className="font-bold text-xs text-gray-400">
          {course.duration + " Hours"}
        </div>
        <div className="font-bold text-2xl max-md:text-xl text-white">
          {course?.name}
        </div>
        <div className="text-gray-300">
          {course?.description?.length > 80
            ? course?.description?.slice(0, 80) + "..."
            : course?.description}
        </div>
        <div className="flex items-center gap-5 text-white">
          <Like course={course} />
          <Enrolled enrolledStudents={course?.enrolledStudents} />
        </div>
        <div className="h-full flex flex-col justify-between">
          <div />
          <div className="flex gap-3 items-center max-sm:flex-col">
            <Link
              to={`/courses/${course._id}`}
              className="w-[150px] max-sm:w-full h-[50px] bg-primary rounded-full flex items-center justify-center text-white border-[2px] border-white hover:bg-white hover:text-tertiary transition-all duration-300 ease-in-out font-bold"
            >
              View Course
            </Link>

            {/* <button
              type="button"
              className="w-[150px] max-sm:w-full h-[50px] hover:bg-primary rounded-full flex items-center justify-center hover:text-white border-[2px] border-white bg-white text-tertiary transition-all duration-300 ease-in-out font-bold"
            >
              Enroll Now
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
