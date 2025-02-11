import { useEffect } from "react";
import { TopCourses } from "../components/home";
import { Hero } from "../components/home";
import { useDispatch } from "react-redux";
import { getTopCourses } from "../redux/reducers/getTopCourses";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopCourses());
  }, []);
  return (
    <div className="flex flex-col gap-2 w-full">
      <Hero />
      <TopCourses />
    </div>
  );
};

export default Home;
