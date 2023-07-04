import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import Navbar from "../components/navbar/Navbar";
import { Home } from "@mui/icons-material";
import Agents from "../pages/Agents";
import Pricing from "../pages/Pricing";
import Partners from "../pages/Partners";
import AbountUs from "../pages/AbountUs";
import Blog from "../pages/Blog";
import Faq from "../pages/Faq";
import Support from "../pages/Support";
import ContactUs from "../pages/ContactUs";
import BuyAds from "../pages/BuyAds";
import PrivateRouter from "./PrivateRouter";
import Profile from "../pages/Profile";

import Header from "../components/sliderHeader/Header";
import Filter from "../components/Filter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Filter />
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="/home" element={<Home />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/abount-us" element={<AbountUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/buy-ads" element={<BuyAds />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
