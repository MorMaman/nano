import React, { useEffect } from "react";
import "./banner.scss";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
// import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../header/Navbar";
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg-imgonly">
        <Navbar />

        <section className="main-banner ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-11 col-lg-12 col-12  m-auto padd-sm">
                <div className="row">
                  <div className="col-xl-6 col-12 p-0">
                    <div
                      className="inner-content main-heading  "
                      data-aos="fade-right"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                    >
                      {/* <p className="pprotocol">
                      Welcome to the HYDT Protocol
                    </p> */}
                      <h2 className="parafirstcc ">
                        Shaping Tomorrow's Digital World
                      </h2>
                      <p className="parafirstff">
                        Welcome to Nanotech, where innovation meets expertise.
                        We specialize in developing dynamic web2 and web3
                        solutions, helping you navigate the digital landscape
                        with confidence and creativity.
                      </p>
                      <div className="lastbtnbnr ">
                        <a class="btn button-banneerr" href="" target="_blank">
                          Launch App
                        </a>
                        {/* <a href="https://hydtprotocol-documents.gitbook.io/hydt-protocol-document/" target="_blank"
                        className="btn button-hedaersss"
                      >
                        Document
                      </a>
                      <a href="https://www.cyberscope.io/audits/hydt" target="_blank"
                        className="btn button-hedaersss"
                      >
                        Check audit
                      </a> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-12  p-0 m-auto padd-sm">
                    <div
                      className="inner-contents main-headings text-center  "
                      data-aos="fade-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                    >
                      <img
                        src="\banarcoin.png"
                        alt="img"
                        className="img-fluid header_imgs "
                      />
                      <img
                        src="\shadow.png"
                        alt="img"
                        className="img-fluid header_imgssss"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
