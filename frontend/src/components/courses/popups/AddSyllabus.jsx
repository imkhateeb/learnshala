import { Rate } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import { apiUrl } from "../../../config";
import axios from "axios";

const userToken = localStorage.getItem("userToken");

const AddSyllabus = ({ onClose, onConfirm, courseId }) => {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [addingSyllabus, setAddingSyllabus] = useState(false);

  const handleAddSyllabus = async () => {
    if (!topic?.trim()) {
      toast.error("Topic is required");
      return;
    }
    if (!description?.trim()) {
      toast.error("Description is required");
      return;
    }
    if (description?.trim().length < 50) {
      toast.error("Description must be at least 50 characters long");
      return;
    }
    const url = `${apiUrl}/courses/${courseId}/add-syllabus`;
    const reviewData = {
      topic,
      description,
    };
    setAddingSyllabus(true);
    try {
      const { data } = await axios.post(url, reviewData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      if (data?.status === "success") {
        toast.success("Syllabus added successfully", {
          icon: "🚀",
          position: "top-center",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        onConfirm();
      } else {
        toast.error("Failed to add review");
      }
    } catch (error) {
      toast.error(error?.response?.data?.error?.msg);
    } finally {
      setAddingSyllabus(false);
      onClose(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white text-black rounded-3xl p-8 w-[90%] max-w-md mx-auto animate-slight-up">
        <h2 className="text-xl font-bold mb-4">Add Syllabus</h2>
        <div className="flex flex-col w-full gap-2 mb-4">
          <input
            type="text"
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter Topic..."
            className="w-[300px] w-full h-[50px] bg-transparent rounded-full outline-none border-[2px] focus:border-tertiary border-gray-400 px-5 placeholder:text-gray-400 text-tertiary transition-all duration-300 ease-in-out"
          />
          <textarea
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description..."
            className="w-[300px] w-full bg-transparent rounded-lg outline-none border-[2px] focus:border-tertiary border-gray-400 p-2 placeholder:text-gray-400 text-tertiary transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => onClose(false)}
            className="px-4 py-2 border-tertiary border-[2px] rounded-full hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
          >
            Cancel
          </button>
          <button
            onClick={handleAddSyllabus}
            className="px-4 py-2 border-tertiary border-[2px] rounded-full bg-primary text-white transition-all duration-300 ease-in-out hover:bg-tertiary hover:text-tertiary"
          >
            {addingSyllabus ? "Adding..." : "Add Syllabus"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSyllabus;
