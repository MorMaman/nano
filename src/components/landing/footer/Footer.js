import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <section className="main-footer " id="footer">
        <div className="containe-fluid">
          <div className="row ">
            <div className="col-xl-11 col-lg-12 col-12 col-sm-12   mx-auto main_fotrdiv ">
              <div className="mainftrdiv my-footer-border">
                <div className="leftloofotr  ">
                  <div className="inner-logo">
                    <a className="" href="/">
                      <img
                        src="\DNS-logo.svg"
                        className="img-fluid w200 "
                        alt=""
                      />
                    </a>
                    {/* <h6 className=' dignissimos '>Join our community</h6> */}
                  </div>
                </div>
                <div className="rightdocdivmain padng_left">
                  <div className="padng_left ">
                    <h4 className="headdiinnnggssss">Home</h4>
                    <ul>
                      <li>
                        <div className="">
                          {" "}
                          <a href="" target="_blank">
                            <a className=" footerhead">About us</a>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="">
                          <a href="" target="_blank">
                            <a className=" footerhead">Platform</a>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="">
                          <a href="" target="_blank">
                            <a className=" footerhead">Features</a>
                          </a>
                        </div>{" "}
                      </li>
                      <li>
                        <div className="">
                          <a href="" target="_blank">
                            <a className=" footerhead">Blog</a>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="padng_left ">
                    <h4 className="headdiinnnggssss">X</h4>
                    <ul>
                      <li>
                        <div className="">
                          <a href="" target="_blank" className="footerhead">
                            Linkedin
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="">
                          <a href="" target="_blank" className="footerhead">
                            Instagram
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="">
                          <a href="" target="_blank" className="footerhead">
                            Telegram
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="">
                          <a href="" target="_blank" className="footerhead">
                            Discord
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="rights ">
        <div className="containe-fluid">
          <div className="row">
            <div className="col-xl-11 col-lg-12 col-12 col-sm-12   m-auto  ">
              <div className="mainbtammdiv">
                <div className="btmleftdiv">
                  <p className="  foterfst ">
                    ©2024 Nanotech-Solutions. All Rights Reserved.
                  </p>
                </div>
                <div className="btmmrightdiv ">
                  <p className="  foterfst">
                    privacy policy
                    {/* <li className='list-inline-item'>                                   
                                    <a className=''>
                                            <img onClick={() => window.scrollTo(0,0)} style={{cursor: "pointer"}} src="\fotrlogo.png" className="img-fluid w28 pl-2" alt="" />
                                        </a>
                                    </li> */}
                  </p>
                  <p className="  foterfst">
                    Terms
                    {/* <li className='list-inline-item'>                                   
                                    <a className=''>
                                            <img onClick={() => window.scrollTo(0,0)} style={{cursor: "pointer"}} src="\fotrlogo.png" className="img-fluid w28 pl-2" alt="" />
                                        </a>
                                    </li> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
