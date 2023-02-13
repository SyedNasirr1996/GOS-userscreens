
import { faChevronRight, faClone, faPercentage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "../assets/eproduct.jpg";
import "./offers.css";

const data = [
  {
    img: { Image },
    titel: "Get flat 12% Off",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    coupen: "GOS1210",
  },
  {
    img: { Image },
    titel: "Get flat 12% Off",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    coupen: "GOS1210",
  },
  {
    img: { Image },
    titel: "Get flat 12% Off",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    coupen: "GOS1210",
  },
];

function Offers() {
  return (
    <>
      <div className="d-flex justify-content-between pb-4 title">
        <div className="offer-titel">
          <span>
          {/* <FontAwesomeIcon icon="fa-solid fa-badge-percent" /> */}
          
          <FontAwesomeIcon icon={faPercentage} color="blue" />
          </span>
          Gos offers for you
        </div>
        <a className="view-all">
          View All
          <span className="view-all">
            {/* <i className="fa-solid fa-chevron-right"></i> */}
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </a>
      </div>
      <div className="d-flex justify-content-between gap-3 card-scroll">
        {data.map((val, i) => {
          return (
            <div className="card mb-4" style={{ maxWidth: "540px" }} key={i}>
              <div className="row g-0">
                <div className="col-md-6 col-sm-6 image">
                  <img
                    src={Image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                {/* <div className="col-md-6 col-sm-6 text-left">
                  <div className="card-body">
                    <h5 className="card-title">{val.titel}</h5>
                    <p className="card-text card-desc">{val.desc}</p>
                  </div>
                </div> */}
                {/* <div className="card-text">
                  <div className="text-muted row">
                    <span className="code-clr col-md-4 col-sm-12">Copy Code :</span>
                    <span className="coup col-md-4 col-sm-12">
                      {val.coupen}
                    </span>
                    <span className="col-md-4 col-sm-12">
                      <FontAwesomeIcon icon={faClone} />
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Offers;
