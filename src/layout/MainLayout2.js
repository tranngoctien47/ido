import { Outlet } from "react-router-dom";
import style from "../asset/scss/style.scss";

import Loadding from "../components/Loadding";
import ShadowLayer from "../components/ShadowLayer";
import { ToastContainer } from "react-toastify";
import { Box } from "@mui/material";
import Header from "components/Header";
import Footer from "page/home/components/footer";

const home = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function MainLayout2() {
  return (
    <>
      <Header />
      <Box sx={home} className="home">
        <Outlet />
      </Box>
      <Loadding />
      <ShadowLayer />
      <ToastContainer />
      <Footer />

    </>
  );
}
