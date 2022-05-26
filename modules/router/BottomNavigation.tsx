import {BottomNavigation as MUIButtomNavigation, BottomNavigationAction, Paper,} from "@mui/material";
import React, {useState} from "react";
import {RouteUtil} from "./util/RouteUtil";
import Link from "next/link";

export default function BottomNavigation() {
  const [navIndex, setNavIndex] = useState(0);
  return (
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <MUIButtomNavigation
          value={navIndex}
          onChange={(event, newValue) => {
            setNavIndex(newValue);
          }}
        >
          {RouteUtil.getBottomNavigationActions().map((action, index) => (
              <Link key={`link_${index}`} href={action.to}>
                <BottomNavigationAction
                    data-testid="action-button"
                    key={`actionButton_${index}`}
                    icon={action.icon}
                />
              </Link>
          ))}
        </MUIButtomNavigation>
      </Paper>
  );
}