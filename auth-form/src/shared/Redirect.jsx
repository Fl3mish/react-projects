import SessionContext from "context/SessionContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = ({ children }) => {
  const { sessionToken } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionToken) {
      navigate("/plants");
    } else {
      navigate("/");
    }
  }, [sessionToken, navigate]);
  // signed in -> redirect to plantsListPage
  // else -> render children
  return children;
};
export default Redirect;
