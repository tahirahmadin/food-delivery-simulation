import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Button, Fade, Typography, useMediaQuery } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import Slider from "react-slick";
import {
  team,
  web2Data,
  web3Data,
  payData,
  playData,
} from "./data/newHomeDate";
import ReactPlayer from "react-player";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowUp,
  Telegram,
} from "lucide-react";

import { restaurants, home_brands, chef_partners } from "./data/partnersData";
import Vimeo from "@u-wave/react-vimeo";
import { motion } from "framer-motion";
import CommonButton from "./CommonButton";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontFamily: "'Rubik'",
    fontWeight: 900,
    fontSize: 72,
    lineHeight: "100%",
    color: "#FDFFF5",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.down("lg")]: {
      fontSize: 60,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 48,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 40,
    },
  },
  heading2: {
    fontFamily: "'Rubik'",
    fontWeight: 900,
    fontSize: 140,
    lineHeight: "90%",
    [theme.breakpoints.down("lg")]: {
      fontSize: 120,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 72,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 56,
    },
    [theme.breakpoints.down(400)]: {
      fontSize: 50,
    },
  },
  sub_heading: {
    fontWeight: 600,
    fontSize: 22,
    lineHeight: "120%",
    textAlign: "center",
    color: "#FDFFF5",
    opacity: 0.8,
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.down("lg")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  description: {
    width: "100%",
    textAlign: "left",
    fontSize: 18,
    lineHeight: "130%",
    color: "rgba(253, 255, 245, 0.8)",
    [theme.breakpoints.down("lg")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  tab: {
    fontFamily: "Rubik",
    fontWeight: 600,
    fontSize: 20,
    textAlign: "center",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 20px",
    gap: "8px",
    width: "max-content",
    height: "52px",
    borderRadius: "16px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      padding: "5px 10px",
      height: "40px",
      borderRadius: "10px",
    },
  },
  roadmap_tab: {
    width: "100%",
    height: "80px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    boxShadow: "0px 8px 28px rgba(0, 0, 0, 0.25)",
    borderRadius: "24px 24px 0px 0px",
    fontFamily: "'Rubik'",
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "100%",
    [theme.breakpoints.down("md")]: { gap: "5px", fontSize: 20 },
    [theme.breakpoints.down("sm")]: {
      gap: "3px",
      fontSize: 12,
      padding: 0,
      height: "40px",
      borderRadius: "10px 10px 0 0",
    },
  },
  bg_orare: {
    background:
      "linear-gradient(106.65deg, rgba(255, 255, 255, 0.07) -16.06%, rgba(255, 255, 255, 0.02) 135.43%)",
    opacity: 0.4,
    filter: "blur(1px)",
    borderRadius: "50%",
    position: "absolute",
  },
}));

const TitleComponent = ({ title1, title2, style, titleStyle, badgeStyle }) => {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box
      style={{
        width: "fit-content",
        height: md ? (sm ? 120 : 140) : 190,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        position: "relative",
        maxWidth: "100%",
        ...style,
      }}
    >
      <Typography
        variant="inherit"
        className={classes.heading}
        style={{
          textAlign: "left",
          whiteSpace: "nowrap",
          ...titleStyle,
        }}
      >
        {title1}
      </Typography>
      <Box
        style={{
          width: "100%",
          maxWidth: "600px",
          height: md ? (sm ? 55 : 70) : 85,
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: md ? "10px" : "15px",
          padding: md ? "0 15px" : "0 25px",
          background: "#66FF99",
          border: "1px solid #66FF99",
          borderRadius: "12px",
          transform: sm ? "rotate(6deg)" : "rotate(8deg)",
          marginTop: sm ? "12px" : "17px",
          marginLeft: sm ? "-3%" : "-7%",
          ...badgeStyle,
        }}
      >
        <svg
          width={sm ? "22" : "31"}
          height={sm ? "23" : "32"}
          viewBox="0 0 31 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1353 30.9745C10.8074 30.8803 10.5141 30.6926 10.2913 30.4343C10.0685 30.176 9.92576 29.8584 9.88061 29.5203L9.09122 23.5486C8.74624 20.9245 7.41864 18.529 5.3764 16.8459L0.737164 13.0164C0.474212 12.799 0.280387 12.5097 0.179445 12.1837C0.0785038 11.8578 0.0748309 11.5095 0.168878 11.1816C0.262925 10.8536 0.450606 10.5602 0.708916 10.3373C0.967226 10.1144 1.28494 9.97167 1.62312 9.92668L7.59413 9.13677C10.2137 8.79149 12.6052 7.46645 14.2871 5.42844L18.121 0.782527C18.3385 0.519691 18.6279 0.325946 18.9537 0.224995C19.2795 0.124045 19.6277 0.120265 19.9557 0.214124C20.2837 0.308273 20.5772 0.495998 20.8003 0.754338C21.0233 1.01268 21.1663 1.33043 21.2116 1.66875L21.9997 7.64C22.3457 10.262 23.6735 12.6549 25.7151 14.3357L30.3602 18.1698C30.6232 18.3871 30.817 18.6765 30.9179 19.0024C31.0189 19.3283 31.0225 19.6766 30.9285 20.0046C30.8344 20.3326 30.6468 20.626 30.3885 20.8489C30.1301 21.0718 29.8124 21.2145 29.4743 21.2595L23.5036 22.0481C20.8803 22.3929 18.4856 23.7205 16.8031 25.7628L12.9705 30.4091C12.7525 30.6714 12.4629 30.8645 12.137 30.9649C11.8111 31.0653 11.463 31.0686 11.1353 30.9745Z"
            fill="#0000FF"
          />
        </svg>
        <Typography
          variant="inherit"
          className={classes.heading}
          style={{
            color: "#161810",
            whiteSpace: "nowrap",
          }}
        >
          {title2}
        </Typography>
        <svg
          width={sm ? "22" : "31"}
          height={sm ? "23" : "32"}
          viewBox="0 0 31 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1353 30.9745C10.8074 30.8803 10.5141 30.6926 10.2913 30.4343C10.0685 30.176 9.92576 29.8584 9.88061 29.5203L9.09122 23.5486C8.74624 20.9245 7.41864 18.529 5.3764 16.8459L0.737164 13.0164C0.474212 12.799 0.280387 12.5097 0.179445 12.1837C0.0785038 11.8578 0.0748309 11.5095 0.168878 11.1816C0.262925 10.8536 0.450606 10.5602 0.708916 10.3373C0.967226 10.1144 1.28494 9.97167 1.62312 9.92668L7.59413 9.13677C10.2137 8.79149 12.6052 7.46645 14.2871 5.42844L18.121 0.782527C18.3385 0.519691 18.6279 0.325946 18.9537 0.224995C19.2795 0.124045 19.6277 0.120265 19.9557 0.214124C20.2837 0.308273 20.5772 0.495998 20.8003 0.754338C21.0233 1.01268 21.1663 1.33043 21.2116 1.66875L21.9997 7.64C22.3457 10.262 23.6735 12.6549 25.7151 14.3357L30.3602 18.1698C30.6232 18.3871 30.817 18.6765 30.9179 19.0024C31.0189 19.3283 31.0225 19.6766 30.9285 20.0046C30.8344 20.3326 30.6468 20.626 30.3885 20.8489C30.1301 21.0718 29.8124 21.2145 29.4743 21.2595L23.5036 22.0481C20.8803 22.3929 18.4856 23.7205 16.8031 25.7628L12.9705 30.4091C12.7525 30.6714 12.4629 30.8645 12.137 30.9649C11.8111 31.0653 11.463 31.0686 11.1353 30.9745Z"
            fill="#0000FF"
          />
        </svg>
      </Box>
    </Box>
  );
};

const ExploreCard = ({
  img,
  title,
  description1,
  description2,
  description3,
  description4,
  color,
  url,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "286px",
        height: sm ? 200 : lg ? 300 : 345,
        background:
          "linear-gradient(241.27deg, rgba(255, 255, 255, 0.08) -5.59%, rgba(255, 255, 255, 0) 100%)",
        filter: "drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.25))",
        borderRadius: sm ? "20px" : "24px",
        border: `1px solid #686868`,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: sm ? "10px" : "20px",
        padding: sm ? "5% 5% 8%" : "75px 20px",
        transition: "all 0.3s ease",
        transform: "translateY(0)",
        "&:hover": {
          transform: sm ? "translateY(-20px)" : "translateY(-30px)",
          border: `1px solid #695204`,
          boxShadow: `0 3px 20px 1px #695204`,
        },
      }}
    >
      <Image
        src={img}
        alt="Foodverse"
        width={sm ? 120 : 200}
        height={sm ? 120 : 200}
        style={{
          minWidth: sm ? 120 : 200,
          minHeight: sm ? 120 : 200,
          top: sm ? -70 : -140,
          zIndex: 1,
          position: "absolute",
        }}
      />
      <Typography
        style={{
          width: "85%",
          maxWidth: sm ? 150 : "100%",
          fontFamily: "'Rubik'",
          fontWeight: 700,
          fontSize: sm ? 20 : 32,
          lineHeight: "100%",
          textAlign: "center",
          color: "#FF9CFF",
          margin: "auto auto 0",
        }}
      >
        {title}
      </Typography>
      <Typography
        className={classes.description}
        style={{
          textAlign: "center",
          height: sm ? 75 : 127,
        }}
      >
        {description1}
        <br />
        {description2}
        <br />
        {description3}
        <br />
        {description4}
      </Typography>
      {/* <Button
          style={{
            cursor: "pointer",
            minWidth: sm ? 24 : 32,
            width: sm ? 24 : 32,
            minHeight: sm ? 24 : 32,
            maxHeight: sm ? 24 : 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            border: "1px solid #a0a39a",
            backgroundColor: "transparent",
            marginTop: "auto",
            marginLeft: "auto",
            marginRight: sm ? "5px" : "10px",
          }}
        >
          <KeyboardArrowRight style={{ color: "#fff" }} />
        </Button> */}
    </Box>
  );
};

const StarSvg = ({ color, size, style }) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <svg
      className="star"
      width={size ? size : md ? "16" : "32"}
      height={size ? size : md ? "16" : "32"}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", zIndex: 0, ...style }}
    >
      <path
        d="M15.9972 32C15.6561 31.9998 15.3225 31.9002 15.0371 31.7134C14.7517 31.5265 14.5269 31.2605 14.3903 30.9479L11.9855 25.4252C10.9306 22.9978 8.99416 21.0611 6.56709 20.006L1.05202 17.6037C0.739339 17.4672 0.473261 17.2425 0.286397 16.957C0.0995322 16.6715 1.35528e-07 16.3377 1.32697e-07 15.9966C1.29867e-07 15.6554 0.0995321 15.3216 0.286397 15.0361C0.473261 14.7506 0.739339 14.5259 1.05202 14.3894L6.57399 11.9843C8.99687 10.9304 10.9305 8.99746 11.9855 6.57479L14.3903 1.05208C14.5269 0.739479 14.7517 0.473481 15.0371 0.286628C15.3225 0.0997753 15.6561 0.000168638 15.9972 -1.32703e-07C16.3385 7.57583e-05 16.6724 0.0996276 16.9581 0.286476C17.2437 0.473324 17.4687 0.73937 17.6055 1.05208L20.009 6.57479C21.0643 8.99981 23.0002 10.9341 25.426 11.9871L30.948 14.3922C31.2607 14.5287 31.5267 14.7534 31.7136 15.0389C31.9005 15.3243 32 15.6581 32 15.9993C32 16.3405 31.9005 16.6743 31.7136 16.9598C31.5267 17.2452 31.2607 17.47 30.948 17.6064L25.426 20.0102C22.9994 21.0647 21.0634 23.001 20.009 25.428L17.6055 30.9507C17.4683 31.2629 17.2431 31.5283 16.9575 31.7147C16.6719 31.901 16.3382 32.0002 15.9972 32Z"
        fill={color ? color : "#D1FF19"}
      />
    </svg>
  );
};

const Avatar = ({ img, style, imgStyle }) => (
  <Box
    style={{
      width: "172px",
      height: "172px",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...style,
    }}
  >
    <Image
      src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/avatar_frame.svg"
      alt="FoodVerse"
      width={172}
      height={172}
      style={{ width: "100%", height: "100%" }}
    />
    <Image
      src={img}
      alt="FoodVerse"
      width={142}
      height={142}
      style={{
        position: "absolute",
        borderRadius: "50%",
        ...imgStyle,
      }}
    />
  </Box>
);

function NextArrow(props) {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Button
        style={{
          position: "absolute",
          top: -5,
          right: md ? -5 : -15,
          minWidth: md ? 30 : 40,
          maxWidth: md ? 30 : 40,
          minHeight: md ? 30 : 40,
          maxHeight: md ? 30 : 40,
          background: "#2B2D25",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          filter: "drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.25))",
          border: "1px solid #fff",
          zIndex: 5,
        }}
      >
        <KeyboardArrowRight style={{ fontSize: 32, color: "#fff" }} />
      </Button>
    </div>
  );
}

function PrevArrow(props) {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Button
        style={{
          position: "absolute",
          top: -5,
          left: md ? -5 : -15,
          minWidth: md ? 30 : 40,
          maxWidth: md ? 30 : 40,
          minHeight: md ? 30 : 40,
          maxHeight: md ? 30 : 40,
          background: "#2B2D25",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          filter: "drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.25))",
          border: "1px solid #fff",
          zIndex: 5,
        }}
      >
        <KeyboardArrowLeft style={{ fontSize: 32, color: "#fff" }} />
      </Button>
    </div>
  );
}

const NewHomePage = () => {
  const classes = useStyles();

  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down(380));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));

  const [playVideo, setPlayVideo] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState(1);
  const [roadmapTab, setRoadmapTab] = useState(1);
  const [emailVerifiTried, setEmailVerifiTried] = useState(false);
  const [tvl, setTvl] = useState(0);
  const [staked, setStaked] = useState(0);
  const [web3Toggle, setWeb3Toggle] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: sm ? 2 : lg ? 4 : 6,
    rows: sm ? 2 : 1,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  useEffect(() => setLoaded(true), []);

  return (
    <>
      {loaded && (
        <Box
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#161810",
            position: "relative",
          }}
        >
          <Box
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              zIndex: 2,
              overflow: "hidden",
            }}
          >
            <Box style={{ width: "100%", background: "#000" }}>
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: sm ? "column" : "row",
                  gap: sm ? "25px" : "5px",
                  padding: md ? "50px 5% 0" : lg ? "7% 5% 0" : "7% 7% 0",
                  position: "relative",
                  maxWidth: sm ? "100%" : 1600,
                  margin: "0 auto",
                }}
              >
                <Box
                  style={{
                    width: "100%",
                    position: "relative",
                    maxWidth: sm ? 370 : "100%",
                    margin: "0 auto",
                    zIndex: 2,
                  }}
                >
                  <Box style={{ display: "flex", gap: "25px" }}>
                    <Image
                      src="/gobbl_logo.svg"
                      alt="FoodVerse Gobbl"
                      width={md ? 140 : 260}
                      height={md ? 60 : 100}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                    <Box className="banner_text" />
                  </Box>
                  <Typography
                    style={{
                      fontWeight: 500,
                      fontSize: md ? 18 : lg ? 20 : 25,
                      lineHeight: "110%",
                      color: "#FDFFF5",
                      maxWidth: 570,
                      marginTop: "25px",
                    }}
                  >
                    Powering the Food3 revolution with real-world perks for
                    $GOBBL Holders
                  </Typography>
                  <Link
                    href="https://t.me/GobblUpBot"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <CommonButton
                      style={{
                        maxWidth: 240,
                        margin: md ? "35px 0 50px" : "50px 0 75px",
                      }}
                    >
                      START GOBBLING
                      <Box
                        style={{
                          width: 25,
                          height: 25,
                          borderRadius: "50%",
                          background: "#000",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Telegram style={{ fill: "#fff", fontSize: 16 }} />
                      </Box>
                    </CommonButton>
                  </Link>
                  <StarSvg
                    size={md ? 12 : 20}
                    color="#66FF99"
                    style={{
                      top: "-15%",
                      left: sm ? "-3%" : "-8%",
                    }}
                  />
                </Box>
                <Box
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "relative",
                  }}
                >
                  <motion.div
                    initial={{
                      x: 200,
                    }}
                    animate={{
                      x: 0,
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.5,
                      duration: 1.5,
                    }}
                    style={{
                      marginTop: "auto",
                      zIndex: 1,
                      position: "relative",
                    }}
                  >
                    <motion.div
                      initial={{
                        x: -5,
                      }}
                      animate={{
                        x: 5,
                      }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        type: "spring",
                        bounce: 0.5,
                        duration: 1.5,
                      }}
                    >
                      <Image
                        src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/banner_gobbl.png"
                        alt="FoodVerse Gobbl"
                        width={560}
                        height={1190}
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </motion.div>
                  </motion.div>
                  <Box
                    style={{
                      position: "absolute",
                      top: sm ? -110 : -150,
                      right: sm ? -50 : -90,
                      width: sm ? 350 : 650,
                      height: sm ? 350 : 650,
                      background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(46, 73, 211, 0.6) 0%, rgba(84, 56, 211, 0) 100%)",
                      zIndex: 0,
                    }}
                  />
                  <StarSvg
                    size={md ? 10 : 16}
                    color="#66FF99"
                    style={{
                      top: "-25%",
                      right: sm ? 0 : "-8%",
                      animationDuration: "0.8s",
                    }}
                  />
                  <StarSvg
                    size={md ? 20 : 28}
                    style={{
                      top: 0,
                      right: sm ? "10%" : "5%",
                      animationDuration: "1.2s",
                    }}
                  />
                  <StarSvg
                    size={md ? 12 : 20}
                    style={{
                      bottom: "45%",
                      left: sm ? "15%" : "22%",
                      animationDuration: "0.6s",
                    }}
                  />
                </Box>
                <Box
                  style={{
                    position: "absolute",
                    zIndex: 3,
                    width: "100%",
                    height: 0,
                    bottom: sm ? -1 : -3,
                    left: 0,
                    borderBottom: sm ? "1px solid #fff" : "3px solid #fff",
                  }}
                />
              </Box>
              <ReactPlayer
                url={
                  sm
                    ? "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/videos/homepage_banner_mobile.webm"
                    : "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/videos/homepage_banner.mp4"
                }
                loop={true}
                muted={true}
                playing={true}
                width="100%"
                height="100%"
                style={{
                  position: "relative",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />
            </Box>
            {/* <object
              type="image/svg+xml"
              data="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/home_banner.svg"
              style={{
                width: "100%",
                // height: sm ? 170 : "calc(100vh - 80px)",
              }}
            /> */}
            {/* {loaded && (
              <Box
                style={{
                  position: "absolute",
                  bottom: md ? "10%" : "20%",
                  left: md ? "30%" : "38%",
                }}
              >
                <Link href="/airdrop" style={{ textDecoration: "none" }}>
                  <CommonButton
                    style={{
                      height: md ? 36 : 60,
                      maxWidth: 560,
                    }}
                    btnStyle={{
                      fontSize: md ? 14 : 30,
                      borderRadius: md ? "16px" : "20px",
                    }}
                    btnBgStyle={{ borderRadius: md ? "16px" : "20px" }}
                  >
                    JOIN $GOBBL AIRDROP
                  </CommonButton>
                </Link>
              </Box>
            )} */}
          </Box>

          {/* first_foodchain */}
          <Box
            style={{
              width: "100%",
              height: "100%",
              background: "#161810",
              position: "relative",
              zIndex: 2,
              overflow: "hidden",
            }}
          >
            <Image
              src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/noisebg.png"
              alt="FoodVerse"
              width={2000}
              height={2000}
              style={{
                pointerEvents: "none",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "100%",
              }}
            />
            <Box
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                background: "#000",
                padding: md ? (sm ? "50px 5%" : "75px 5%") : "7% 5% 5%",
              }}
            >
              <Box
                style={{
                  width: "100%",
                  maxWidth: "1440px",
                  margin: "0 auto",
                  display: "flex",
                  alignItems: sm ? "flex-start" : "flex-end",
                  justifyContent: "space-between",
                  flexDirection: sm ? "column" : "row",
                  gap: sm ? "25px" : "75px",
                  position: "relative",
                }}
              >
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: sm ? 0.4 : 0.8 }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "absolute",
                    top: md ? -30 : -30,
                    left: md ? "-30%" : "-100px",
                    zIndex: 0,
                  }}
                >
                  <motion.div
                    variants={{
                      offscreen: {
                        x: -200,
                        y: -200,
                      },
                      onscreen: {
                        x: -30,
                        y: -70,
                        transition: {
                          type: "spring",
                          bounce: 0.5,
                          duration: 1.5,
                        },
                      },
                    }}
                  >
                    <Image
                      src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/shushi.png"
                      alt="FoodVerse"
                      width={sm ? 220 : 300}
                      height={sm ? 220 : 300}
                      style={{
                        objectFit: "contain",
                        pointerEvents: "none",
                      }}
                    />
                  </motion.div>
                </motion.div>
                <Image
                  src="/newhome/food3_network.svg"
                  alt="FoodVerse"
                  width={600}
                  height={450}
                  style={{
                    pointerEvents: "none",
                    userSelect: "none",
                    width: sm ? "100%" : "50%",
                    maxHeight: 290,
                    height: "100%",
                    zIndex: 0,
                  }}
                />
                <Box style={{ width: sm ? "100%" : "50%" }}>
                  <Typography
                    variant="inherit"
                    className={classes.sub_heading}
                    style={{
                      width: "100%",
                      maxWidth: 450,
                      textAlign: "left",
                      fontWeight: 400,
                    }}
                  >
                    Gobbl is building the Food3 network to turn your digital
                    wallet into a food passport IRL.
                    <br />
                    <br />
                    Discover epic restaurants, pay with crypto, access VIP food
                    events, & compete in food quests. Ready to feast like a
                    Gobblin?
                  </Typography>
                </Box>
                <StarSvg
                  style={{ top: 0, right: 0, animationDuration: "1.2s" }}
                />
                <StarSvg
                  size={md ? 12 : 20}
                  color="#66FF99"
                  style={{
                    top: sm ? "-10%" : "-15%",
                    right: "8%",
                    animationDuration: "0.8s",
                  }}
                />
                <StarSvg
                  size={md ? 12 : 20}
                  color="#66FF99"
                  style={{ top: "-25%", left: "32%" }}
                />
                <StarSvg
                  size={md ? 12 : 20}
                  color="#66FF99"
                  style={{ top: "50%", left: "-1%", animationDuration: "0.6s" }}
                />
                <StarSvg
                  style={{
                    bottom: "-30%",
                    left: "25%",
                    animationDuration: "1.2s",
                  }}
                />
                <StarSvg
                  size={md ? 12 : 20}
                  color="#66FF99"
                  style={{
                    bottom: "-84%",
                    left: "-3%",
                    animationDuration: "0.8s",
                  }}
                />
              </Box>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  bottom: md ? -60 : -140,
                  right: md ? 0 : -15,
                  zIndex: 0,
                }}
              >
                <motion.div
                  variants={{
                    offscreen: {
                      x: 280,
                      y: -280,
                    },
                    onscreen: {
                      y: 0,
                      x: 0,
                      transition: {
                        type: "spring",
                        bounce: 0.5,
                        duration: 1.5,
                      },
                    },
                  }}
                >
                  <Image
                    src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/shushi_plate.svg"
                    alt="FoodVerse"
                    width={md ? 100 : lg ? 220 : 290}
                    height={md ? 100 : lg ? 220 : 290}
                    style={{
                      objectFit: "contain",
                      pointerEvents: "none",
                    }}
                  />
                </motion.div>
              </motion.div>
            </Box>
            {/* eat */}
            <Box
              style={{
                width: "100%",
                height: "100%",
                background: "#161810",
                position: "relative",
                zIndex: -1,
                overflow: "hidden",
              }}
            >
              <Image
                src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/noisebg.png"
                alt="FoodVerse"
                width={2000}
                height={2000}
                style={{
                  pointerEvents: "none",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
              <Box
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  padding: md ? (sm ? "50px 0" : "75px 5%") : "7%",
                }}
              >
                <Box
                  style={{
                    width: "100%",
                    maxWidth: "1440px",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: sm ? "25px" : "75px",
                    position: "relative",
                  }}
                >
                  <Box
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: sm ? "flex-start" : "flex-end",
                      justifyContent: "center",
                      gap: sm ? "3px" : "5px",
                      padding: sm ? "0 5%" : 0,
                      flexDirection: sm ? "column" : "row",
                    }}
                  >
                    <Typography
                      className={classes.heading2}
                      style={{ color: "#64FF99", height: sm ? 45 : 115 }}
                    >
                      EAT
                    </Typography>
                    <Typography
                      className={classes.sub_heading}
                      style={{
                        maxWidth: 390,
                        textAlign: "left",
                      }}
                    >
                      at the Earth's most coveted tables:
                      <br />
                      from rising chefs to Michelin stars
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="/newhome/frenchFries.png"
                      alt="FoodVerse"
                      width={1440}
                      height={517}
                      style={{
                        pointerEvents: "none",
                        userSelect: "none",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* enter_foodverse */}
          <Box
            style={{
              width: "100%",
              height: "100%",
              background: "#000",
              position: "relative",
              zIndex: 2,
              overflow: "hidden",
            }}
          >
            <Image
              src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/noisebg.png"
              alt="FoodVerse"
              width={2000}
              height={2000}
              style={{
                pointerEvents: "none",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "100%",
              }}
            />
            <Box
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                padding: md ? (sm ? "50px 5%" : "75px 5%") : "7% 7% 7%",
              }}
            >
              <Box
                style={{
                  width: "100%",
                  maxWidth: "1440px",
                  margin: "0 auto",
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: sm ? "25px" : "60px",
                  flexDirection: sm ? "column" : "row",
                }}
              >
                <Box
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <Typography
                    className={classes.heading2}
                    style={{
                      color: "#FAFF00",
                    }}
                  >
                    PAY
                  </Typography>
                  <Typography
                    className={classes.sub_heading}
                    style={{ textAlign: "left", lineHeight: "140%" }}
                  >
                    with GOBBL PAY- the {!md && <br />}
                    future of restaurant {!md && <br />}
                    payments
                  </Typography>
                </Box>
                <Box
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: md ? "10px" : "25px",
                  }}
                >
                  {payData.map((item, i) => (
                    <Box
                      key={i}
                      style={{
                        width: "100%",
                        height: md ? 90 : lg ? 100 : 115,
                        background: "#000000",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        boxShadow: "0px 11px 11px rgba(0, 0, 0, 0.55)",
                        borderRadius: md ? "18px" : "25px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: lg ? "15px" : "25px",
                      }}
                    >
                      <Typography
                        style={{
                          fontWeight: 400,
                          fontSize: md ? 20 : lg ? 24 : 28,
                          textTransform: "uppercase",
                          lineHeight: "140%",
                          color: "#FAFF00",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography className={classes.description}>
                        {item.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <StarSvg
                  style={{
                    top: "-20%",
                    left: "0%",
                    animationDuration: "1.2s",
                  }}
                />
              </Box>
              {!md && (
                <img
                  src="/newhome/pay_gobbl.png"
                  style={{
                    width: 700,
                    height: 320,
                    objectFit: "contain",
                    maxWidth: "50%",
                    position: "absolute",
                    left: "-2.5%",
                    bottom: "-8%",
                  }}
                />
              )}
            </Box>
          </Box>

          {/* experience */}
          <Box
            style={{
              width: "100%",
              height: "100%",
              background: "#161810",
              position: "relative",
              zIndex: 2,
              overflow: "hidden",
            }}
          >
            <Image
              src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/noisebg.png"
              alt="FoodVerse"
              width={2000}
              height={2000}
              style={{
                pointerEvents: "none",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "100%",
              }}
            />
            <Box
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                padding: md ? (sm ? "50px 5%" : "75px 5%") : "7% 7% 7%",
              }}
            >
              <Box
                style={{
                  width: "100%",
                  maxWidth: "1440px",
                  margin: "0 auto",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: sm ? "5px" : "75px",
                }}
              >
                <Box
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: md ? "flex-start" : "flex-end",
                    justifyContent: "space-between",
                    flexDirection: md ? "column" : "row",
                    gap: md ? "10px" : "25px",
                  }}
                >
                  <Box style={{ width: "100%" }}>
                    <Typography
                      className={classes.heading2}
                      style={{
                        color: "#FF9CFF",
                      }}
                    >
                      PLAY
                    </Typography>
                    <Typography
                      className={classes.sub_heading}
                      style={{ textAlign: "left", maxWidth: 540 }}
                    >
                      Next-gen Web3 adventures. Join millions of gamers to
                      compete for virtual glory & real rewards!
                    </Typography>
                  </Box>
                  <Link
                    href="https://t.me/GobblUpBot"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      width: "100%",
                      maxWidth: md ? 220 : 300,
                    }}
                  >
                    <CommonButton style={{ maxWidth: 300 }}>
                      START PLAYING
                      <Box
                        style={{
                          width: 25,
                          height: 25,
                          borderRadius: "50%",
                          background: "#000",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Telegram style={{ fill: "#fff", fontSize: 16 }} />
                      </Box>
                    </CommonButton>
                  </Link>
                </Box>
                <Box
                  style={{
                    width: "100%",
                    position: "relative",
                    display: sm ? "grid" : "flex",
                    gridTemplateColumns: "1fr 1fr",
                    gap: md ? "10px" : "25px",
                    paddingTop: "25px",
                  }}
                >
                  {playData.map((item, i) => (
                    <Box
                      key={i}
                      style={{
                        width: "100%",
                        background: "#000000",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        boxShadow: "0px 11px 11px rgba(0, 0, 0, 0.55)",
                        borderRadius: md ? "16px" : "25px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: lg ? (sm ? "10px" : "15px") : "25px",
                      }}
                    >
                      <img
                        src={`/newhome/play${i + 1}.png`}
                        style={{
                          width: "100%",
                          objectFit: "contain",
                          marginBottom: "15px",
                        }}
                      />
                      <Typography
                        style={{
                          fontWeight: 400,
                          fontSize: md ? 20 : lg ? 24 : 28,
                          textTransform: "uppercase",
                          lineHeight: "140%",
                          color: "#FF9CFF",
                          textAlign: "center",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        className={classes.description}
                        style={{
                          textAlign: "center",
                          maxWidth: md ? "100%" : 210,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
              {/* <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                style={{
                  position: "absolute",
                  top: sm ? 0 : 15,
                  right: sm ? -10 : 0,
                  zIndex: -1,
                }}
              >
                <motion.div
                  variants={{
                    offscreen: {
                      x: 250,
                    },
                    onscreen: {
                      x: 0,
                      transition: {
                        type: "spring",
                        bounce: 0.5,
                        duration: 1.5,
                      },
                    },
                  }}
                >
                  <Image
                    src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/pizza1.svg"
                    alt="FoodVerse"
                    width={sm ? 100 : 180}
                    height={400}
                    style={{
                      pointerEvents: "none",
                    }}
                  />
                </motion.div>
              </motion.div> */}
            </Box>
          </Box>

          {/* meet_gobbl */}
          <Box
            style={{
              width: "100%",
              height: "100%",
              background: "#161810",
              position: "relative",
              zIndex: 2,
              overflow: "hidden",
            }}
          >
            <Image
              src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/noisebg.png"
              alt="FoodVerse"
              width={2000}
              height={2000}
              style={{
                pointerEvents: "none",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "50%",
              }}
            />
            <Image
              src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/noisebg.png"
              alt="FoodVerse"
              width={2000}
              height={2000}
              style={{
                pointerEvents: "none",
                objectFit: "cover",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "50%",
              }}
            />
            <Box
              style={{
                width: "100%",
                height: "100%",
                padding: md ? (sm ? "50px 5%" : "75px 5%") : "7%",
                position: "relative",
                zIndex: 2,
              }}
            >
              <Box
                style={{
                  width: "100%",
                  maxWidth: "1440px",
                  margin: "0 auto",
                  // minHeight: "100vh",
                  height: "100%",
                  position: "relative",
                }}
              >
                <Box
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: sm ? "flex-start" : "space-between",
                    flexDirection: sm ? "column" : "row",
                    gap: "10px",
                    position: "relative",
                  }}
                >
                  <TitleComponent
                    title1="Meet"
                    title2="$GOBBL"
                    badgeStyle={{
                      transform: sm ? "rotate(-5.5deg)" : "rotate(-6deg)",
                      marginTop: sm ? "-10px" : "-23px",
                      marginLeft: "1%",
                      zIndex: 1,
                    }}
                  />
                  <Typography
                    variant="inherit"
                    className={classes.sub_heading}
                    style={{
                      maxWidth: 580,
                      textAlign: "left",
                      fontWeight: 400,
                      marginTop: sm ? "-25px" : "35px",
                    }}
                  >
                    The powerhouse token fueling the future of Food x Web3.
                    Stake, play, feast and earn – all in one revolutionary
                    ecosystem!
                  </Typography>
                </Box>
                <Box
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: sm && "25px",
                  }}
                >
                  {/* {md && (
                    <Image
                      src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/tokenomics_mobile.png"
                      alt="FoodVerse"
                      width={1150}
                      height={600}
                    />
                  )}
                  {!md && ( */}
                  <Image
                    src="/newhome/tokenomics.png"
                    alt="FoodVerse"
                    width={1150}
                    height={600}
                  />
                  {/* )} */}
                </Box>
                <Image
                  src="/gobbl_token.png"
                  alt="FoodVerse"
                  width={sm ? 36 : 72}
                  height={sm ? 36 : 72}
                  className={classes.bg_orare}
                  style={{
                    top: sm ? "10%" : "20%",
                    right: sm ? "10%" : "15%",
                  }}
                />
                <Image
                  src="/gobbl_token.png"
                  alt="FoodVerse"
                  width={sm ? 28 : 56}
                  height={sm ? 28 : 56}
                  className={classes.bg_orare}
                  style={{
                    opacity: 0.2,
                    top: "-5%",
                    left: "18%",
                  }}
                />
                {!sm && (
                  <Image
                    src="/gobbl_token.png"
                    alt="FoodVerse"
                    width={96}
                    height={96}
                    className={classes.bg_orare}
                    style={{
                      opacity: 0.6,
                      top: "18%",
                      left: "-3%",
                    }}
                  />
                )}
                {!sm && (
                  <Image
                    src="/gobbl_token.png"
                    alt="FoodVerse"
                    width={72}
                    height={72}
                    className={classes.bg_orare}
                    style={{
                      opacity: 0.4,
                      bottom: "-15%",
                      left: "12%",
                    }}
                  />
                )}
                <Image
                  src="/gobbl_token.png"
                  alt="FoodVerse"
                  width={sm ? 28 : 56}
                  height={sm ? 28 : 56}
                  className={classes.bg_orare}
                  style={{
                    opacity: 0.2,
                    bottom: "-5%",
                    left: sm ? "-5%" : "32%",
                  }}
                />
                <Image
                  src="/gobbl_token.png"
                  alt="FoodVerse"
                  width={sm ? 48 : 96}
                  height={sm ? 48 : 96}
                  className={classes.bg_orare}
                  style={{
                    opacity: 0.6,
                    bottom: "-15%",
                    right: 0,
                  }}
                />
                {!sm && (
                  <Image
                    src="/gobbl_token.png"
                    alt="FoodVerse"
                    width={56}
                    height={56}
                    className={classes.bg_orare}
                    style={{
                      opacity: 0.2,
                      top: "40%",
                      right: "0%",
                    }}
                  />
                )}
                <Box
                  style={{
                    position: "absolute",
                    width: lg ? (sm ? 160 : 250) : 318,
                    height: lg ? (sm ? 160 : 250) : 318,
                    top: "-20%",
                    left: "-20%",
                    background: "#C9F41B",
                    opacity: 0.6,
                    filter: "blur(212px)",
                  }}
                />
              </Box>
            </Box>
            {/* slider */}
            <Box
              style={{
                width: "100%",
                height: md ? (sm ? 32 : 46) : 66,
                background: "#5438D3",
                position: "relative",
                zIndex: 2,
                pointerEvents: "none",
              }}
            >
              <Image
                src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/noisebg.png"
                alt="FoodVerse"
                width={1440}
                height={md ? (sm ? 32 : 46) : 66}
                style={{
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 3,
                }}
              />
              <Box
                style={{
                  width: "100%",
                  // maxWidth: "1440px",
                  // margin: "0 auto",
                  height: "100%",
                  overflow: "hidden",
                  position: "relative",
                  zIndex: 4,
                }}
              >
                <Box
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: md ? "10px 0" : "15px 0",
                    overflow: "visible",
                  }}
                  className="home_slider"
                >
                  {[...Array(20)]?.map((emoji, i) => (
                    <Box
                      key={i}
                      style={{
                        minWidth: "100%",
                        fontFamily: "'Rubik'",
                        fontWeight: 900,
                        fontSize: md ? (sm ? 17 : 24) : 30,
                        color: "#FF9CFF",
                        display: "flex",
                        alignItems: "center",
                        gap: md ? "25px" : "50px",
                        whiteSpace: "nowrap",
                        fontFamily: "'Rubik'",
                        fontWeight: 900,
                        background:
                          "linear-gradient(254.51deg, #D1FF19 5.63%, #66FF99 62.41%, #0000FF 116.96%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                      }}
                    >
                      <span>AIRDROP LIVE</span> <span>AIRDROP LIVE</span>
                      <span>AIRDROP LIVE</span> <span>AIRDROP LIVE</span>
                      {!lg && <span>AIRDROP LIVE</span>}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box
              style={{
                width: "100%",
                height: "100%",
                padding: md ? (sm ? "50px 5%" : "75px 5%") : "7%",
                position: "relative",
                zIndex: 2,
                background:
                  "linear-gradient(254.51deg, #00CCCC 5.63%, #009999 61.19%, #6666FF 116.96%)",
              }}
            >
              <Box
                style={{
                  width: "100%",
                  maxWidth: "1440px",
                  margin: "0 auto",
                  // minHeight: "100vh",
                  height: "100%",
                  position: "relative",
                }}
              >
                <Box
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: sm ? "column" : "row",
                    gap: md && "15px",
                  }}
                >
                  <Box style={{ width: "100%" }}>
                    <Typography
                      style={{
                        fontFamily: "'Rubik'",
                        fontWeight: 900,
                        fontSize: md ? 48 : lg ? 60 : 80,
                        lineHeight: "120%",
                        color: "#64FF99",
                      }}
                    >
                      500,000,000
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "'Rubik'",
                        fontWeight: 900,
                        fontSize: md ? 28 : lg ? 36 : 50,
                        lineHeight: "100%",
                        color: "#FDFFF5",
                        display: "flex",
                        gap: md ? "3px" : "7px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      $GOBBL AIRDROP
                      <span
                        style={{
                          width: md ? 80 : lg ? 100 : 125,
                          height: md ? 36 : lg ? 48 : 62,
                          fontFamily: "'Rubik'",
                          fontWeight: 900,
                          fontSize: md ? 20 : lg ? 32 : 40,
                          textAlign: "center",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#FFFFFF",
                          background: "#ff181a",
                          borderRadius: md ? "8px" : lg ? "12px" : "16px",
                          transform: "rotate(-10deg)",
                          marginTop: md ? "-15px" : lg ? "-18px" : "-22px",
                          zIndex: -1,
                        }}
                      >
                        LIVE
                      </span>
                    </Typography>
                    <Typography
                      className={classes.sub_heading}
                      style={{
                        textAlign: "left",
                        opacity: 0.8,
                        marginTop: sm ? "15px" : "50px",
                      }}
                    >
                      Don't Just Eat the Food - Own the Network.
                      <br />
                      <br />
                      We're airdropping 500M $GOBBL - 5% of our total supply -
                      to early Gobblins. Game and claim your slice of the
                      future!
                    </Typography>
                    <Link
                      href="/airdrop/tasks"
                      style={{ textDecoration: "none" }}
                    >
                      <CommonButton
                        style={{
                          height: md ? 50 : 60,
                          maxWidth: 560,
                          marginTop: md ? "25px" : "35px",
                        }}
                        btnStyle={{
                          fontSize: md ? 24 : 30,
                          borderRadius: md ? "16px" : "20px",
                        }}
                        btnBgStyle={{ borderRadius: md ? "16px" : "20px" }}
                      >
                        JOIN $GOBBL AIRDROP
                      </CommonButton>
                    </Link>
                  </Box>
                  <Box
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <motion.div
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 1 }}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        zIndex: 1,
                        marginTop: sm ? "15px" : 0,
                      }}
                    >
                      <motion.div
                        variants={{
                          offscreen: {
                            y: 200,
                          },
                          onscreen: {
                            y: 0,
                            transition: {
                              type: "spring",
                              bounce: 0.5,
                              duration: 1.5,
                            },
                          },
                        }}
                      >
                        <motion.div
                          initial={{
                            rotate: -5,
                          }}
                          animate={{
                            rotate: 0,
                          }}
                          transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            type: "spring",
                            bounce: 0.65,
                            duration: 1.5,
                          }}
                        >
                          <Image
                            src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/gobbl_winner.png"
                            alt="FoodVerse"
                            width={sm ? 300 : 420}
                            height={sm ? 300 : 420}
                          />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </Box>
                </Box>
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                  style={{
                    position: "absolute",
                    top: sm ? -135 : -320,
                    left: sm ? -15 : -100,
                    zIndex: 5,
                  }}
                >
                  <motion.div
                    variants={{
                      offscreen: {
                        x: -350,
                        y: 100,
                      },
                      onscreen: {
                        x: 0,
                        y: 0,
                        transition: {
                          type: "spring",
                          bounce: 0.5,
                          duration: 1.5,
                        },
                      },
                    }}
                  >
                    <Image
                      src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/launching_soon.svg"
                      alt="FoodVerse"
                      width={sm ? 150 : 350}
                      height={sm ? 150 : 350}
                      style={{
                        pointerEvents: "none",
                      }}
                    />
                  </motion.div>
                </motion.div>
              </Box>
              <Box
                style={{
                  width: "634px",
                  height: md ? 150 : 300,
                  background: "#5438D3",
                  position: "absolute",
                  bottom: md ? "-16%" : lg ? "-35%" : "-27%",
                  left: "50%",
                  transform: "rotate(-15deg)",
                  width: "100%",
                }}
              />
            </Box>
          </Box>

          {/* food_partners */}
          <Box
            style={{
              width: "100%",
              height: "100%",
              background: "#161810",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Image
              src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/noisebg.png"
              alt="FoodVerse"
              width={2000}
              height={2000}
              style={{
                pointerEvents: "none",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "50%",
                // zIndex: 3
              }}
            />
            <Image
              src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/noisebg.png"
              alt="FoodVerse"
              width={2000}
              height={2000}
              style={{
                pointerEvents: "none",
                objectFit: "cover",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "50%",
                // zIndex: 3,
              }}
            />
            <Box
              style={{
                width: "100%",
                height: "100%",
                padding: md ? (sm ? "50px 5%" : "75px 5%") : "7%",
                position: "relative",
                zIndex: 2,
                overflow: "hidden",
              }}
            >
              <Box
                style={{
                  width: "100%",
                  maxWidth: "1440px",
                  margin: "0 auto",
                  height: "100%",
                  position: "relative",
                }}
              >
                <Box
                  style={{
                    width: sm ? "100%" : "90%",
                    display: "flex",
                    alignItems: sm ? "flex-start" : "center",
                    justifyContent: "space-between",
                    flexDirection: sm ? "column-reverse" : "row",
                    gap: "10px",
                    position: "relative",
                    margin: "0 auto",
                  }}
                >
                  <Typography
                    variant="inherit"
                    className={classes.sub_heading}
                    style={{
                      maxWidth: 420,
                      textAlign: "left",
                      fontWeight: 400,
                      marginBottom: sm ? "15px" : 0,
                    }}
                  >
                    Bringing the finest to your table- {!sm && <br />}
                    from top brands to celebrity chefs, {!sm && <br />}
                    it’s all happening in the Foodverse.
                  </Typography>
                  <TitleComponent
                    title1="Food"
                    title2="Partners"
                    titleStyle={{
                      paddingLeft: sm && "25px",
                    }}
                    style={{
                      alignItems: sm ? "flex-start" : "center",
                    }}
                    badgeStyle={{
                      transform: sm ? "rotate(-5.5deg)" : "rotate(5deg)",
                      marginTop: sm ? "-6px" : "-4px",
                      marginRight: "auto",
                      zIndex: 1,
                    }}
                  />
                </Box>
                <Box style={{ width: "100%", padding: "5% 0 0" }}>
                  <Box
                    style={{
                      width: "100%",
                      maxWidth: "678px",
                      height: md ? 60 : 84,
                      boxSizing: "border-box",
                      background:
                        "linear-gradient(254.51deg, #00CCCC 5.63%, #009999 61.19%, #6666FF 116.96%)",
                      borderRadius: sm ? "12px" : "16px",
                      padding: "1px",
                      margin: "0 auto",
                    }}
                  >
                    <Box
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "#2B2D25",
                        borderRadius: sm ? "12px" : "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: sm ? 0 : "10px",
                        padding: sm ? "0 7px" : "0 15px",
                      }}
                    >
                      <Button
                        className={classes.tab}
                        style={{
                          fontWeight: tab === 1 ? 800 : 600,
                          opacity: tab === 1 ? 1 : 0.56,
                          background: tab === 1 ? "#D1FF19" : "transparent",
                          color: tab === 1 ? "#161810" : "#FDFFF5",
                        }}
                        onClick={() => setTab(1)}
                      >
                        BRANDS
                      </Button>
                      <Button
                        className={classes.tab}
                        style={{
                          fontWeight: tab === 2 ? 800 : 600,
                          opacity: tab === 2 ? 1 : 0.56,
                          background: tab === 2 ? "#D1FF19" : "transparent",
                          color: tab === 2 ? "#161810" : "#FDFFF5",
                        }}
                        onClick={() => setTab(2)}
                      >
                        CHEFS
                      </Button>
                      <Button
                        className={classes.tab}
                        style={{
                          fontWeight: tab === 3 ? 800 : 600,
                          opacity: tab === 3 ? 1 : 0.56,
                          background: tab === 3 ? "#D1FF19" : "transparent",
                          color: tab === 3 ? "#161810" : "#FDFFF5",
                        }}
                        onClick={() => setTab(3)}
                      >
                        RESTAURANTS
                      </Button>
                      <Button
                        className={classes.tab}
                        style={{
                          opacity: 0.56,
                          background: "transparent",
                          color: "#FDFFF5",
                        }}
                        onClick={() => push("/partners")}
                      >
                        VIEW ALL
                      </Button>
                    </Box>
                  </Box>

                  {tab === 1 && (
                    <Box
                      style={{
                        width: "100%",
                        paddingTop: "5%",
                        display: "grid",
                        gridTemplateColumns: md
                          ? "repeat(auto-fill,minmax(160px, 1fr))"
                          : "repeat(auto-fill,minmax(175px, 1fr))",
                        columnGap: md ? "15px" : "50px",
                        rowGap: md ? "25px" : "35px",
                      }}
                    >
                      {home_brands.map((brand, i) => (
                        <Box
                          key={i}
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            gap: "7px",
                          }}
                        >
                          <Box
                            style={{
                              boxSizing: "border-box",
                              background:
                                "linear-gradient(254.51deg, #00CCCC 5.63%, #009999 61.19%, #6666FF 116.96%)",
                              borderRadius: sm ? "20px" : "24px",
                              padding: "1px",
                            }}
                          >
                            <Image
                              src={brand.image}
                              alt="FoodVerse"
                              width={170}
                              height={175}
                              style={{
                                borderRadius: sm ? "20px" : "24px",
                              }}
                            />
                          </Box>
                          <Typography
                            style={{
                              fontFamily: "Karla",
                              fontWeight: 700,
                              fontSize: sm ? 16 : 20,
                              lineHeight: "120%",
                              textAlign: "center",
                              color: "#FDFFF5",
                              opacity: 0.8,
                            }}
                          >
                            {brand.description}
                            <br />
                            <span
                              style={{
                                fontSize: 18,
                                fontWeight: 500,
                              }}
                            >
                              {brand.description2}
                            </span>
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}
                  {tab === 2 && (
                    <Box
                      style={{
                        width: "100%",
                        paddingTop: "5%",
                        display: "grid",
                        gridTemplateColumns: md
                          ? "repeat(auto-fill,minmax(160px, 1fr))"
                          : "repeat(auto-fill,minmax(175px, 1fr))",
                        columnGap: md ? "15px" : "50px",
                        rowGap: md ? "25px" : "35px",
                      }}
                    >
                      {chef_partners.map((chef, i) => (
                        <Box
                          key={i}
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            gap: "7px",
                          }}
                        >
                          <Box
                            style={{
                              boxSizing: "border-box",
                              background:
                                "linear-gradient(254.51deg, #00CCCC 5.63%, #009999 61.19%, #6666FF 116.96%)",
                              borderRadius: sm ? "20px" : "24px",
                              padding: "1px",
                            }}
                          >
                            <Image
                              src={chef.image}
                              alt="FoodVerse"
                              width={175}
                              height={175}
                              style={{
                                maxHeight: 175,
                                objectFit: "cover",
                                borderRadius: sm ? "20px" : "24px",
                                objectPosition: "top",
                              }}
                            />
                          </Box>
                          <Typography
                            style={{
                              fontFamily: "Karla",
                              fontWeight: 700,
                              fontSize: sm ? 16 : 20,
                              lineHeight: "120%",
                              textAlign: "center",
                              color: "#FDFFF5",
                              opacity: 0.8,
                            }}
                          >
                            {chef.description}
                            <br />
                            <span
                              style={{
                                fontSize: 18,
                                fontWeight: 500,
                              }}
                            >
                              {chef.description2}
                            </span>
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}
                  {tab === 3 && (
                    <Box
                      style={{
                        width: "100%",
                        paddingTop: "5%",
                        display: "grid",
                        gridTemplateColumns: md
                          ? "repeat(auto-fill,minmax(160px, 1fr))"
                          : "repeat(auto-fill,minmax(175px, 1fr))",
                        columnGap: md ? "15px" : "50px",
                        rowGap: md ? "25px" : "35px",
                      }}
                    >
                      {restaurants.map((restaurant, i) => (
                        <Box
                          key={i}
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            gap: "7px",
                          }}
                        >
                          <Box
                            style={{
                              boxSizing: "border-box",
                              background:
                                "linear-gradient(254.51deg, #00CCCC 5.63%, #009999 61.19%, #6666FF 116.96%)",
                              borderRadius: sm ? "20px" : "24px",
                              padding: "1px",
                            }}
                          >
                            <Image
                              src={restaurant.image}
                              alt="FoodVerse"
                              width={175}
                              height={175}
                              style={{
                                borderRadius: sm ? "20px" : "24px",
                              }}
                            />
                          </Box>
                          <Typography
                            style={{
                              fontFamily: "Karla",
                              fontWeight: 700,
                              fontSize: sm ? 16 : 20,
                              lineHeight: "120%",
                              textAlign: "center",
                              color: "#FDFFF5",
                              opacity: 0.8,
                            }}
                          >
                            {restaurant.description}
                            <br />
                            <span
                              style={{
                                fontSize: 18,
                                fontWeight: 500,
                              }}
                            >
                              {restaurant.description2}
                            </span>
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>

          {/* partner_with_us */}
          <Box
            style={{
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(257.44deg, #2B2982 12.7%, #6666FF 94.07%)",
              padding: md ? (sm ? "50px 5%" : "75px 5%") : "7%",
              position: "relative",
              zIndex: 2,
              overflow: "hidden",
            }}
          >
            <Image
              src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/noisebg.png"
              alt="FoodVerse"
              width={2000}
              height={2000}
              style={{
                pointerEvents: "none",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "100%",
              }}
            />
            <Box
              style={{
                width: "100%",
                maxWidth: "1440px",
                margin: "0 auto",
                // minHeight: "100vh",
                height: "100%",
                position: "relative",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                flexDirection: sm ? "column" : "row",
                gap: sm ? "50px" : "25px",
              }}
            >
              <Box style={{ width: "100%", maxWidth: 440 }}>
                <Typography
                  style={{
                    fontFamily: "'Rubik'",
                    fontWeight: 900,
                    fontSize: sm ? 40 : 50,
                    lineHeight: "90%",
                    color: "#FFFFFF",
                  }}
                >
                  Partner with us
                </Typography>
                <Typography
                  className={classes.sub_heading}
                  style={{
                    textAlign: "left",
                    marginTop: sm ? "15px" : "25px",
                    maxWidth: 400,
                  }}
                >
                  Wake up and smell the coffee! Secure alpha access to our
                  Restaurants program and launch co-marketing initiatives
                </Typography>
              </Box>
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: sm ? "center" : "flex-end",
                  justifyContent: sm ? "center" : "flex-end",
                  flexDirection: sm ? "column" : "row",
                  gap: sm ? "50px" : "5%",
                }}
              >
                <Box
                  style={{
                    width: "200px",
                    height: "137px",
                    background: "rgba(65, 65, 65, 0.5)",
                    border: "1px solid #FFFFFF",
                    boxShadow: "0px 11px 11px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flexDirection: "column",
                    gap: "10px",
                    padding: "0 15px 15px",
                  }}
                >
                  <Image
                    src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/partnership1.png"
                    width={110}
                    height={110}
                    style={{ marginTop: "-55px" }}
                  />
                  <Box
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      gap: "10px",
                      fontWeight: 700,
                      fontSize: "22px",
                      lineHeight: "110%",
                      color: "#64FF99",
                    }}
                  >
                    F&B
                    <br />
                    BRANDS
                    <Link
                      target="_blank"
                      href="https://docs.google.com/forms/d/e/1FAIpQLScASnfjyROzWDHa_XH9-XA86wH7GCIhf6tZRRdaYeTssEseBg/viewform"
                    >
                      <KeyboardArrowRight
                        style={{
                          width: 32,
                          height: 32,
                          cursor: "pointer",
                          border: "1px solid #fff",
                          borderRadius: "50%",
                          color: "#fff",
                          background:
                            "linear-gradient(241.27deg, rgba(255, 255, 255, 0.08) -5.59%, rgba(255, 255, 255, 0) 100%)",
                          filter:
                            "drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.25))",
                          borderRadius: "24px",
                          color: "#64FF99",
                        }}
                      />
                    </Link>
                  </Box>
                </Box>
                <Box
                  style={{
                    width: "200px",
                    height: "137px",
                    background: "rgba(65, 65, 65, 0.5)",
                    border: "1px solid #FFFFFF",
                    boxShadow: "0px 11px 11px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flexDirection: "column",
                    gap: "10px",
                    padding: "0 15px 15px",
                  }}
                >
                  <Image
                    src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/partnership2.png"
                    width={110}
                    height={110}
                    style={{ marginTop: "-55px" }}
                  />
                  <Box
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      gap: "10px",
                      fontWeight: 700,
                      fontSize: "22px",
                      lineHeight: "110%",
                      color: "#64FF99",
                    }}
                  >
                    WEB3
                    <br />
                    BUILDERS
                    <Link
                      target="_blank"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSf39AlUa_YSAc31G0F-qeVCegzcwwt7IyMy06fWsg8c0hCgnA/viewform"
                    >
                      <KeyboardArrowRight
                        style={{
                          width: 32,
                          height: 32,
                          cursor: "pointer",
                          border: "1px solid #fff",
                          borderRadius: "50%",
                          color: "#fff",
                          background:
                            "linear-gradient(241.27deg, rgba(255, 255, 255, 0.08) -5.59%, rgba(255, 255, 255, 0) 100%)",
                          filter:
                            "drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.25))",
                          borderRadius: "24px",
                          color: "#64FF99",
                        }}
                      />
                    </Link>
                  </Box>
                </Box>
                <Box
                  style={{
                    width: "200px",
                    height: "137px",
                    background: "rgba(65, 65, 65, 0.5)",
                    border: "1px solid #FFFFFF",
                    boxShadow: "0px 11px 11px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flexDirection: "column",
                    gap: "10px",
                    padding: "0 15px 15px",
                  }}
                >
                  <Image
                    src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/partnership3.png"
                    width={110}
                    height={110}
                    style={{ marginTop: "-55px" }}
                  />
                  <Box
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      gap: "10px",
                      fontWeight: 700,
                      fontSize: "22px",
                      lineHeight: "110%",
                      color: "#64FF99",
                    }}
                  >
                    CONTENT
                    <br />
                    CREATORS
                    <Link
                      target="_blank"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfocL524iwGkqC4VyGdosdHEQWZvurMJeP5Uu3lc5XEt3cwVg/viewform"
                    >
                      <KeyboardArrowRight
                        style={{
                          width: 32,
                          height: 32,
                          cursor: "pointer",
                          border: "1px solid #fff",
                          borderRadius: "50%",
                          color: "#fff",
                          background:
                            "linear-gradient(241.27deg, rgba(255, 255, 255, 0.08) -5.59%, rgba(255, 255, 255, 0) 100%)",
                          filter:
                            "drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.25))",
                          borderRadius: "24px",
                          color: "#64FF99",
                        }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* meet_foodies */}
          <Box
            style={{
              width: "100%",
              height: "100%",
              background: "#161810",
              padding: md ? (sm ? "50px 5%" : "75px 5%") : "7%",
              position: "relative",
              zIndex: 2,
              overflow: "hidden",
            }}
          >
            <Image
              src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/noisebg.png"
              alt="FoodVerse"
              width={2000}
              height={2000}
              style={{
                pointerEvents: "none",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "100%",
              }}
            />
            <Box
              style={{
                width: "100%",
                maxWidth: "1440px",
                margin: "0 auto",
                // minHeight: "100vh",
                height: "100%",
                position: "relative",
              }}
            >
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: sm ? "flex-start" : "center",
                  justifyContent: "space-between",
                  flexDirection: sm ? "column" : "row",
                  gap: "10px",
                  position: "relative",
                }}
              >
                <TitleComponent
                  title1="Meet the"
                  title2="Foodies"
                  titleStyle={{
                    paddingLeft: sm && "25px",
                  }}
                  badgeStyle={{
                    transform: sm ? "rotate(-5.5deg)" : "rotate(-6deg)",
                    marginTop: sm ? "-2px" : "-8px",
                    marginLeft: lg ? "0%" : "5%",
                    zIndex: 1,
                  }}
                />
                <Typography
                  variant="inherit"
                  className={classes.sub_heading}
                  style={{ maxWidth: 500, textAlign: "left", fontWeight: 400 }}
                >
                  Gobbl is powered by 30+ Web3 Buidlers, Designers & Marketers
                  on one mission: to revolutionize food through blockchain.
                </Typography>
              </Box>
              <Box
                style={{
                  width: "100%",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  // flexDirection: sm ? "column" : "row",
                  alignItems: "center",
                  gap: sm ? "10px" : "75px",
                  padding: md ? "50px 0" : "5%",
                }}
              >
                <Box
                  style={{
                    position: "relative",
                    width: md ? 185 : 260,
                    height: md ? 248 : 367,
                    padding: md ? "10px 5px 5px" : "25px 15px 15px",
                    borderRadius: md ? "16px" : "24px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: md ? "5px" : "10px",
                  }}
                >
                  <Image
                    src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/team_frame1.svg"
                    alt="FoodVerse"
                    width={260}
                    height={367}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Avatar
                    img="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/supreet.png"
                    style={{
                      width: md ? 120 : 172,
                      height: md ? 120 : 172,
                    }}
                    imgStyle={{ width: md ? 105 : 146, height: md ? 105 : 146 }}
                  />
                  <Typography
                    style={{
                      fontFamily: "'Rubik'",
                      fontWeight: 700,
                      fontSize: md ? 24 : 32,
                      lineHeight: "100%",
                      textAlign: "center",
                      color: "#FF9CFF",
                    }}
                  >
                    Supreet
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "'Rubik'",
                      fontWeight: 400,
                      fontSize: md ? 14 : 24,
                      lineHeight: md ? "100%" : "140%",
                      textAlign: "center",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    CO-FOUNDER
                  </Typography>
                  <Box
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      gap: md ? "15px" : "25px",
                      marginTop: md ? 0 : "5px",
                    }}
                  >
                    <Link
                      href="https://twitter.com/supreetraju"
                      target="_blank"
                    >
                      <Image
                        src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/twitter.svg"
                        alt="FoodVerse"
                        width={md ? 24 : 36}
                        height={md ? 24 : 36}
                        style={{ position: "relative", zIndex: 1 }}
                      />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/supreetraju/"
                      target="_blank"
                    >
                      <Image
                        src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/linkedIn.svg"
                        alt="FoodVerse"
                        width={md ? 24 : 36}
                        height={md ? 24 : 36}
                        style={{ position: "relative", zIndex: 1 }}
                      />
                    </Link>
                  </Box>
                </Box>
                <Box
                  style={{
                    position: "relative",
                    width: md ? 185 : 260,
                    height: md ? 248 : 367,
                    padding: md ? "10px 5px 5px" : "25px 15px 15px",
                    borderRadius: md ? "16px" : "24px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: md ? "5px" : "10px",
                  }}
                >
                  <Image
                    src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/team_frame1.svg"
                    alt="FoodVerse"
                    width={180}
                    height={250}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Avatar
                    img="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/gaurav.png"
                    style={{
                      width: md ? 120 : 172,
                      height: md ? 120 : 172,
                    }}
                    imgStyle={{ width: md ? 105 : 146, height: md ? 105 : 146 }}
                  />
                  <Typography
                    style={{
                      fontFamily: "'Rubik'",
                      fontWeight: 700,
                      fontSize: md ? 24 : 32,
                      lineHeight: "100%",
                      textAlign: "center",
                      color: "#FF9CFF",
                    }}
                  >
                    Gaurav
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "'Rubik'",
                      fontWeight: 400,
                      fontSize: md ? 14 : 24,
                      lineHeight: md ? "100%" : "140%",
                      textAlign: "center",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    CO-FOUNDER
                  </Typography>
                  <Box
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      gap: md ? "15px" : "25px",
                      marginTop: md ? 0 : "5px",
                    }}
                  >
                    <Link
                      href="https://twitter.com/gaurav_gupta9"
                      target="_blank"
                    >
                      <Image
                        src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/twitter.svg"
                        alt="FoodVerse"
                        width={md ? 24 : 36}
                        height={md ? 24 : 36}
                        style={{ position: "relative", zIndex: 1 }}
                      />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/gauravgupta99/"
                      target="_blank"
                    >
                      <Image
                        src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/linkedIn.svg"
                        alt="FoodVerse"
                        width={md ? 24 : 36}
                        height={md ? 24 : 36}
                        style={{ position: "relative", zIndex: 1 }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Box>
              <Box
                style={{
                  width: "100%",
                  position: "relative",
                  padding: sm && "0 5%",
                }}
              >
                <Slider {...settings}>
                  {team.map((person, i) => (
                    <Box
                      key={i}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Box
                        style={{
                          position: "relative",
                          width: md ? 140 : 180,
                          margin: md ? "10px auto" : "0 auto",
                          height: md ? 196 : 250,
                          borderRadius: md ? "26px" : "24px",
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          justifyContent: "center",
                          gap: md ? "5px" : "10px",
                        }}
                      >
                        <Image
                          src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/team_frame2.svg"
                          alt="FoodVerse"
                          width={md ? 140 : 180}
                          height={md ? 196 : 250}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                          }}
                        />
                        <Avatar
                          img={person.img}
                          style={{
                            width: md ? 90 : 120,
                            height: md ? 90 : 120,
                          }}
                          imgStyle={{
                            width: md ? 75 : 100,
                            height: md ? 75 : 100,
                          }}
                        />
                        <Typography
                          style={{
                            fontFamily: "'Rubik'",
                            fontWeight: 700,
                            fontSize: md ? 20 : 24,
                            lineHeight: "100%",
                            textAlign: "center",
                            color: "#FF9CFF",
                            marginTop: "10px",
                          }}
                        >
                          {person.name}
                        </Typography>
                        <Typography
                          style={{
                            fontFamily: "'Rubik'",
                            fontWeight: 400,
                            fontSize: md ? 12 : 18,
                            lineHeight: "100%",
                            textAlign: "center",
                            color: "rgba(255, 255, 255, 0.8)",
                          }}
                        >
                          {person.team}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Slider>
              </Box>
            </Box>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 1 }}
              style={{
                position: "absolute",
                top: md ? "23%" : "20%",
                right: 0,
                zIndex: -1,
              }}
            >
              <motion.div
                variants={{
                  offscreen: {
                    x: 250,
                  },
                  onscreen: {
                    x: 10,
                    transition: {
                      type: "spring",
                      bounce: 0.35,
                      duration: 1.5,
                    },
                  },
                }}
              >
                <Image
                  src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/popcorn1.svg"
                  alt="FoodVerse"
                  width={md ? 90 : 300}
                  height={md ? 90 : 300}
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 1 }}
              style={{
                position: "absolute",
                top: sm ? "48.5%" : "35%",
                left: 0,
                zIndex: -1,
              }}
            >
              <motion.div
                variants={{
                  offscreen: {
                    x: -280,
                  },
                  onscreen: {
                    x: -10,
                    transition: {
                      type: "spring",
                      bounce: 0.35,
                      duration: 1.5,
                    },
                  },
                }}
              >
                <Image
                  src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/newhome/popcorn2.png"
                  alt="FoodVerse"
                  width={md ? 90 : 300}
                  height={md ? 90 : 300}
                />
              </motion.div>
            </motion.div>
          </Box>

          {/* project_roadmap */}
          <Box
            style={{
              width: "100%",
              height: "100%",
              background: "#000",
              padding: md ? (sm ? "50px 5%" : "75px 5%") : "7%",
              position: "relative",
              zIndex: 2,
              overflow: "hidden",
            }}
          >
            <Image
              src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/noisebg.png"
              alt="FoodVerse"
              width={2000}
              height={2000}
              style={{
                pointerEvents: "none",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "100%",
              }}
            />
            <Box
              style={{
                width: "100%",
                maxWidth: "1440px",
                margin: "0 auto",
                // minHeight: "100vh",
                height: "100%",
                position: "relative",
              }}
            >
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: sm ? "flex-start" : "center",
                  justifyContent: "space-between",
                  flexDirection: sm ? "column" : "row-reverse",
                  gap: "10px",
                  position: "relative",
                }}
              >
                <TitleComponent
                  title1="Future"
                  title2="Roadmap"
                  style={{ alignItems: sm ? "flex-start" : "flex-end" }}
                  titleStyle={{
                    paddingRight: !sm && "15px",
                    paddingLeft: sm && "25px",
                  }}
                  badgeStyle={{
                    transform: sm ? "rotate(-5.5deg)" : "rotate(7deg)",
                    marginTop: sm ? "-5px" : "-15px",
                    zIndex: 1,
                  }}
                />
                <Typography
                  variant="inherit"
                  className={classes.sub_heading}
                  style={{ maxWidth: 460, textAlign: "left", fontWeight: 400 }}
                >
                  Our first course of features is now served. The secret sauce
                  is still brewing. Hope you saved room—the feast is just
                  beginning!
                </Typography>
              </Box>
              <Box
                style={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: lg ? "1fr 1fr" : "1fr 1fr 1fr 1fr",
                  placeItems: "center",
                  gap: "10px",
                  rowGap: lg ? (sm ? "85px" : "120px") : "20px",
                  paddingTop: md ? 90 : "10%",
                }}
              >
                <ExploreCard
                  img="/newhome/roadmap1.png"
                  title="LIVE ON TELEGRAM"
                  description1="Gobbl UP App"
                  description2="Dish Collectibles"
                  description3="Game Launches"
                  description4="Referral System"
                />
                <ExploreCard
                  img="/newhome/roadmap2.png"
                  title="NOW SERVING"
                  description1="Strategic Partnerships"
                  description2="Multiplayer Games V2"
                  description3="Deals Activation"
                  description4="Dubai Pilot Launch"
                />
                <ExploreCard
                  img="/newhome/roadmap3.png"
                  title="THE NEXT COURSE"
                  description1="Global Deals Launch"
                  description2="Gobbl Black"
                  description3="$GOBBL TGE"
                  description4="Membership Program"
                />
                <ExploreCard
                  img="/newhome/roadmap4.png"
                  title="FUTURE PLANS"
                  description1="Gobbl Pay"
                  description2="Events & Partnerships"
                  description3="Social Integrations"
                  description4="Foodchain L2 solution"
                />
              </Box>
              <Box
                style={{
                  position: "absolute",
                  width: lg ? (sm ? 160 : 250) : 318,
                  height: lg ? (sm ? 160 : 250) : 318,
                  right: "-25%",
                  bottom: "-20%",
                  background: "#40FFF4",
                  opacity: 0.6,
                  filter: "blur(212px)",
                }}
              />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default NewHomePage;
