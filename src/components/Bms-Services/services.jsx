import React from "react";
import featuresData from "../../data/sections/featuresBms.json";

const Services = ({ style, lines }) => {
  return (
    <section
      className={`services bords section-padding ${
        style === "4item" ? "lficon" : lines ? "" : "pt-0"
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Our services
              </h6>
              {/* <h3 className="wow color-font">
                We are a new digital product development agency
              </h3> */}
            </div>
          </div>
        </div>
        <div className="row">
          {style === "4item"}
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="col-lg-12 wow fadeInLeft"
              data-wow-delay={`${
                feature.id == 1
                  ? ".3"
                  : feature.id === 2
                  ? ".7"
                  : feature.id === 3
                  ? ".9"
                  : "1.1"
              }s`}
            >
              <div className="item-box">
                {/* <div>
                  <img className="services-image" src={feature.image} />
                
                </div> */}
                <div className="cont">
                  <h6>{feature.title}</h6>
                  <p>{feature.content1}</p>
                  {/* <p>{feature.list}</p> */}
                  <div className="custom-bms-list ">
                    <div>
                      <ul>
                        <li>
                          {feature.list.map((a) => {
                            return (
                              <li
                                key={feature.id}
                                className="custom-bms-li-items"
                              >
                                {a}
                              </li>
                            );
                          })}
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>
                          {feature.list2.map((a) => {
                            return (
                              <li
                                key={feature.id}
                                className="custom-bms-li-items"
                              >
                                {a}
                              </li>
                            );
                          })}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
