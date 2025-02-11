import {
  Books,
  GraduationCap,
  House,
  PlusCircle,
  SignOut,
  User,
  Video,
  X,
} from "@phosphor-icons/react";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ConfirmLogout from "../courses/popups/ConfirmLogout";

const userToken = localStorage.getItem("userToken");
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
const userRole = localStorage.getItem("userRole");

const Navbar = () => {
  const [showSiderbar, setshowSiderbar] = useState(false);
  const sidebarRef = useRef(null);
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);
  const [logoutPopup, setlogoutPopup] = useState(false);

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <>
      {logoutPopup && <ConfirmLogout onClose={() => setlogoutPopup(false)} />}
      <div
        className={`w-[90%] max-md:w-[95%] mx-auto py-5 flex justify-between items-center  ${
          logoutPopup ? "filter blur-sm" : ""
        }`}
      >
        <Link to="/" className="text-2xl font-bold md:text-3xl">
          LearnShala.
        </Link>

        <div>
          {!userToken ? (
            <Link
              to="/auth/signin"
              className="py-2 px-8 border-[2px] border-tertiary text-tertiary hover:bg-primary hover:text-primary rounded-full text-xl font-bold flex items-center justify-center transition-all duration-300"
            >
              Login
            </Link>
          ) : (
            <div className="relative">
              {/* Show DP for bigger screen */}
              <div
                ref={sidebarRef}
                className={`${
                  showSiderbar ? "block" : "hidden"
                } absolute top-10 right-0 bg-white w-[250px] h-[88vh] shadow-lg p-4 rounded-3xl animate-slight-up z-50 border`}
              >
                <div className="w-full h-full flex flex-col justify-between">
                  <div
                    onClick={() => setshowSiderbar(!showSiderbar)}
                    className="flex flex-col"
                  >
                    <div className="p-2 rounded-full hover:bg-gray-100 w-[40px] h-[40px] flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out">
                      <X size={20} weight="bold" />
                    </div>
                    <div className="flex flex-col">
                      {navigations.map((item) =>
                        item.id !== 3 ? (
                          <Link
                            to={item.url}
                            key={item.id + item.title}
                            onClick={() => setshowSiderbar(!showSiderbar)}
                            className="flex flex-col items-center p-1.5"
                          >
                            {pathname === item.url
                              ? item.activeIcon
                              : item.icon}
                            <p
                              className={`text-xs font-semibold ${
                                pathname === item.url
                                  ? "text-black"
                                  : "text-gray-400"
                              }`}
                            >
                              {item.title}
                            </p>
                          </Link>
                        ) : (
                          <Link
                            to={item[userRole].url}
                            key={item[userRole].id + item[userRole].title}
                            onClick={() => setshowSiderbar(!showSiderbar)}
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
                      )}
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setlogoutPopup(true);
                      setshowSiderbar(false);
                    }}
                    className="flex gap-1 items-center cursor-pointer"
                  >
                    <SignOut
                      size={20}
                      weight="bold"
                      className="text-gray-500"
                    />
                    <p className="font-bold text-gray-500">Logout</p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  onClick={() => setshowSiderbar(!showSiderbar)}
                  className="flex items-center gap-1 border-[1px] border-gray-300 rounded-full pr-5 cursor-pointer"
                >
                  {user?.photo ? (
                    <img
                      src={user?.photo}
                      alt="user"
                      className="w-[40px] h-[40px] rounded-full object-cover border"
                    />
                  ) : (
                    <div className="w-[40px] h-[40px] bg-gray-400 rounded-full" />
                  )}
                  <div className="h-full flex flex-col leading-5 justify-between">
                    <p className="font-semibold">{user?.name?.split(" ")[0]}</p>
                    <p className="text-xs text-gray-500">
                      {`${user?.role[0]?.toUpperCase()}${user?.role?.slice(1)}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
