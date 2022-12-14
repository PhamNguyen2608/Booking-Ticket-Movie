import Seats from "../../Components/Seats";
import { DAT_GHE } from "../types/MoviSeatsType";
import { HUY_GHE } from "../types/MoviSeatsType";
export const seatSelectedAction = (seat) => {
  return {
    type: DAT_GHE,
    seat,
  };
};
export const cancleSeat = (seat) => {
  return {
    type: HUY_GHE,
    seat,
  };
};

