import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  const navigate = useNavigate();

  return (
    <div className="text-center p-12">
      <img src="/not-found.jpg" alt="Error" className="w-full h-150 object-cover" />

      <h1 className="text-4xl font-bold mt-10">404 Error Page</h1>
      <p className="text-xl mt-4">Oops! The page you are looking for does not exist.</p>
      <p className="text-lg mt-2">
        Error: {error?.status || "Unknown"} - {error?.error?.message || error?.statusText || "Unexpected Error"}
      </p>
      <p className="text-lg mt-2">Please check the URL or return to the home page.</p>

      <button className="bg-red-500 text-white p-4 hover:bg-red-600 mt-4" onClick={() => navigate(-1)}>
        Go to Home
      </button>
    </div>
  );
};
