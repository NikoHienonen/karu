import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";

export const RouteWrapper = () => (
  <>
    <Header />
    <div className="">
      <Outlet />
    </div>
  </>
);
