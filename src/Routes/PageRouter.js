import React from "react";
import Details from "../Components/Details";
import App from "../Components/App";
import { Router } from "@reach/router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const PageRouter = () => (
  <div className="main__container">
    <Navbar />
    <Router>
      <App path="/" />
      <Details path="/details/:id" />
    </Router>
    <Footer />
  </div>
);

export default PageRouter;
