import { Navigate, Outlet } from "react-router";
const PrivateRouter = () => {
    const  currentUser = true

  return currentUser ? <Outlet /> : <Navigate to="/home" />;
};

export default PrivateRouter;
