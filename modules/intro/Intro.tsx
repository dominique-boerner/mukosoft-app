import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Box, useTheme } from "@mui/system";
import { useStorageItem } from "@capacitor-community/storage-react";
import { CapacitorStorageKeys } from "../../common/capacitor-storage-keys";
import { Step } from "./models/step";
import { theme } from "../../styles/theme";
import heartbeatAnimation from "@assets/animations/heartbeat.json";
import medicineAnimation from "@assets/animations/medicine.json";
import stethoscopeAnimation from "@assets/animations/stethoscope.json";
import Lottie from "lottie-react";

export default function Intro() {
  const activeTheme = useTheme(theme);
  const [activeStep, setActiveStep] = useState(0);
  const [isFirstStart, setIsFirstStart] = useStorageItem(
    CapacitorStorageKeys.IS_FIRST_START,
    ""
  );

  const steps: Step[] = [
    {
      title: "MukoSoft - für Mukoviszidose Patienten",
      text: "Wilkommen bei MukoSoft, eurer Hilfe im Alltag.",
      lottieAnimation: stethoscopeAnimation,
    },
    {
      title: "Vitaldaten",
      text: "Behaltet einen Überblick über FEV1, Blutzucker und weitere Werte.",
      lottieAnimation: heartbeatAnimation,
    },
    {
      title: "Medikationen",
      text: "Erstellt euren eigenen Medikamentenplan.",
      lottieAnimation: medicineAnimation,
    },
  ];

  function prevStep() {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1);
    }
  }

  function nextStep() {
    if (activeStep !== steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  }

  function finish() {
    setIsFirstStart("true").then(() => window.location.reload());
  }

  return (
    <Box className="flex flex-col justify-between align-center h-screen">
      <Box className="flex flex-col h-screen mx-6 mt-24">
        <Typography variant="h4">{steps[activeStep].title}</Typography>
        <Typography variant="h1" className="mt-4">
          {steps[activeStep].text}
        </Typography>
        <Lottie
          animationData={steps[activeStep].lottieAnimation}
          height="200"
          loop={true}
        />
      </Box>

      <Box
        className="h-64 w-full flex flex-col justify-center items-center"
        style={{ background: activeTheme.palette.primary.main }}
      >
        <Box className="flex flex-col w-2/3 justify-center">
          {activeStep > 0 && (
            <Button
              className="mb-4"
              variant="outlined"
              color="secondary"
              onClick={() => prevStep()}
            >
              Zurück
            </Button>
          )}
          {activeStep !== steps.length - 1 && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => nextStep()}
            >
              Weiter
            </Button>
          )}
          {activeStep === steps.length - 1 && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => finish()}
            >
              Fertig!
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}
