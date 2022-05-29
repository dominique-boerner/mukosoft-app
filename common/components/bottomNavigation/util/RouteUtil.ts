import React from "react";
import { BottomNavigationAction } from "../models/BottomNavigationAction";
import HomeIcon from "@icons/fi-rr-home.svg";
import MedicationIcon from "@icons/fi-rr-medicine.svg";
import CookbookIcon from "@icons/fi-rr-carrot.svg";
import CommunityIcon from "@icons/fi-rr-following.svg";
import { features } from "@common/config/features";

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
    let routes = [
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
    ];

    if (features.MY_DOC) {
      routes = [
        ...routes,
        {
          to: RouteUtil.ROUTES.COMMUNITY,
          icon: communityIconElement,
        },
      ];
    }

    return routes;
  }
}
