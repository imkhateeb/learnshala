import { useSelector } from "react-redux";
import { useState } from "react";
import { apiUrl } from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddCourse = () => {
  const { instructors } = useSelector((state) => state.user);
  const [addingCourse, setAddingCourse] = useState(false);
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    instructor: "",
    description: "",
    enrollmentStatus: "Open",
    thumbnail: "",
    duration: "",
    courseSchedule: "",
    location: "Online",
    prerequisites: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePrerequisitesChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      prerequisites: value.split(",").map((item) => item.trim()),
    });
  };

  const userToken = localStorage.getItem("userToken");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    setAddingCourse(true);
    try {
      const { data } = await axios.post(`${apiUrl}/courses`, formData, config);
      if (data.status === "success") {
        toast.success("Course added successfully!");
        navigate("/courses");
      }
    } catch (error) {
      toast.error("Error adding course. Please try again.");
      console.log(error);
    } finally {
      setAddingCourse(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-5 bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Add a New Course</h2>

        <label className="flex flex-col gap-2">
          <span>Course Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border rounded-lg"
            required
          />
        </label>

        <label className="flex flex-col gap-2">
          <span>Instructor:</span>
          <select
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            className="p-2 border rounded-lg"
            required
          >
            <option value="">Select Instructor</option>
            {instructors.map((instructor) => (
              <option key={instructor._id} value={instructor._id}>
                {instructor.name}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span>Description:</span>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="p-2 border rounded-lg"
            rows="4"
            required
          />
        </label>

        <label className="flex flex-col gap-2">
          <span>Enrollment Status:</span>
          <select
            name="enrollmentStatus"
            value={formData.enrollmentStatus}
            onChange={handleChange}
            className="p-2 border rounded-lg"
            required
          >
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
            <option value="In Progress">In Progress</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span>Thumbnail URL:</span>
          <input
            type="url"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            className="p-2 border rounded-lg"
            required
          />
        </label>

        <label className="flex flex-col gap-2">
          <span>Duration (hours):</span>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="p-2 border rounded-lg"
            required
          />
        </label>

        <label className="flex flex-col gap-2">
          <span>Course Schedule:</span>
          <input
            type="text"
            name="courseSchedule"
            value={formData.courseSchedule}
            onChange={handleChange}
            className="p-2 border rounded-lg"
            required
          />
        </label>

        <label className="flex flex-col gap-2">
          <span>Location:</span>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="p-2 border rounded-lg"
            required
          >
            <option value="Online">Online</option>
            <option value="In-Person">In Person</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span>Prerequisites (comma-separated):</span>
          <input
            type="text"
            name="prerequisites"
            value={formData.prerequisites.join(", ")}
            onChange={handlePrerequisitesChange}
            className="p-2 border rounded-lg"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-tertiary text-tertiary p-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
        >
          {addingCourse ? "Adding Course..." : "Add Course"}
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
