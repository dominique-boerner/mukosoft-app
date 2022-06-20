import { Box, Button, MobileStepper, TextField } from "@mui/material";
import React, { useState } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Autocomplete } from "@mui/lab";

const Medications = () => {
  const steps = 4;

  const [activeStep, setActiveStep] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);

  const handleNext = () => {
    if (activeStep + 1 < steps) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep - 1 >= 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const getOptions = () => {
    fetch(`http://localhost:9000/v1/medication?name=${name}`)
      .then((r) => r.json())
      .then((medication) => {
        const medications = medication.data.map((med: any) => {
          return {
            ...med,
          };
        });
        setAutocompleteOptions(medications);
      });
  };

  return (
    <Box py={"3.5rem"}>
      <Box px="1rem" py={"1rem"}>
        <Autocomplete
          onChange={(o) => console.log(o)}
          freeSolo
          getOptionLabel={(option: any) => option.DSCRD}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Name des Medikaments"
              onChange={(event) => {
                setName(event.target.value);
                getOptions();
              }}
            />
          )}
          options={autocompleteOptions}
        />
        <MobileStepper
          variant="progress"
          steps={steps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === 5}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </Box>
    </Box>
  );
};

export default Medications;
