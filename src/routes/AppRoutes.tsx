import React from "react";
import { Routes, Route } from "react-router-dom";
import InitialLayout from "./InitialLayout";
import routeConfigurations from "./RoutConfigurations";
const Menu = React.lazy(() => import("../pages/menu-lists/Menu"));
const MenuDetails = React.lazy(
  () => import("../pages/menu-lists/menu-detail/MenuDetails")
);
const CheckOut = React.lazy(() => import("../pages/check-out/CheckOut"));
const OrderConfirmation = React.lazy(
  () => import("../pages/order-confirmed/OrderConfirmation")
);

const AppRoutes = () => {
  let routes = (
    <Route element={<InitialLayout />}>
      <Route index element={<Menu />} />
      <Route path={routeConfigurations.menuLists} element={<Menu />} />
      <Route path={routeConfigurations.menuDetail} element={<MenuDetails />} />
      <Route path={routeConfigurations.checkOut} element={<CheckOut />} />
      <Route
        path={routeConfigurations.orderConfirmed}
        element={<OrderConfirmation />}
      />
    </Route>
  );

  return <Routes>{routes}</Routes>;
};

export default AppRoutes;
