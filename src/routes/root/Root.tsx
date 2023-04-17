import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/scroll-top/ScrollToTop";

import Navigation from "../navigation/Navigation";

const Root = () => {
  return (
    <>
      <Navigation />
      <ScrollToTop>
        <Outlet />
      </ScrollToTop>
    </>
  );
};

export default Root;
