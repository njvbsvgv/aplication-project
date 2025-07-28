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
        sx={(theme) => ({
          fontFamily: "bYekanBold",
          direction: "rtl",

          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",

          [theme.breakpoints.down(393)]: {
            flexDirection: "column",
            alignItems: "stretch",
            gap: theme.spacing(2),
          },

          "& .MuiStep-root": {
            position: "relative",
            padding: 0,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "0",
            [theme.breakpoints.down(393)]: {
              marginTop: "28px"
            }
          },

          "& .MuiStepIcon-root": {
            display: "none",
          },

          "& .MuiStepLabel-label": {
            fontSize: "clamp(11px, 2vw, 14px)", // سایز واکنش‌گرا
            color: "#8B8D98",
            fontFamily: "bYekanBold",
            textAlign: "right",
            width: "90%",
            marginInline: "auto",
            overflow: "hidden",
            position: "absolute",
            bottom: "-32px",
            left: "0",
            [theme.breakpoints.down(393)]: {
              fontSize: "clamp(10px, 3.5vw, 13px)",
              width: "90%",
              // marginTop: "6px",
              bottom: "-25px"
            },
          },

          "& .MuiStep-root::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            height: "6px",
            borderRadius: "4px",
            backgroundColor: "#E6F4FE",
            width: "85%",
            left: "50%",
            transform: "translateX(-50%)",

            [theme.breakpoints.down(393)]: {
              left: 0,
              transform: "none",
              width: "100%",
            },
          },

          "& .MuiStep-root.Mui-active::after, & .MuiStep-root.Mui-completed::after":
            {
              backgroundColor: "#007AFF",
            },

          "& .MuiStep-root.Mui-active .MuiStepLabel-label, & .MuiStep-root.Mui-completed .MuiStepLabel-label":
            {
              color: "#000",
              fontWeight: "bold",
            },
        })}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel icon={null}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepNavigation;
