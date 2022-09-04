import { Logger } from "./logger";
import { environment } from "../../../../environments/environment";

describe("logging of the application", () => {
  const msg = "LoggerSpec";

  it("should log info in non-production", () => {
    environment.production = false;
    const spy = jest.spyOn(console, "info");

    const prefix = "info";
    Logger.info(msg, prefix);

    expect(spy).toHaveBeenCalledWith(
      `%c ℹ️ ${prefix}: ${msg}`,
      "color: #33b5e5"
    );
  });

  it("should log success in non-production", () => {
    environment.production = false;
    const spy = jest.spyOn(console, "log");

    const prefix = "success";
    Logger.success(msg, prefix);

    expect(spy).toHaveBeenCalledWith(
      `%c ✔️ ${prefix}: ${msg}`,
      "color: #5cb85c"
    );
  });

  it("should log error in non-production", () => {
    environment.production = false;
    const spy = jest.spyOn(console, "log");

    const prefix = "error";
    Logger.error(msg, prefix);

    expect(spy).toHaveBeenCalledWith(
      `%c 🔥 ${prefix}: ${msg}`,
      "color: #ff4444"
    );
  });
});
