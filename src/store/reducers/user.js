const initialState = {
  name: "",
  email: "",
  gender: "",
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case "SAVE_USER_DATA":
      return action.payload;
    default:
      return state;
  }
}
