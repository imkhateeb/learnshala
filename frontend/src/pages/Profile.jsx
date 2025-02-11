import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="bg-primary text-white rounded-[50px] min-h-[85vh] flex flex-col w-[90%] max-md:w-[95%] mx-auto p-20 max-lg:p-10 max-sm:p-5 max-md:p-8 gap-5">
      {user ? (
        <>
          <h2 className="text-2xl font-bold">Your Profile</h2>
          <div className="flex flex-col gap-4">
            <div>
              {user?.photo ? (
                <div></div>
              ) : (
                <div className="relative flex items-center justify-center">
                  <div className="w-[150px] h-[150px] bg-gray-300 rounded-full flex items-center justify-center text-3xl font-bold" />
                  <p className="absolute bottom-0 mx-auto bg-primary border-[1px] border-white px-4 rounded-full text-xs text-gray-300">
                    {user?.role}
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-gray-300">Name</p>
              <p className="text-xl font-bold">{user?.name}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-gray-300">Email</p>
              <p className="text-xl font-bold">{user?.email}</p>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-[70vh] flex items-center justify-center">
          <p className="text-xl font-bold text-gray-400">
            Login to see your profile
          </p>
        </div>
      )}
    </div>
  );
};

export default Profile;
