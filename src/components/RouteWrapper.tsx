import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Footer";
import ScrollToTop from "./ScrollToTop";

export const RouteWrapper = () => (
  <>
    <Header />
    <div className="">
      <Outlet />
    </div>
    <Footer />
    <ScrollToTop />
  </>
);
