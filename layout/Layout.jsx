import { Outlet } from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';

export const Layout = ({ children }) => {
  try {
    return (
      <>
        <Nav configData={[]} />
        {children}
        <Outlet />
        <Footer configData={[]} />
      </>
    );
  } catch (errorException) {
    return (<div></div>);
  };
};
