export default function(state = null, action) {
  switch (action.type) {
    case "SELECT_PODCAST":
      return action.payload;
    default:
      return state;
  }
}
