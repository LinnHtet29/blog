import CusNavbar from "../components/CusNavbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function NormalLayout() {
  return (
    <>
      <CusNavbar />
      <Outlet />
      <Footer />
    </>
  );
}
