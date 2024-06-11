/* eslint-disable no-unused-vars */
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { useSelector } from "react-redux";
import './LayoutDefault.scss';

function LayoutDefault() {
  const authen = useSelector((state) => state.authenReducer);

  return (
    <>
      <div className="layout-default">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default LayoutDefault;
