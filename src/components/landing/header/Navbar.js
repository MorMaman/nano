import React, { useState, useEffect } from "react";
import styled from "@emotion/styled/macro";

import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

// import Button from 'react-bootstrap/Button';
import Offcanvas from "react-bootstrap/Offcanvas";
const Copied = styled("span")`
  font-size: 16px;
  margin-left: 10px;
`;
const HOVER_TIMEOUT = 1000;

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [toggleBtn, setToggleBtn] = useState(false);
  console.log("🚀 ~ file: Navbar.js ~ line 21 ~ Navbar ~ toggleBtn", toggleBtn);

  const [showsidebar, setShowSidebar] = useState(false);

  const handleCloseSidebar = () => setShowSidebar(false);
  const handleShowSidebar = () => setShowSidebar(true);

  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;
  return (
    <section className="main-navbar-mobile main-navbar">
      <div className="container-fluid  ">
        <div className="row">
          <div className="col-xl-11 col-lg-12 col-12  m-auto px-0   nav_boder ">
            <nav className="navbar  navbar-expand-xl p-0">
              <a href="#" className="navbar-brand animate__flash">
                <Link to="/">
                  <img
                    src="/assets/sidelogo.svg"
                    alt="img"
                    width={"204px"}
                    className="img-fluid animate__animated animate__bounce"
                  />
                </Link>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                onClick={handleShowSidebar}
              >
                <span className="togg">
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M21 7.69768L3 7.69768M21 12.6977L3 12.6977M21 17.6977L3 17.6977"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </button>
              <div
                className="collapse navbar-collapse marg"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto">
                  <li class="nav-item active">
                    <HashLink
                      to="#"
                      style={
                        isActive("")
                          ? {
                              color: "#1777e2",
                              borderBottom: "2px solid #1777e2",
                            }
                          : {}
                      }
                    >
                      Home
                    </HashLink>
                  </li>
                  <li className="nav-item ">
                    <HashLink
                      to="#services"
                      style={
                        isActive("#services")
                          ? {
                              color: "#1777e2",
                              borderBottom: "2px solid #1777e2",
                            }
                          : {}
                      }
                    >
                      Our services
                    </HashLink>
                  </li>
                  <li className="nav-item">
                    <HashLink
                      to="#Our_industry"
                      style={
                        isActive("#Our_industry")
                          ? {
                              color: "#1777e2",
                              borderBottom: "2px solid #1777e2",
                            }
                          : {}
                      }
                    >
                      Our industry
                    </HashLink>
                  </li>
                  <li className="nav-item active">
                    <HashLink
                      to="#contact_us"
                      style={
                        isActive("#contact_us")
                          ? {
                              color: "#1777e2",
                              borderBottom: "2px solid #1777e2",
                            }
                          : {}
                      }
                    >
                      Contact us
                    </HashLink>
                  </li>
                </ul>

                {/* <a class="btn button-hedaer" href="" target="_blank">
                  Coming soon
                </a> */}
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* 
      <div className="wallet-modal">
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-body p-0">
                <div className="cross-icon">
                  <h3 class="modal-title text-center" id="exampleModalLabel">
                    Connect your Wallet
                  </h3>
                  <button
                    type="button"
                    class="close cross-img1"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <img
                        src="\adress\cross-icon.svg"
                        className="img-fluid "
                      />
                    </span>
                  </button>
                </div>

                <div className="button-modal1 d-flex">
                  <button className="modal-button" onClick={connectMetamask}>
                    <img
                      src="\adress\metamask-icon.svg"
                      className="img-fluid"
                    />
                    <h3 className=""> MetaMask</h3>
                    <p className="">Connect to your MetaMask wallet </p>
                  </button>
                  <button className="modal-button" onClick={trustWallet}>
                    <img
                      src="\adress\walletconnect-icon.svg"
                      className="img-fluid"
                    />
                    <h3 className="">WalletConnect</h3>
                    <p className="">Connect to your MetaMask wallet </p>
                  </button>
                </div>
                <p className="text-center mt-3  connecting">
                  By connecting, I accept HYDT{" "}
                  <span className="common connectinggg">Terms of Service </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Offcanvas
        placement="top"
        className="mobile_sidebar"
        show={showsidebar}
        onHide={handleCloseSidebar}
      >
        <Offcanvas.Header closeButton>
          <div className="top-content">
            <a href="#" className="navbar-brand ">
              <Link to="/">
                <img
                  src="/assets/sidelogo.svg"
                  alt="img"
                  className="img-fluid"
                  width={"200px"}
                />
              </Link>
            </a>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-nav mr-auto">
            <li class="nav-item px-0 ">
              <Link to="/"> Coming soon</Link>
            </li>
            <li className="nav-item px-0 ">
              <Link to="/"> Coming soon</Link>
            </li>
            <li className="nav-item px-0 ">
              <Link to="/"> Coming soon</Link>
            </li>
            <li className="nav-item px-0 ">
              <Link to="/"> Coming soon</Link>
            </li>
          </ul>
          <a class="btn button-hedaer" href="" target="_blank">
            Coming soon
          </a>
        </Offcanvas.Body>
      </Offcanvas>
    </section>
  );
};

export default Navbar;
