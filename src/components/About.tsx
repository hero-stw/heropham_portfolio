import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="ftco-about img ftco-section ftco-no-pb" id="about-section">
      <div className="container">
        <div className="row flex">
          <div className="col-md-6 col-lg-5 d-flex">
            <div className="img-about img d-flex align-items-stretch">
              <div className="overlay"></div>
              <div className="img d-flex align-self-stretch align-items-center">
                <img
                  src="https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/66300497_2413558925556432_7994955632933339136_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=3UeLqb-lorcAX_rLsi2&_nc_ht=scontent.fhan3-4.fna&oh=00_AT-Uwzpt48dPo9FAJyq2yd6nr9lEF9fBJzFqG7pq5RnTqw&oe=62762045"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 pl-lg-5 pb-5 w-50">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section ftco-animated">
                <h1 className="big">About</h1>
                <h2 className="mb-4">About Me</h2>
                <p>A dedicated guys with a passion for web development</p>
                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex">
                    <span>Name:</span> <span>Pham Anh Hung</span>
                  </li>
                  <li className="d-flex">
                    <span>Date of birth:</span> <span>August 05, 1998</span>
                  </li>
                  <li className="d-flex">
                    <span>Address:</span>
                    <span>Viet Tri Phu Tho</span>
                  </li>
                  <li className="d-flex">
                    <span>Email:</span> <span>hero.ulis.50@gmail.com</span>
                  </li>
                  <li className="d-flex">
                    <span>Phone: </span> <span>+84-901731132</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="counter-wrap ftco-animated d-flex mt-md-3">
              <div className="text">
                <p className="mb-4">
                  <span className="number mr-3" data-number="120">
                    0
                  </span>
                  <span>Project complete</span>
                </p>
                <p>
                  <a href="#" className="btn btn-primary py-3 px-3">
                    Download CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
