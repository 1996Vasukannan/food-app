import Header from "../components/header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import routeConfigurations from "./RoutConfigurations";
import { useEffect } from "react";

const InitialLayout = () => {
  const navigate = useNavigate();
  const refresh = () => {
    navigate(routeConfigurations.menuLists);
  };
  useEffect(() => {
    refresh();
    return () => {};
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default InitialLayout;
