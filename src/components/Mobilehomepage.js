import React from "react";
import "../components/styles/Mobilehomestyles.css"
import cardimg1 from "../Components/Images/cardimg1.svg";
import cardimg2 from "../Components/Images/cardimg2.svg";
import cardimg3 from "../Components/Images/cardimg3.svg";
import loc from "../Components/Images/loc.gif";
import fe from "../Components/Images/fe.png";
import {
  TextField,
} from "@mui/material";

function Mobilehomepage() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="banner">
      <section
        style={{ backgroundImage: `url(${fe})`, height: "160px" }}
      >
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <h5>
                GodsOwnStay<span style={{ color: "#0194FE" }}>.com</span>
              </h5>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <i class="fa-solid fa-phone"></i>
                    <span style={{ fontWeight: "bold" }}>
                      24x7 gosCare Support
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <span style={{ fontWeight: "bold" }}>
                      List Your Property
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <span style={{ fontWeight: "bold" }}>Invite & Earn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="loginbutton">
          <button
            type="button"
            class="btn"
            style={{
              borderColor: "white",
              backgroundColor: "#0194FE",
              color: "white",
            }}
          >
            Login/Sign up
          </button>
        </div>
        <div className="container d-flex cardss">
          <div
            className="card carditemm col-xs-2"
            style={{
              width: "5rem",
              height: "5.4rem",
              padding: "15px",
            }}
          >
            <img src={cardimg1} className="card-img-top" alt="..." />
            <div className="card-body cardcont">
              <p style={{ fontSize: "76%", color: "#0194fe" }}>Hotel</p>
            </div>
          </div>
          <div
            className="card carditemm col-xs-2"
            style={{
              width: "5rem",
              height: "5.4rem",
              padding: "15px",
            }}
          >
            <img src={cardimg2} className="card-img-top" alt="..." />
            <div className="card-body cardcont">
              <p style={{ fontSize: "76%", color: "#0194fe" }}>Package</p>
            </div>
          </div>
          <div
            className="card carditemm col-xs-2"
            style={{
              width: "5rem",
              height: "5.4rem",
              padding: "15px",
            }}
          >
            <img src={cardimg3} className="card-img-top" alt="..." />
            <div className="card-body cardcont">
              <p style={{ fontSize: "70%", color: "#0194fe" }}>Housebo</p>
            </div>
          </div>
          <div
            className="card carditemm col-xs-2"
            style={{
              width: "5rem",
              height: "5.4rem",
              padding: "15px",
            }}
          >
            <img src={cardimg1} className="card-img-top" alt="..." />
            <div className="card-body cardcont">
              <p style={{ fontSize: "76%", color: "#0194fe" }}>Shikara</p>
            </div>
          </div>
        </div>
        <div>
          <div class="container-fluid">
            <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 ">
              <div class="col-5 scrollcard">
                <div class="card card-blockk" style={{ borderRadius: "80px" }}>
                  <img src={loc} style={{ borderRadius: "80px" }}></img>
                </div>
                <p className="textposs">Nearby</p>
              </div>
              <div class="col-5 scrollcard">
                <div class="card card-blockk card-2"></div>
                <p className="textposs">Kochi</p>
              </div>
              <div class="col-5 scrollcard">
                <div class="card card-blockk card-3"></div>
                <p className="textposs">Munnar</p>
              </div>
              <div class="col-5 scrollcard">
                <div class="card card-blockk card-4"></div>
                <p className="textposs">Allepie</p>
              </div>
              <div class="col-5 scrollcard">
                <div class="card card-blockk card-5"></div>
                <p className="textposs">Kochi</p>
              </div>
              <div class="col-5 scrollcard">
                <div class="card card-blockk card-6"></div>
                <p className="textposs">Munnar</p>
              </div>
              <div class="col-5 scrollcard">
                <div class="card card-blockk card-7"></div>
                <p className="textposs">Allepie</p>
              </div>
              <div class="col-5 scrollcard">
                <div class="card card-blockk card-8"></div>
                <p className="textposs">Kochi</p>
              </div>
              <div class="col-5 scrollcard">
                <div class="card card-blockk card-9"></div>
                <p className="textposs">Munnar</p>
              </div>
              <div class="col-5 scrollcard">
                <div class="card card-blockk card-10"></div>
                <p className="textposs">Allepie</p>
              </div>
              <div class="col-5 scrollcard">
                <div class="card card-blockk card-10"></div>
                <p className="textposs">Kochi</p>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid boxcontt" style={{paddingInline:'30px',padding: "25px",
              width: "93%",paddingBottom:'80px'}}>
          <div className="row">
            <div className="col">
              <h5>Where would you like to go?</h5>
              <div className="col-md-8">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i
                        class="fa-solid fa-location-dot"
                        style={{
                          height: "25px",
                          color: "#0194FE",
                          padding: "2px",
                        }}
                      ></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Destination, City, Hotel Name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex" style={{justifyContent:'space-between',justifyContent:'center'}}>
            <div class="col-xs-3">
              <h5>Check-In</h5>
              <TextField
                id="date"
                label="Choose date"
                type="date"
                defaultValue="2017-05-24"
                sx={{ width: '70%' }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div class="col-xs-3">
              <h5>Check-Out</h5>
              <TextField
                id="date"
                label="Choose date"
                type="date"
                defaultValue="2017-05-24"
                sx={{ width: '66%' }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
          <div className="row" style={{marginTop:'10px', justifyContent:'center'}}>
            <div className="col flex">
              <h5> <i class="fa-solid fa-user" style={{ color: "#0194FE" }}></i>Guest Details</h5>
            </div>
            <div className="col btn btn-outline-primary btn-sm-1" style={{backgroundColor:'powderblue'}}>Click here</div>
          </div>
          <div className="row" style={{justifyContent:'center'}}>
<div className="col-8 mx-4-center btn btn-primary" style={{marginTop:'10px', width:'60%'}}>
Search
</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mobilehomepage;
