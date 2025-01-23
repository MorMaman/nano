import { useEffect } from "react";
import "./roadmap.scss";

export const Roadmap = () => {
  return (
    <>
      <section className="roadmaps p-0" id="contact_us">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 p-0 m-auto">
              <div className="maindivcomg ">
                <h6 className="comingtext">
                  Ready to bring your ideas to life?
                </h6>
                <p className="nnneewwmc">
                  Connect with us to explore innovative solutions tailored to
                  your needs.
                </p>
                <button className="cantaussuss">CONTACT US</button>
              </div>
            </div>
          </div>
        </div>
        {/* <img src='/commingsoon.png'className='img-fluid w-100 h-100' style={{objectFit: "cover"}}>
        </img> */}
      </section>
    </>
  );
};
export default Roadmap;
