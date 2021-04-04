// =========================
// sample!!
// object-based approach
// =========================
const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      const newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
};

// =========================
// sample!!
// object-based approach
// =========================
const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      // key interpretion syntax
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
