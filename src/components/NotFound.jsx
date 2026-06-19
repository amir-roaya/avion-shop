import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <h2>404 | Page not found 😕</h2>
      <br />

      <button type="button" onClick={() => navigate("/")}>
        Go to home
      </button>
    </div>
  );
};

export default NotFound;
