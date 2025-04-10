
import { useStore } from "../store/useStore";
import { Navigate, Outlet } from "react-router";

const PublicRoutes = () => {
  const { user } = useStore((state) => state);
  
  return user ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRoutes;
