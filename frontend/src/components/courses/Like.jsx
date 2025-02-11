import { Heart } from "@phosphor-icons/react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { likeUnlikeCourse } from "../../redux/reducers/likeUnlikeCourse";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../config";
import { getEnrolledCourses } from "../../redux/reducers/getEnrolledCourses";

const userToken = localStorage.getItem("userToken");
const userRole = localStorage.getItem("userRole");

const Like = ({ course, isDetail, setCourse, isEnrolledCard }) => {
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();

  const handleIsLiked = () => {
    const userId = localStorage.getItem("userId");

    if (course?.likes?.length > 0) {
      const isLiked = course?.likes?.find((like) => like?._id === userId);
      if (isLiked) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    } else {
      setIsLiked(false);
    }
  };

  useEffect(() => {
    handleIsLiked(course);
  }, [course]);

  const handleLoginToast = async () => {
    toast.error("Please login to like the course", {
      position: "top-center",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const handleStudentAccessToast = async () => {
    toast.error("Only students can like the course", {
      position: "top-center",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const handleLikeUnlikeCourse = async () => {
    if (isDetail) {
      const userToken = localStorage.getItem("userToken");
      const url = `${apiUrl}/courses/${course?._id}/like-unlike`;
      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      };
      try {
        const { data } = await axios.post(url, {}, config);
        if (data?.status === "success") {
          toast.success(data?.msg, {
            icon: "🚀",
            position: "top-center",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          if (isEnrolledCard) {
            dispatch(getEnrolledCourses());
          } else {
            setCourse({ firstLoad: false });
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      dispatch(likeUnlikeCourse(course?._id));
    }
  };

  return (
    <div className="flex gap-1 items-center">
      {isLiked ? (
        <Heart
          onClick={() =>
            !userToken
              ? handleLoginToast()
              : userRole !== "student"
              ? handleStudentAccessToast()
              : handleLikeUnlikeCourse()
          }
          size={18}
          weight="fill"
          className="text-red-500 cursor-pointer"
        />
      ) : (
        <Heart
          onClick={() =>
            !userToken
              ? handleLoginToast()
              : userRole !== "student"
              ? handleStudentAccessToast()
              : handleLikeUnlikeCourse()
          }
          size={18}
          weight="bold"
          className="text-white cursor-pointer"
        />
      )}
      {course?.likes?.length || 0}
    </div>
  );
};

export default Like;
