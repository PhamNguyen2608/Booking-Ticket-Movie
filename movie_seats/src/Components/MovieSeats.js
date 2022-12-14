import React, { Component } from "react";
import InforBooking from "./InforBooking";
import "./MovieSeats.css";
import hangGhe from "../data/danhSachGhe.json";
import Seats from "./Seats";
class MovieSeats extends Component {
  renderHangGhe = () => {
    return hangGhe.map((ghe, index) => {
      return (
        <div
          className="ml-1 mt-3 text-left"
          style={{ display: "flex" }}
        >
          <span className="text-light" style={{ fontSize: "20px" }}>
            {index.hang}
          </span>
          <div className="firstChar">{ghe.hang}</div>
          <Seats hangGhe={ghe} />
        </div>
      );
    });
  };
  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          // position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('../img/bgmovie.jpg')",
          backgroundRepeat: "no-repeat ",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            // position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <div className="container-fluid ">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-light display-4">BOOKING TICKETS</div>
                <div className="text-light mt-5" style={{ fontSize: "30px" }}>
                  Screen this way
                </div>
                <div
                  className="mt-1"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                </div>
                <div>{this.renderHangGhe()}</div>
              </div>

              <div className="col-4  ">
                <div
                  className="text-light text-center mt-5"
                  style={{ fontSize: "30px" }}
                >
                  Seats Selection
                </div>
                <InforBooking />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieSeats;
