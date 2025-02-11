import { Rate } from "antd";
import timeAgo from "./utils/timeAgo";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useState } from "react";
import AddReview from "./popups/AddReview";

const userToken = localStorage.getItem("userToken");
const userRole = localStorage.getItem("userRole");

const Reviews = ({ reviews, getCourse, courseId }) => {
  const [reviewPopup, setReviewPopup] = useState(false);
  const { isEnrolled, isEnrolledLoading } = useSelector(
    (state) => state.enrollments
  );

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

  const handleClosePopup = () => {
    setReviewPopup(false);
  };

  const handleAddReview = () => {
    getCourse({ firstLoad: false });
    setReviewPopup(false);
  };

  return (
    <>
      {reviewPopup && (
        <AddReview
          onClose={handleClosePopup}
          courseId={courseId}
          onConfirm={handleAddReview}
        />
      )}
      <div
        className={`w-1/2 relative max-sm:w-full bg-gray-300 bg-opacity-25 rounded-3xl max-sm:mx-auto flex flex-col gap-4 text-white p-4 pb-[40px] ${
          reviews?.length === 0 ? "h-[30vh]" : "max-h-[90vh]"
        } ${reviewPopup ? "filter blur-sm" : ""}`}
      >
        <h2 className="text-xl font-bold">Reviews({reviews?.length})</h2>
        {reviews?.length > 0 ? (
          <div className="py-5 flex flex-col max-w-[80vh] overflow-x-auto">
            {reviews?.map((item, idx) => (
              <div key={item?._id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div>
                    <div className="w-[30px] h-[30px] bg-white rounded-full text-xl font-semibold text-tertiary flex items-center justify-center">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="h-full w-[2px] bg-white bg-opacity-50" />
                </div>
                <div className="flex flex-col pb-10 gap-1">
                  <div className="flex items-center gap-2">
                    {item?.user?.photo ? (
                      <img
                        src={item?.user?.photo}
                        alt="DP"
                        className="w-[30px] h-[30px] rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-[30px] h-[30px] rounded-full bg-gray-300" />
                    )}
                    <p className="text-gray-300 font-semibold">
                      {item?.user?.name}
                    </p>
                  </div>
                  <Rate disabled defaultValue={item?.rating} />
                  <p className="text-gray-300 leading-4 pt-1 pb-2">
                    {item?.review}
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
              No Reviews Yet.
            </p>
          </div>
        )}
        {!isEnrolledLoading ? (
          <div
            onClick={() => {
              if (!userToken) {
                handleShowToast("Please Login To Add A Review");
              } else if (userRole !== "student") {
                handleShowToast("Only Student Can Add Reviews");
              } else if (!isEnrolled) {
                handleShowToast("Please Enroll To Add A Review");
              } else {
                setReviewPopup(true);
              }
            }}
            className="absolute bottom-0 left-0 w-full rounded-b-3xl bg-primary text-primary h-[40px] border flex items-center justify-center font-semibold cursor-pointer"
          >
            Add A Review
          </div>
        ) : (
          <div className="absolute bottom-0 left-0 w-full rounded-b-3xl bg-gray-100 text-primary h-[40px] border flex items-center justify-center font-semibold cursor-pointer animate-pulse" />
        )}
      </div>
    </>
  );
};

export default Reviews;
