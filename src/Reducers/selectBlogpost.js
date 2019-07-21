export default function(state = null, action) {
  switch (action.type) {
    case "SELECTED_BLOGPOST":
      return action.payload;
    default:
      return state;
  }
}

//   TODO complete
