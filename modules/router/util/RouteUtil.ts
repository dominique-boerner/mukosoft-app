import React from "react";
import Home from "../../home/Home";
import Medications from "../../medications/Medications";
import Cookbook from "../../cookbook/Cookbook";
import Community from "../../community/Community";
import { Route } from "../models/Route";
import { BottomNavigationAction } from "../models/BottomNavigationAction";
import HomeIcon from "../../../assets/icons/uicons-regular-rounded/svg/fi-rr-home.svg";
import MedicationIcon from "../../../assets/icons/uicons-regular-rounded/svg/fi-rr-medicine.svg";
import CookbookIcon from "../../../assets/icons/uicons-regular-rounded/svg/fi-rr-carrot.svg";
import CommunityIcon from "../../../assets/icons/uicons-regular-rounded/svg/fi-rr-following.svg";

const BOTTOM_NAVIGATION_ACTION_ICON_CLASS = "bottom-navigation-action-icon";

const homeIconElement = React.createElement(HomeIcon, {
  className: BOTTOM_NAVIGATION_ACTION_ICON_CLASS,
});

const medicationIconElement = React.createElement(MedicationIcon, {
  className: BOTTOM_NAVIGATION_ACTION_ICON_CLASS,
});

const cookbookIconElement = React.createElement(CookbookIcon, {
  className: BOTTOM_NAVIGATION_ACTION_ICON_CLASS,
});

const communityIconElement = React.createElement(CommunityIcon, {
  className: BOTTOM_NAVIGATION_ACTION_ICON_CLASS,
});

/**
 * Utility class for getting routes and navigation specific information.
 * @author Dominique Börner
 */
export class RouteUtil {
  static ROUTES = {
    HOME: "/",
    MEDICATIONS: "/medications",
    COOKBOOK: "/cookbook",
    COMMUNITY: "/community",
  };

  /**
   * Returns the actions for the bottom navigation.
   * @return {BottomNavigationAction[]}
   */
  static getBottomNavigationActions(): BottomNavigationAction[] {
    return [
      {
        to: RouteUtil.ROUTES.HOME,
        icon: homeIconElement,
      },
      {
        to: RouteUtil.ROUTES.MEDICATIONS,
        icon: medicationIconElement,
      },
      {
        to: RouteUtil.ROUTES.COOKBOOK,
        icon: cookbookIconElement,
      },
      {
        to: RouteUtil.ROUTES.COMMUNITY,
        icon: communityIconElement,
      },
    ];
  }
}
