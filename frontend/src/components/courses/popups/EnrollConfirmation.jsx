import axios from "axios";
import { apiUrl } from "../../../config";
import { useState } from "react";
import toast from "react-hot-toast";

const EnrollConfirmation = ({ onClose, onConfirm, courseId }) => {
  const [enrolling, setEnrolling] = useState(false);

  const handleEnroll = async () => {
    const url = `${apiUrl}/courses/${courseId}/enroll`;
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    };
    setEnrolling(true);
    try {
      const { data } = await axios.post(url, {}, config);
      if (data?.status === "success") {
        toast.success("You are enrolled into the course successfully", {
          icon: "🚀",
          position: "top-center",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        await onConfirm();
      }
    } catch (error) {
      toast.error(error?.response?.data?.error?.msg);
    } finally {
      setEnrolling(false);
      onClose();
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-3xl p-8 w-[90%] max-w-md mx-auto animate-slight-up">
        <h2 className="text-xl font-bold mb-4">Confirm Enrollment</h2>
        <p className="mb-6">Are you sure you want to enroll in this course?</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border-tertiary border-[2px] rounded-full hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
          >
            Cancel
          </button>
          <button
            onClick={handleEnroll}
            className="px-4 py-2 border-tertiary border-[2px] rounded-full bg-primary text-white transition-all duration-300 ease-in-out hover:bg-tertiary hover:text-tertiary"
          >
            {enrolling ? "Enrolling..." : "Enroll Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnrollConfirmation;
