import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const AuthRoute = ({ children }) => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return children;
};
