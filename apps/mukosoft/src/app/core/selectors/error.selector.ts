import { AppState } from "../state/app-state";

export const selectErrorState = (state: AppState) => {
  return state.error;
};
