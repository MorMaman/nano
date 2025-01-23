import "../../App.scss";
import React from "react";
import Banner from "./main-banner/Banner.js";
import Giveaway from "./giveaway/Giveaway.js";
import Computerb from "./computerb/Computerb.js";
import Roadmap from "./roadmap/Roadmap";
import Services from "./services/Services.js";

function Landing() {
  return (
    <>
      <Banner />
      <Services />
      <Giveaway />
      <Computerb />
      <Roadmap />
    </>
  );
}

export default Landing;
