export default function(state = false, action) {
  switch (action.type) {
    case "NEWSLETTER_LOADING":
      return action.payload;
    default:
      return state;
  }
}
