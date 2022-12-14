const stateDefault = {
  listSeatSelected: [{ soGhe: "A1", gia: 75000, daDat: false }],
};

const MovieSeats = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_GHE": {
      let listSeatSelectedUpdate = [...state.listSeatSelected];

      let index = listSeatSelectedUpdate.findIndex(
        (soghe) => soghe.soGhe === action.seat.soGhe
      );
      if (index !== -1) {
        listSeatSelectedUpdate.splice(index, 1);
      } else {
        listSeatSelectedUpdate.push(action.seat);
      }
      state.listSeatSelected = listSeatSelectedUpdate;
 
      return { ...state };
    }
    case "HUY_GHE": {
      let listSeatSelectedUpdate = [...state.listSeatSelected];

      let index = listSeatSelectedUpdate.findIndex(
        (soghe) => soghe.soGhe === action.seat
      );
      if (index !== -1) {
        listSeatSelectedUpdate.splice(index, 1);
      }
      state.listSeatSelected = listSeatSelectedUpdate;
 
       return { ...state };
    }
    default:
      return { ...state };
  }
};

export default MovieSeats;
