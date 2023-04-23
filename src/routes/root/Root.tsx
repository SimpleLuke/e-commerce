import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/scroll-top/ScrollToTop";
import { checkUserSession } from "../../store/user/user.action";
import Navigation from "../navigation/Navigation";

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
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
