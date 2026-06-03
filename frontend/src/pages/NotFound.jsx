import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-50 flex-col">
      <h1 className="text-6xl">Oopss !! Page Not Found</h1>
      <Link
        to={"/"}
        className="mt-5 px-7 py-3 font-semibold bg-violet-500 hover:bg-violet-800 cursor-pointer text-white rounded-lg"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
