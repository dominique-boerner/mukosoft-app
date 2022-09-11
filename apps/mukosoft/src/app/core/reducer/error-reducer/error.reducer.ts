import { createReducer, on } from "@ngrx/store";
import { GlobalError } from "../../exception/global-error.interface";
import { setError } from "../../actions/error.action";

export const initialErrorState: GlobalError = {
  hasError: true,
  title: "",
};

export const errorReducer = createReducer<GlobalError>(
  initialErrorState,
  on(setError, (state, { error }) => error)
);
