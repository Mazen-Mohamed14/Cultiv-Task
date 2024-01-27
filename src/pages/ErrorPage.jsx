import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error">
      <h1>Error 404</h1>
      <h2>The page you are looking for might be expired or not found</h2>
      <Link to="/" className="error-link">
        Back to home page
      </Link>
    </div>
  );
};

export default ErrorPage;
