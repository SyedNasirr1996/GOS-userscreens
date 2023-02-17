import React from "react";
import "../components/styles/Style.css";
import black from "../Assets/black.jpg";
import sing from "../Assets/singh.jpg";
import mount from "../Assets/mount.jpg";
import sea from "../Assets/sea.jpg";
import House from "../Assets/house.jpg";
import boat from "../Assets/boat.jpg";
import ab from "../Assets/13.jpg";
import ac from "../Assets/14.jpg";
import ad from "../Assets/15.jpg";
import ae from "../Assets/16.jpg";
import af from "../Assets/17.jpg";

function Introducing() {
  return (
    <div>
      <div>
        <section>
          <div className="introducing-area">
            <div className="container grid-container">
              <h1 className="into-content">Gos Introducing</h1>
              <div className="row">
                <div className=" col-xs-6 col-md-6 my-3 ">
                  <div className="single-intro">
                    <div className="card1 ">
                      <img src={black} className="intro-img rounded mx-auto d-block rounded mx-auto d-block col-xs-6" />
                      <div className="card-text1">
                        <h4>Hotel Reservation</h4>
                      </div>
                      <div className="intro-text row">
                        <div className="d-flex justify-content-between">
                          <h6>VOYE HOMES Orchids Villa</h6>
                          <p className="btn btn-success">Read more</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" col-xs-6 col-md-6 my-3 ">
                  <div className="single-intro">
                    <div className="card1">
                      <img src={boat} alt="img" className="intro-img rounded mx-auto d-block" />
                      <div className="card-text1">
                        <h4>House boat</h4>
                      </div>
                      <div className="intro-text row">
                        <div className="d-flex justify-content-between">
                          <h6>
                            GODS OWN STAY DJ 7 - 8- 9 &amp; 10 Bedrooms Full Day
                            Cruise
                          </h6>
                          <p className="btn btn-success">Read more</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" col-xs-6 col-md-6 my-3">
                  <div className="single-intro">
                    <div className="card1">
                      <img src={mount} alt="img" className="intro-img rounded mx-auto d-block" />
                      <div className="card-text1">
                        <h4>Packages</h4>
                      </div>
                      <div className="intro-text row">
                        <div className="d-flex justify-content-between">
                          <h6>GODS OWN STAY Puniyalan 2457</h6>
                          <p className="btn btn-success">Read more</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-6 col-md-6 my-3">
                  <div className="single-intro">
                    <div className="card1">
                      <img src={sea} alt="img" className="intro-img rounded mx-auto d-block" />
                      <div className="card-text1">
                        <h4>Shikara</h4>
                      </div>
                      <div className="intro-text row">
                        <div className="d-flex justify-content-between">
                          <h6>GODS OWN STAY Puniyalan 2457</h6>
                          <p className="btn btn-success">Read more</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div className="content">
            <h1>GOS Best Selling Destinantions</h1>
            <div className="row my-3">
              <div className="col-md-4 img-hover">
                <div className="card">
                  <div className="hover01 column">
                    <figure>
                      <img src={ac}/>
                    </figure>
                    <div className="card-text">
                      <h4>Maldives</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 img-hover">
                <div className="card">
                  <div className="hover01 column">
                    <figure>
                      <img src={House} />
                    </figure>
                    <div className="card-text">
                      <h4>Lion City</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="hover01 column">
                    <figure>
                      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/b9/58/b4/photo0jpg.jpg?w=700&h=500&s=1&cx=1000&cy=543&chk=v1_d6044045ef865bfe074a" />
                    </figure>
                    <div className="card-text">
                      <h4>Kaula Lampur</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-4 img-hover">
                <div className="card">
                  <div className="hover01 column">
                    <figure>
                      <img src={House} />
                    </figure>
                    <div className="card-text">
                      <h4>Alleppey</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 img-hover">
                <div className="card">
                  <div className="hover01 column">
                    <figure>
                      <img src={ac} />
                    </figure>
                    <div className="card-text">
                      <h4>Munar</h4>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className=" content col-md-4 ">
                <div className="hover01 column">
                  <div className="card">
                    <figure>
                      <img src={House}  className=" img col-md-4 w-100"/>
                    </figure>
                    <div className="card-text1">
                      <h4>Kochi</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section>
          <div className="container grid-container">
            <h1>GOS Best Selling Destinantions</h1>
            <div className="row my-3">
              <div className=" content col-md-4 col-sm-6 col-xs-6">
                <div className="hover01 column">
                  <figure>
                    <img src={ab} className=" img col-md-4 w-100" />
                  </figure>
                  <div className="card-text1">
                    <h4>Maldives</h4>
                  </div>
                </div>
              </div>
              <div className=" content col-md-4 col-sm-6 col-xs-6 ">
                <div className="hover01 column">
                  <figure>
                    <img src={boat} className=" img col-md-4 w-100" />
                  </figure>
                  <div className="card-text1">
                    <h4>Lion City</h4>
                  </div>
                </div>
              </div>
              <div className=" content col-md-4 col-sm-6 col-xs-6 ">
                <div className="hover01 column">
                  <figure>
                    <img src={ad} className=" img col-md-4 w-100" />
                  </figure>
                  <div className="card-text1">
                    <h4>Kaula Lampur</h4>
                  </div>
                </div>
              </div>
              <div className=" content col-md-4 col-sm-6 col-xs-6">
                <div className="hover01 column">
                  <figure>
                    <img src={ae} className=" img col-md-4 w-100" />
                  </figure>
                  <div className="card-text1">
                    <h4>Alleppey</h4>
                  </div>
                </div>
              </div>
              <div className=" content col-md-4 col-sm-6 col-xs-6">
                <div className="hover01 column">
                  <figure>
                    <img src={af} className=" img col-md-4 w-100" />
                  </figure>
                  <div className="card-text1">
                    <h4>Munar</h4>
                  </div>
                </div>
              </div>
              <div className=" content col-md-4 col-sm-6 col-xs-6">
                <div className="hover01 column">
                  <figure>
                    <img src={ab} className=" img col-md-4 w-100" />
                  </figure>
                  <div className="card-text1">
                    <h4>Kochi</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Introducing;
