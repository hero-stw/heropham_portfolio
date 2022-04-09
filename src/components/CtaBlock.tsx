import React from "react";

type Props = {};

const CtaBlock = (props: Props) => {
  return (
    <section
      className="ftco-section ftco-hireme img margin-top"
      //   style="background-image: url(images/bg_1.jpg)"
      style={{
        backgroundImage: `url("https://source.unsplash.com/random/coding")`,
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 ftco-animated text-center">
            <h2>
              I'm <span>Available</span> for freelancing
            </h2>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <p className="mb-0">
              <a href="#" className="btn btn-primary py-3 px-5">
                Hire me
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBlock;
