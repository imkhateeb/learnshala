import {
  Books,
  GraduationCap,
  House,
  PlusCircle,
  User,
  Video,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const BottomBar = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);
  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);
  const userRole = localStorage.getItem("userRole");

  const navigations = [
    {
      id: 1,
      title: "Home",
      url: "/",
      icon: <House size={28} weight="bold" />,
      activeIcon: <House size={28} weight="fill" />,
    },
    {
      id: 2,
      title: "Courses",
      url: "/courses",
      icon: <Video size={28} weight="bold" />,
      activeIcon: <Video size={28} weight="fill" />,
    },
    {
      id: 3,
      student: {
        title: "Enrolled",
        url: "/student/enrolled",
        icon: <GraduationCap size={28} weight="bold" />,
        activeIcon: <GraduationCap size={28} weight="fill" />,
      },
      admin: {
        title: "Add Course",
        url: "/admin/add-course",
        icon: <PlusCircle size={28} weight="bold" />,
        activeIcon: <PlusCircle size={28} weight="fill" />,
      },
      instructor: {
        title: "Your Courses",
        url: "/instructor/courses",
        icon: <Books size={28} weight="bold" />,
        activeIcon: <Books size={28} weight="fill" />,
      },
    },
    {
      id: 4,
      title: "Profile",
      url: "/profile",
      icon: <User size={28} weight="bold" />,
      activeIcon: <User size={28} weight="fill" />,
    },
  ];
  return (
    <div className="w-full h-full flex justify-evenly items-center">
      {navigations.map((item) =>
        item.id !== 3 ? (
          <Link
            to={item.url}
            key={item.id + item.title}
            className="flex flex-col items-center p-1.5"
          >
            {pathname === item.url ? item.activeIcon : item.icon}
            <p
              className={`text-xs font-semibold ${
                pathname === item.url ? "text-black" : "text-gray-400"
              }`}
            >
              {item.title}
            </p>
          </Link>
        ) : (
          (userRole === "student" ||
            userRole === "instructor" ||
            userRole === "admin") && (
            <Link
              to={item[userRole].url}
              key={item[userRole].id + item[userRole].title}
              className="flex flex-col items-center p-1.5"
            >
              {pathname === item[userRole].url
                ? item[userRole].activeIcon
                : item[userRole].icon}
              <p
                className={`text-xs font-semibold ${
                  pathname === item[userRole].url
                    ? "text-black"
                    : "text-gray-400"
                }`}
              >
                {item[userRole].title}
              </p>
            </Link>
          )
        )
      )}
    </div>
  );
};

export default BottomBar;
