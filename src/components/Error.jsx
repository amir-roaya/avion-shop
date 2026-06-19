import { useNavigate, useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <h3>An error occurred 👇</h3>
      <p>{error.message}</p>
      <br />

      <button onClick={() => navigate("/")}>Go to home</button>
    </div>
  );
};

export default Error;
