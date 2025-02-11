import toast from "react-hot-toast";

const ConfirmLogout = ({ onClose }) => {
  const handleLogout = async () => {
    try {
      localStorage.clear();
      toast.success("You are logged out successfully", {
        icon: "🚀",
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-3xl p-8 w-[90%] max-w-md mx-auto animate-slight-up">
        <h2 className="text-xl font-bold mb-4">Confirm Logout</h2>
        <p className="mb-6">Are you sure, you want to logout?</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border-tertiary border-[2px] rounded-full hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 border-tertiary border-[2px] rounded-full bg-primary text-white transition-all duration-300 ease-in-out hover:bg-tertiary hover:text-tertiary"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLogout;
