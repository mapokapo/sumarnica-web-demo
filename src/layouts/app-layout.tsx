import { useUser } from "@/lib/context/user-context";
import { Navigate, Outlet } from "react-router";

const AppLayout: React.FC = () => {
  const { user } = useUser();

  if (user === null) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default AppLayout;
