import { useState } from "react";
import { apiUrl } from "../../../config";
import toast from "react-hot-toast";
import axios from "axios";

const MarkAsCompleted = ({ onClose, onConfirm, courseId }) => {
  const [completingCourse, setCompletingCourse] = useState(false);
  const handleMarkAsComplete = async () => {
    const url = `${apiUrl}/courses/${courseId}/mark-as-completed`;
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    };
    setCompletingCourse(true);
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
      setCompletingCourse(false);
      onClose();
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-3xl p-8 w-[90%] max-w-md mx-auto animate-slight-up">
        <h2 className="text-xl font-bold mb-4">Mark As Complete.</h2>
        <p className="mb-6">Are you sure, you are completing this course?</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border-tertiary border-[2px] rounded-full hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
          >
            Cancel
          </button>
          <button
            onClick={handleMarkAsComplete}
            className="px-4 py-2 border-tertiary border-[2px] rounded-full bg-primary text-white transition-all duration-300 ease-in-out hover:bg-tertiary hover:text-tertiary"
          >
            {completingCourse ? "Completing..." : "Mark As Complete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarkAsCompleted;
