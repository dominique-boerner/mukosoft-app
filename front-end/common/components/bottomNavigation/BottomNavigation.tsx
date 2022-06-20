import {
  BottomNavigation as MUIButtomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { RouteUtil } from "./util/RouteUtil";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "@mui/system";
import styles from "./bottom-navigation.module.scss";

export default function BottomNavigation() {
  const [navIndex, setNavIndex] = useState(0);
  const router = useRouter();
  const palette = useTheme().palette;

  return (
    <Paper
      className="py-4"
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
              className={
                router.pathname === action.to
                  ? styles.bottomNavigationActive
                  : ""
              }
              style={
                router.pathname === action.to
                  ? { fill: palette.secondary.main }
                  : { fill: palette.secondary.light }
              }
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
