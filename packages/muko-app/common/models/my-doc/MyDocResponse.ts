import { MyDocData } from "./MyDocData";

export interface MyDocResponse {
  message: string;
  success: boolean;
  data: MyDocData;
}
