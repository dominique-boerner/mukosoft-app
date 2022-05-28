import { MedicationRequest } from "fhir/r4";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/system";

interface MedicationProps {
  medication: MedicationRequest;
}

export default function Medication({ medication }: MedicationProps) {
  const palette = useTheme().palette;
  console.log("medication", medication);
  return (
    <Box
      className="flex flex-row items-center p-2 rounded-md shadow-sm my-2"
      style={{ background: palette.primary.light }}
    >
      <span
        className="fi-rr-medicine p-4 rounded-md text-2xl m-0 leading-none"
        style={{
          background: palette.secondary.light,
          color: palette.primary.light,
        }}
      ></span>
      <Typography variant="h3" className="pl-4">
        {medication.medicationReference?.display}
      </Typography>
    </Box>
  );
}
