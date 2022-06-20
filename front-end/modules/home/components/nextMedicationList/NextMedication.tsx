import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Medication from "@common/components/medication/Medication";
import { medicationMock } from "../../../../mocks/medication-mock";

export default function NextMedication() {
  return (
    <Box pb="1rem">
      <Typography variant="h2">Deine nächsten Medikamente</Typography>
      <Medication medication={medicationMock} />
      <Medication medication={medicationMock} />
      <Medication medication={medicationMock} />
      <Button variant="contained" color="secondary" className="my-4 w-full">
        Meine Medikamente
      </Button>
    </Box>
  );
}
