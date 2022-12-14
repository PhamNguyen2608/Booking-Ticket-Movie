import React, { Component } from "react";
import { connect } from "react-redux";
import {HUY_GHE} from '../redux/types/MoviSeatsType'
class InforBooking extends Component {
  render() {
    return (
      <div>
        <div>
          <button disabled className="gheDuocChon mt-5"></button>
          <span className="text-light ml-2 " style={{ fontSize: "25px" }}>
            Selected
          </span>
        </div>
        <div>
          <button disabled className="gheDangChon mt-5"></button>
          <span className="text-light ml-2 " style={{ fontSize: "25px" }}>
            Occupied
          </span>
        </div>
        <div>
          <button disabled className="ghe mt-5 ml-0"></button>
          <span className="text-light ml-2 " style={{ fontSize: "25px" }}>
            Available
          </span>
        </div>
        <div>
          <table className="table mt-5" border="2">
            <thead>
              <tbody className="text-warning">
                {this.props.listSeatSelected.map((ghe, index) => {
                  return (
                    <tr key={index}>
                      <td>{ghe.soGhe}</td>
                      <td>{ghe.gia.toLocaleString()}</td>
                      <td>
                        <button
                          onClick={() => {
                            this.props.dispatch({
                              type: HUY_GHE,
                              seat: ghe.soGhe,
                            });
                          }}
                        >
                          Cancle
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="text-white">
                  <td></td>
                  <td>Total</td>
                  <td>{this.props.listSeatSelected.reduce((sum, ghe, index)=>{
                    return (sum += ghe.gia);
                  },0).toLocaleString()}</td>
                </tr>
              </tfoot>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}
const mapSateToProps = state => {
  return {
    listSeatSelected: state.MovieSeats.listSeatSelected,
  };
}
export default connect(mapSateToProps)(InforBooking);
