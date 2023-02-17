import React from "react";
import "./styles/Style.css";
import black from "../Assets/black.jpg";
import sing from "../Assets/singh.jpg";
import mount from "../Assets/mount.jpg";
import sea from "../Assets/sea.jpg";
import House from "../Assets/restaurant.jpg";
import boat from "../Assets/boat.jpg";
import ab from "../Assets/13.jpg";
import ac from "../Assets/14.jpg";
import ad from "../Assets/15.jpg";
import ae from "../Assets/16.jpg";
import af from "../Assets/17.jpg";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function Try() {
  return (
    <div>
      <section>
        <Grid
          container
          spacing={{xs:1}}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 1, md: 3 }}
        >
          <div className=" container introducing-area ">
            <h1 className="into-content"  xs={3}>Gos Introducing</h1>
            <div className="row">
              <Grid item xs={6} md={6}>
                <Item sx={{ m: 1 }}>
                  <div className="single-intro">
                    <div className="card1">
                      <img
                        src={House}
                        className="intro-img rounded mx-auto d-block rounded mx-auto d-block "
                      />
                      <div className="card-text1">
                        <h4 >
                          Hotel Reservation
                        </h4>
                      </div>
                      <div className="intro-text row" >
                        <div className="d-flex justify-content-between">
                          <h6 >VOYE HOMES Orchids Villa</h6>
                          <p className="btn btn-success">Read more</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={6} md={6}>
                <Item sx={{ m: 1 }}>
                  <div className="single-intro">
                    <div className="card1">
                      <img
                        src={boat}
                        alt="img"
                        className="intro-img rounded mx-auto d-block"
                      />
                      <div className="card-text1" xs={3}>
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
                </Item>
              </Grid>
              <Grid item xs={6} md={6}>
                <Item sx={{ m: 1 }}>
                  <div className="single-intro">
                    <div className="card1">
                      <img
                        src={mount}
                        alt="img"
                        className="intro-img rounded mx-auto d-block"
                      />
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
                </Item>
              </Grid>
              <Grid item xs={6} md={6}>
                <Item sx={{ m: 1 }}>
                  <div className="single-intro">
                    <div className="card1">
                      <img
                        src={sea}
                        alt="img"
                        className="intro-img rounded mx-auto d-block"
                      />
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
                </Item>
              </Grid>
            </div>
          </div>
        </Grid> 
      </section>
      <section>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <div className="container grid-container">
            <h1>GOS Best Selling Destinantions</h1>
            <div className="row my-3">
              <Grid item xs={6} md={4}>
                <Item>
                <div className="content hover01 column">
                  <figure>
                    <img src={ab} className=" img  w-100" />
                  </figure>
                  <div className="card-text1">
                    <h4>Maldives</h4>
                  </div>
                </div>
                </Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>
                <div className="content hover01 column">
                  <figure>
                    <img src={af} className=" img w-100" />
                  </figure>
                  <div className="card-text1">
                    <h4>Lion City</h4>
                  </div>
                </div>
                </Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item> <div className="content hover01 column">
                  <figure>
                    <img src={ad} className=" img  w-100" />
                  </figure>
                  <div className="card-text1">
                    <h4>Kaula Lampur</h4>
                  </div>
                </div></Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>
                <div className="content hover01 column">
                  <figure>
                    <img src={ae} className=" img  w-100" />
                  </figure>
                  <div className="card-text1">
                    <h4>Alleppey</h4>
                  </div>
                </div>
                </Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>
                <div className="content hover01 column">
                  <figure>
                    <img src={af} className=" img  w-100" />
                  </figure>
                  <div className="card-text1">
                    <h4>Munar</h4>
                  </div>
                </div>
                </Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>
                <div className="content hover01 column">
                  <figure>
                    <img src={ab} className=" img  w-100" />
                  </figure>
                  <div className="card-text1">
                    <h4>Kochi</h4>
                  </div>
                </div>
                </Item>
              </Grid>
            </div>
          </div>
        </Grid>
      </section>
    </div>
  );
}

export default Try;
