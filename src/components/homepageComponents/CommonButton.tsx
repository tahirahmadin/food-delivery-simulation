import React, { MouseEventHandler } from "react";
import { Box, Button, Theme, useMediaQuery, useTheme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: "relative",
    width: "100%",
    maxWidth: 170,
    height: 45,
    marginTop: "10px",
    [theme.breakpoints.down("md")]: {
      marginTop: "5px",
      height: 35,
    },
  },
  btn: {
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "23px",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
    transition: "all 0.2s ease",
    transform: "translateY(-8px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "3px",
    "&:hover": {
      background: "#D1FF19",
      transform: "translateY(-4px)",
    },
    [theme.breakpoints.down("md")]: {
      gap: "2px",
      fontSize: "16px",
      borderRadius: "12px",
      transform: "translateY(-4px)",
      "&:hover": {
        transform: "translateY(-2px)",
      },
    },
  },
  bg: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    minWidth: "100%",
    minHeight: "100%",
    borderRadius: "15px",
    zIndex: 0,
    [theme.breakpoints.down("md")]: {
      borderRadius: "12px",
    },
  },
}));
const CommonButton = ({
  onClick,
  children,
  disabled,
  insufficient,
  style,
  btnColor,
  btnBgColor,
  btnBorderColor,
  bgColor,
  btnStyle,
  btnBgStyle,
}: {
  onClick?: MouseEventHandler<HTMLElement>;
  children: React.ReactNode;
  disabled?: boolean;
  insufficient?: boolean;
  style?: any;
  btnColor?: string;
  btnBgColor?: string;
  btnBorderColor?: string;
  bgColor?: string;
  btnStyle?: any;
  btnBgStyle?: any;
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className={classes.container} style={{ ...style }}>
      <Button
        className={classes.btn}
        disabled={disabled}
        style={{
          color: disabled
            ? "#818181"
            : insufficient
            ? "#fff"
            : btnColor
            ? btnColor
            : "#000000",
          background: disabled
            ? "#B2B2B2"
            : insufficient
            ? "#FF4C4C"
            : btnBgColor
            ? btnBgColor
            : "#D1FF19",
          borderWidth: md ? "2px" : "4px",
          borderStyle: "solid",
          borderColor: disabled
            ? "#a0a0a0"
            : insufficient
            ? "#E82F2F"
            : btnBorderColor
            ? btnBorderColor
            : "#9CC300",
          flexDirection: insufficient ? "column" : "row",
          ...btnStyle,
        }}
        onClick={onClick}
      >
        {insufficient && (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2px",
              fontSize: 9,
              whiteSpace: "nowrap",
              lineHeight: "50%",
            }}
          >
            INSUFFICIENT BALANCE
          </span>
        )}
        {insufficient ? "$BUY ORARE" : children}
      </Button>
      <Box
        className={classes.bg}
        style={{
          backgroundColor: disabled
            ? "#868686"
            : insufficient
            ? "#BD0000"
            : bgColor
            ? bgColor
            : "#7D9C00",
          ...btnBgStyle,
        }}
      />
    </div>
  );
};

export default CommonButton;
