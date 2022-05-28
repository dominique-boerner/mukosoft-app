import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/system";
import Header from "@module/home/components/header/Header";
import Recipes from "@module/home/components/recipes/Recipes";
import CommunityNews from "@module/home/components/communityNews/CommunityNews";
import NextMedication from "@module/home/components/nextMedicationList/NextMedication";

const Home = () => {
  const palette = useTheme().palette;

  return (
    <Box
      className="min-h-screen"
      style={{ background: palette.background.default }}
    >
      <Header />
      <Box px="1rem" pt="2rem" pb="8rem">
        <CommunityNews />
        <NextMedication />
        <Recipes />
      </Box>
    </Box>
  );
};

export default Home;
