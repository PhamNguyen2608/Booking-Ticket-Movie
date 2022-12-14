import React, { Component } from "react";
import { connect } from "react-redux";
import {seatSelectedAction} from "../redux/action/MovieSeatsAction";
class Seats extends Component {
  renderSeats = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
      let cssSeatSelected = "";
      let indexSeatSeleted = this.props.seatSelected.findIndex(
        (seatSelected) => seatSelected.soGhe === ghe.soGhe
      );
      if (indexSeatSeleted !== -1) {
        cssSeatSelected = "gheDangChon";
      }
      return (
        <div style={{ marginLeft: "30px", display: "inline-block" }}>
          <button
            onClick={() => {this.props.occupied(ghe)}}
            disabled={disabled}
            className={`ghe ${cssGheDaDat} ${cssSeatSelected}`}
            key={index}
          >
            {ghe.soGhe}
          </button>
        </div>
      );
    });
  };
  render() {
    return <div>{this.renderSeats()}</div>;
  }
}
const mapSateToProps = (state) => {
  return {
    seatSelected: state.MovieSeats.listSeatSelected,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    occupied: (seat)=>{
      dispatch(seatSelectedAction(seat));
    }
  }
};
export default connect(mapSateToProps, mapDispatchToProps)(Seats);
