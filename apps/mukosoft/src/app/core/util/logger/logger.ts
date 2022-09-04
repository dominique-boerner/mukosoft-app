import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class Logger {
  static info(msg: string, prefix = "") {
    if (!environment.production) {
      console.info(`%c ℹ️ ${prefix}: ${msg}`, "color: #33b5e5");
    }
  }

  static success(msg: string, prefix = "") {
    if (!environment.production) {
      console.log(`%c ✔️ ${prefix}: ${msg}`, "color: #5cb85c");
    }
  }

  static error(msg: string, prefix = "") {
    if (!environment.production) {
      console.log(`%c 🔥 ${prefix}: ${msg}`, "color: #ff4444");
    }
  }
}
