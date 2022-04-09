import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section id="home-section" className="hero">
      <div className="home-slider owl-carousel">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div>
              <div className="slider-item">
                <div className="overlay"></div>
                <div className="container">
                  <div
                    className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
                    data-scrollax-parent="true"
                  >
                    <div
                      className="one-third js-fullheight order-md-last img"
                      style={{
                        backgroundImage:
                          "url('https://source.unsplash.com/random')",
                      }}
                    >
                      <div className="overlay"></div>
                    </div>
                    <div
                      className="one-forth d-flex align-items-center ftco-animated"
                      data-scrollax=" properties: { translateY: '70%' }"
                    >
                      <div className="text">
                        <span className="subheading">Hello!</span>
                        <h1 className="mb-4 mt-3">
                          I'm <span>HeroPham</span>
                        </h1>
                        <h2 className="mb-4">A Front-end Developer</h2>
                        <p>
                          <a href="#" className="btn btn-primary py-3 px-4">
                            Hire me
                          </a>
                          <a
                            href="#"
                            className="btn btn-white btn-outline-white py-3 px-4"
                          >
                            My works
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="slider-item">
                <div className="overlay"></div>
                <div className="container">
                  <div
                    className="row d-flex no-gutters slider-text align-items-end justify-content-end"
                    data-scrollax-parent="true"
                  >
                    <div
                      className="one-third js-fullheight order-md-last img"
                      style={{
                        backgroundImage:
                          "url('https://source.unsplash.com/random')",
                      }}
                    >
                      <div className="overlay"></div>
                      <img src="https://source.unsplash.com/random" alt="" />
                    </div>
                    <div
                      className="one-forth d-flex align-items-center ftco-animated"
                      data-scrollax=" properties: { translateY: '70%' }"
                    >
                      <div className="text">
                        <span className="subheading">Hello!</span>
                        <h1 className="mb-4 mt-3">
                          I'm a <span>web designer</span> based in London
                        </h1>
                        <p>
                          <a href="#" className="btn btn-primary py-3 px-4">
                            Hire me
                          </a>
                          <a
                            href="#"
                            className="btn btn-white btn-outline-white py-3 px-4"
                          >
                            My works
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
