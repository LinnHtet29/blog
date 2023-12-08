import CusNavbar from "../components/CusNavbar";
import { Outlet } from "react-router-dom";

export default function NavLayout() {
  return (
    <>
      <CusNavbar />
      <Outlet />
      {/* <Footer/> */}
    </>
  );
}
