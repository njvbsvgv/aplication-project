import * as React from "react";
import { Stepper, Step, StepLabel, Box } from "@mui/material";

const steps = ["وارد کردن شماره همراه", "تایید کد ارسال شده به شماره همراه"];

const StepNavigation = ({ activeStep }) => {
  return (
    <Box sx={{ width: "100%", direction: "rtl", mt: 2 }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<></>}
        sx={{
          fontFamily: "bYekanBold",
          "& .MuiStep-root": {
            position: "relative",
          },
          "& .MuiStepIcon-root": {
            display: "none",
          },
          "& .MuiStepLabel-label": {
            fontSize: "12px",
            color: "#8B8D98",
            fontFamily: "bYekanBold"
            // fontSize: ""
          },
          "& .MuiStep-root.Mui-completed .MuiStepLabel-label": {
            color: "#000",
            fontWeight: "bold",
          },
          "& .MuiStep-root.Mui-active .MuiStepLabel-label": {
            color: "#000",
            fontWeight: "bold",
          },
          "& .MuiStep-root::after": {
            content: '""',
            position: "absolute",
            bottom: -6,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "4px",
            borderRadius: "2px",
            backgroundColor: "#E6F4FE",
          },
          "& .MuiStep-root.Mui-active::after": {
            backgroundColor: "#007AFF",
          },
          "& .MuiStep-root.Mui-completed::after": {
            backgroundColor: "#007AFF",
          },
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepNavigation;
