import React from "react";
import {
  cleanup,
  getAllByTestId,
  render,
  screen,
} from "@testing-library/react";

import BottomNavigation from "./BottomNavigation";
import { RouteUtil } from "./util/RouteUtil";

afterEach(cleanup);

it("Should have the correct amount of BottomNavigationActions", () => {
  render(<BottomNavigation />);

  const bottomActions = screen.getAllByTestId("action-button");

  expect(bottomActions.length).toBe(
    RouteUtil.getBottomNavigationActions().length
  );
});
