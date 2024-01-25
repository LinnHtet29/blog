import CusNavbar from "../components/public/navbar/CusNavbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/public/footer/Footer";

export default function NormalLayout() {
  return (
    <>
      <CusNavbar />
      <div className="mt-5 pt-2">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
