import { createAction, props } from "@ngrx/store";
import { GlobalError } from "../exception/global-error.interface";

const generateTitle = (description: string) => {
  return `[Error] ${description}`;
};

export const setError = createAction(
  generateTitle("set Error"),
  props<{ error: GlobalError }>()
);
