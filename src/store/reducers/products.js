import { items } from "../../db";

const initialState = items;

export default function products(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_COUNT":
      const newItems = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, count: action.payload.count }
          : item
      );
      return newItems;
    default:
      return state;
  }
}
