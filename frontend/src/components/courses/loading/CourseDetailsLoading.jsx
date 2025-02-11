const CourseDetailsLoading = () => {
  return (
    <div className="flex flex-col w-full gap-5 text-white">
      <div className="flex max-md:flex-col gap-5 w-full">
        <div className="w-[300px] h-[300px]  rounded-3xl bg-gray-100 animate-pulse max-sm:mx-auto" />
        <div className="w-1/2 max-md:w-full flex flex-col justify-between gap-2">
          <div className="flex flex-col gap-2">
            <div className="w-[150px] h-[20px] bg-gray-100 rounded-full animate-pulse" />
            <div className="w-[250px] max-sm:w-[80%] h-[30px] bg-gray-100 rounded-full animate-pulse" />
            <div className="flex flex-col gap-1">
              <div className="w-[500px] max-md:w-full max-sm:w-full h-[20px] bg-gray-100 rounded-full animate-pulse" />
              <div className="w-[500px] max-md:w-full max-sm:w-full max-sm:w-full h-[20px] bg-gray-100 rounded-full animate-pulse" />
              <div className="md:hidden max-md:w-full max-sm:w-full max-sm:w-full h-[20px] bg-gray-100 rounded-full animate-pulse" />
              <div className="sm:hidden max-sm:w-full max-sm:w-full h-[20px] bg-gray-100 rounded-full animate-pulse" />
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[120px] h-[30px] bg-gray-100 rounded-full animate-pulse" />
              <div className="w-[120px] h-[30px] bg-gray-100 rounded-full animate-pulse" />
              <div className="w-[120px] h-[30px] bg-gray-100 rounded-full animate-pulse" />
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[120px] h-[30px] bg-gray-100 rounded-full animate-pulse" />
              <div className="w-[120px] h-[30px] bg-gray-100 rounded-full animate-pulse" />
              <div className="w-[120px] h-[30px] bg-gray-100 rounded-full animate-pulse" />
            </div>
            <div className="w-[250px] h-[20px] bg-gray-100 rounded-full animate-pulse" />
          </div>
          <div className="flex gap-3 max-sm:flex-col max-sm:gap-4">
            <div className="w-[250px] max-sm:w-full h-[60px] bg-gray-100 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
      <div className="flex w-full overflow-x-auto my-5 justify-center">
        <div className="flex gap-5">
          {[1, 2, 3, 4, 5].map((item, idx) => (
            <div
              key={item + idx}
              className="w-[200px] h-[30px] bg-gray-100 rounded-full animate-pulse"
            />
          ))}
        </div>
      </div>
      <div className="w-full flex gap-5 max-sm:flex-col">
        <div className="w-1/2 max-sm:w-full h-[100vh] bg-gray-100 rounded-3xl animate-pulse max-sm:mx-auto" />
        <div className="w-1/2 max-sm:w-full h-[100vh] bg-gray-100 rounded-3xl animate-pulse max-sm:mx-auto" />
      </div>
    </div>
  );
};

export default CourseDetailsLoading;
