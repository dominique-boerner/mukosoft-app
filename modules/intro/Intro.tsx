import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Box, useTheme } from "@mui/system";
import { useStorageItem } from "@capacitor-community/storage-react";
import { CapacitorStorageKeys } from "../../common/capacitor-storage-keys";
import { Step } from "./models/step";
import heartbeatAnimation from "@assets/animations/heartbeat.json";
import medicineAnimation from "@assets/animations/medicine.json";
import stethoscopeAnimation from "@assets/animations/stethoscope.json";
import cardiologyImage from "@assets/img/cardiology.svg";
import familyImage from "@assets/img/family.svg";
import medicineImage from "@assets/img/medicine.svg";

export default function Intro() {
  const activeTheme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [isFirstStart, setIsFirstStart] = useStorageItem(
    CapacitorStorageKeys.IS_FIRST_START,
    true
  );

  const steps: Step[] = [
    {
      title: "MukoSoft - für Mukoviszidose Patienten",
      text: "Wilkommen bei MukoSoft, eurer Hilfe im Alltag.",
      lottieAnimation: stethoscopeAnimation,
      image: React.createElement(familyImage),
    },
    {
      title: "Vitaldaten",
      text: "Behaltet einen Überblick über FEV1, Blutzucker und weitere Werte.",
      lottieAnimation: heartbeatAnimation,
      image: React.createElement(cardiologyImage),
    },
    {
      title: "Medikationen",
      text: "Erstellt euren eigenen Medikamentenplan.",
      lottieAnimation: medicineAnimation,
      image: React.createElement(medicineImage),
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
    setIsFirstStart(false).then(() => window.location.reload());
  }

  return (
    <Box
      className="flex flex-col fixed top-0 justify-evenly align-center h-screen w-screen"
      style={{ background: activeTheme.palette.primary.main }}
    >
      <Box className="flex flex-col h-screen justify-evenly mx-6">
        <Box>
          <Typography variant="h4">{steps[activeStep].title}</Typography>
          <Typography variant="h1" className="mt-4">
            {steps[activeStep].text}
          </Typography>
        </Box>
        <Box className="self-center">{steps[activeStep].image}</Box>
        <Box className="h-64 w-full flex flex-col justify-center items-center">
          <Box className="flex flex-col w-2/3 justify-center">
            {activeStep > 0 && (
              <Button
                className="mb-4"
                variant="contained"
                color="secondary"
                onClick={() => prevStep()}
              >
                Zurück
              </Button>
            )}
            {activeStep !== steps.length - 1 && (
              <Button
                variant="contained"
                color="tertiary"
                onClick={() => nextStep()}
              >
                Weiter
              </Button>
            )}
            {activeStep === steps.length - 1 && (
              <Button
                variant="contained"
                color="tertiary"
                onClick={() => finish()}
              >
                Fertig!
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
