import { useState } from "react";
import timeAgo from "./utils/timeAgo";
import AddSyllabus from "./popups/AddSyllabus";
import { Check } from "@phosphor-icons/react";
import toast from "react-hot-toast";
import { apiUrl } from "../../config";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getProgress } from "../../redux/reducers/getProgress";

const userRole = localStorage.getItem("userRole");
const userId = localStorage.getItem("userId");
const userToken = localStorage.getItem("userToken");

const Syllabus = ({
  syllabus,
  instructor,
  courseId,
  getCourse,
  isEnrolledCourse,
}) => {
  const [addSyllabusPopup, setAddSyllabusPopup] = useState(false);
  const dispatch = useDispatch();

  const handleAddSyllabus = () => {
    getCourse({ firstLoad: false });
    setAddSyllabusPopup(false);
  };

  const handleShowToast = (msg) => {
    toast.error(msg, {
      position: "top-center",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const markSyllabusAsComplete = async ({ syllabusId }) => {
    const url = `${apiUrl}/courses/syllabus/${syllabusId}/mark-as-completed`;
    try {
      const { data } = await axios.post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      if (data?.status === "success") {
        toast.success("Syllabus marked as completed successfully.", {
          position: "top-center",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        getCourse({ firstLoad: false });
        dispatch(getProgress(courseId));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {addSyllabusPopup && (
        <AddSyllabus
          onClose={setAddSyllabusPopup}
          courseId={courseId}
          onConfirm={handleAddSyllabus}
        />
      )}
      <div
        className={`w-1/2 relative max-sm:w-full bg-gray-300 bg-opacity-25 rounded-3xl max-sm:mx-auto flex flex-col gap-4 text-white p-4 ${
          syllabus?.length === 0 ? "h-[30vh]" : "max-h-[90vh]"
        } ${addSyllabusPopup ? "filter blur-sm" : ""}`}
      >
        <h2 className="text-xl font-bold">Syllabus</h2>
        {syllabus?.length > 0 ? (
          <div
            className={`py-5 flex flex-col max-w-[80vh] overflow-x-auto ${
              userRole === "instructor" ? "pb-[40px]" : ""
            }`}
          >
            {syllabus?.map((item, idx) => (
              <div key={item?._id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div>
                    {!item?.completed?.includes(userId) ? (
                      <div
                        onClick={() => {
                          if (!userToken) {
                            handleShowToast(
                              "Please login to mark your progress."
                            );
                            return;
                          } else if (!isEnrolledCourse) {
                            handleShowToast(
                              "Please enroll to mark your progress."
                            );
                            return;
                          } else {
                            markSyllabusAsComplete({
                              syllabusId: item?._id,
                            });
                          }
                        }}
                        className="w-[30px] h-[30px] bg-white rounded-full text-xl font-semibold text-tertiary flex items-center justify-center cursor-pointer"
                      >
                        {idx + 1}
                      </div>
                    ) : (
                      <div className="w-[30px] h-[30px] bg-green-500 rounded-full flex items-center justify-center">
                        <Check size={18} weight="bold" className="text-white" />
                      </div>
                    )}
                  </div>
                  <div
                    className={`h-full w-[2px] bg-opacity-50 ${
                      item?.completed?.includes(userId)
                        ? "bg-green-500"
                        : "bg-white"
                    }`}
                  />
                </div>
                <div className="flex flex-col pb-10">
                  <p className="text-md font-semibold text-gray-300">
                    Week {idx + 1}
                  </p>
                  <h3 className="text-xl font-semibold">{item?.topic}</h3>
                  <p className="text-gray-300 leading-4 pt-1 pb-2">
                    {item?.description}
                  </p>
                  <p className="text-xs text-gray-400">
                    {timeAgo(item?.createdAt)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center pb-4">
            <p className="px-5 text-center text-lg font-semibold text-gray-300">
              Syllabus is yet to be updated by the instructor.
            </p>
          </div>
        )}

        {userRole === "instructor" && userId === instructor?._id ? (
          <div
            onClick={() => {
              setAddSyllabusPopup(true);
            }}
            className="absolute bottom-0 left-0 w-full rounded-b-3xl bg-primary text-primary h-[40px] border flex items-center justify-center font-semibold cursor-pointer"
          >
            Add Syllabus
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Syllabus;
