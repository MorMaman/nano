import React, { useState, useEffect } from "react";
import "./services.scss";
const contentData = [
  {
    left: 1,
    number: 1,
    right: {
      heading: "Comprehensive Digital Solutions",
      paragraphs: [
        "At Nanotech, we provide a full spectrum of services to fuel your digital success:",
        "Web2 Development: From crafting detailed product requirements documents to developing responsive applications, we create tailored web solutions that drive engagement and growth.",
        "Web3 Expertise: Dive into the future with our blockchain innovations. We specialize in writing impactful whitepapers and developing robust tokenomics to support your crypto projects.",
        "Design Excellence: Our team crafts visually stunning and user-friendly interfaces that enhance user experience and brand identity.",
        "Consulting Services: Our expert guidance spans all areas of development, design, and content for both web2 and web3, ensuring your projects achieve their full potential.",
      ],
    },
  },
];

const Services = () => {
  const [index, setIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");
  const content = contentData[index];

  useEffect(() => {
    setFadeClass("fade-out");
    const timer = setTimeout(() => {
      setFadeClass("fade-in");
    }, 600); // Duration of the fade-out animation

    return () => clearTimeout(timer);
  }, [index]);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % contentData.length);
  };

  const handlePrev = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + contentData.length) % contentData.length
    );
  };
  return (
    <section className="servicesmain" id="services">
      <span className="serviceshade"></span>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-12  m-auto padd-sm">
            <div className="innerservice">
              <div className="serviceleft">
                <h6 className="servicepara">What we offer</h6>
                <h5 className="servicehead">Our services</h5>
                <div className="servicemainbtns">
                  <button onClick={handlePrev} className="sliderbtn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M16 29.3334C23.3638 29.3334 29.3333 23.3638 29.3333 16C29.3333 8.63622 23.3638 2.66669 16 2.66669C8.63616 2.66669 2.66663 8.63622 2.66663 16C2.66663 23.3638 8.63616 29.3334 16 29.3334Z"
                        stroke="#D3D3D3"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.68 20.7067L12.9867 16L17.68 11.2933"
                        stroke="#D3D3D3"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <span className="linebtn"></span>
                  <button onClick={handleNext} className="sliderbtn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M15.9999 29.3334C8.63612 29.3334 2.66659 23.3638 2.66659 16C2.66659 8.63622 8.63612 2.66669 15.9999 2.66669C23.3637 2.66669 29.3333 8.63622 29.3333 16C29.3333 23.3638 23.3637 29.3334 15.9999 29.3334Z"
                        stroke="#D3D3D3"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.3201 20.7067L19.0134 16L14.3201 11.2933"
                        stroke="#D3D3D3"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <h1 className={`mainhead ${fadeClass}`}>{content.left}</h1>
              </div>
              <div className={`serviceright ${fadeClass}`}>
                <h4 className="letterhead">{content.number}</h4>
                <h6 className="righthead">{content.right.heading}</h6>
                {content.right.paragraphs.map((para, idx) => (
                  <p key={idx} className="rightpara">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
