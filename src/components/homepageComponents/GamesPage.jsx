import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import { Button, Fade, Typography, useMediaQuery } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import Vimeo from "@u-wave/react-vimeo";

import { useServerAuth } from "../../hooks/useServerAuth";
import Seo from "../../common-v4/Seo";
import Link from "next/link";
import { getAuth, isSignInWithEmailLink } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getUserGameData } from "../../reducers/UiReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxTypes";
import { getUserDbBalance } from "../../actions/serverActions";
import Image from "next/image";
import { East, KeyboardArrowRight } from "@mui/icons-material";
import CommonButton from "../../common-v4/CommonButton";

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
  sub_heading: {
    fontWeight: 500,
    fontSize: 24,
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
    fontSize: 20,
    lineHeight: "130%",
    color: "rgba(253, 255, 245, 0.8)",
    position: "relative",
    zIndex: 1,
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
          maxWidth: "527.28px",
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

const ExploreCard = ({ img, title, description, color, url, imgStyle }) => {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Link href={url} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "286px",
          height: sm ? 230 : 345,
          background:
            "linear-gradient(241.27deg, rgba(255, 255, 255, 0.08) -5.59%, rgba(255, 255, 255, 0) 100%)",
          filter: "drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.25))",
          borderRadius: sm ? "20px" : "24px",
          border: `1px solid ${color}`,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: sm ? "10px" : "20px",
          padding: sm ? "65px 5% 25px 5%" : "75px 20px 35px 20px",
          transition: "all 0.3s ease",
          transform: "translateY(0)",
          "&:hover": {
            transform: sm ? "translateY(-20px)" : "translateY(-30px)",
            boxShadow: `0 5px 30px 1px ${color}`,
          },
        }}
      >
        <Image
          src={img}
          alt="Foodverse"
          width={282}
          height={212}
          style={{
            width: sm ? 190 : 286,
            height: sm ? 190 : 286,
            top: sm ? -105 : -160,
            zIndex: 1,
            position: "absolute",
            ...imgStyle,
          }}
        />
        <Typography
          style={{
            fontFamily: "'Rubik'",
            fontWeight: 700,
            fontSize: sm ? 24 : 32,
            lineHeight: "100%",
            textAlign: "center",
            color: "#FF9CFF",
            marginTop: "auto",
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
          {description}
        </Typography>
        <Button
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
        </Button>
      </Box>
    </Link>
  );
};

const emojiArray = [
  "🕹️",
  "🍿",
  "🎲",
  "🎮",
  "🍔",
  "🕹️",
  "🍿",
  "🎲",
  "🎮",
  "🍔",
  "🕹️",
  "🍿",
  "🎲",
  "🎮",
  "🍔",
  "🕹️",
  "🍿",
  "🎲",
  "🎮",
  "🍔",
];

const GamesPage = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const { loginWithEmail } = useServerAuth();
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down(380));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));

  const [playVideo, setPlayVideo] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [emailVerifiTried, setEmailVerifiTried] = useState(false);
  const [tvl, setTvl] = useState(0);
  const [staked, setStaked] = useState(0);

  const brands = useAppSelector((reduxState) => reduxState.ui.brands_new);

  useEffect(() => setLoaded(true), []);
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  // Validation email link
  useEffect(() => {
    if (!emailVerifiTried && loaded) {
      (async () => {
        const firebaseConfig = {
          apiKey: "AIzaSyAQlZz8VB5r6AL1M33t90oVCDMt_xahg8c",
          authDomain: "onerare-otp.firebaseapp.com",
          projectId: "onerare-otp",
          storageBucket: "onerare-otp.appspot.com",
          messagingSenderId: "1006547548137",
          appId: "1:1006547548137:web:e82c2a3bda06a53463bd78",
          measurementId: "G-K8G0XTXEY3",
        };

        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

        if (isSignInWithEmailLink(auth, window.location.href)) {
          setEmailVerifiTried(true);
          let emailAddressfromLocal = await localStorage.getItem(
            "emailForLogIn"
          );

          await loginWithEmail(emailAddressfromLocal);

          await dispatch(getUserGameData());
        } else {
          console.log("Changes are  is here");
        }
      })();
    }
  }, [loaded, emailVerifiTried]);

  useEffect(() => {
    async function asyncFn() {
      let res = await getUserDbBalance();
      if (res) {
        setStaked(parseInt(res) + 3040500);
        setTvl(parseInt((parseInt(res) + 3040500) * 0.035));
      }
    }

    asyncFn();
  }, []);
  return (
    <>
      <Seo
        title="FoodVerse - The Food Metaverse Game"
        description="FoodVerse is the World's First Metaverse for the Global Food & Beverage Industry. Play Food NFT Games, Enjoy Virtual Restaurant Experiences & Swap NFTs for Real Meals."
        keywords="Foodverse,Food metaverse,Game, Food DIGITAL COLLECTIBLES, Orare, Onerare Foodverse"
        image="https://onerare-bucket.s3.ap-south-1.amazonaws.com/foodverse-assets/foodverse_bg.jpg"
      />

      <Box
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#161810",
          position: "relative",
        }}
      >
        {/* hero section */}
        <Box
          style={{
            width: "100%",
            height: 520,
            background: "#161810",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
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
          <Box className={classes.bg_gradient} />
          <Typography mt={-7} variant="inherit" className={classes.heading}>
            Let’s Play
          </Typography>
          <Typography
            mt={sm ? 1 : 2}
            variant="inherit"
            className={classes.sub_heading}
            style={{
              fontSize: sm ? 24 : 32,
              opacity: 0.7,
            }}
          >
            Discover the future of food with web3 gaming
          </Typography>
          <Box
            style={{
              width: "100%",
              maxWidth: sm ? 300 : 600,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: sm ? "5px" : "15px",
              marginTop: "25px",
            }}
          >
            <Link
              href="https://t.me/GobblUpBot"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                style={{
                  width: "fit-content",
                  height: "32px",
                  fontFamily: "'Karla'",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "32px",
                  color: "#FFFCF5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0px",
                  gap: "10px",
                  opacity: 0.6,
                  textTransform: "capitalize",
                }}
              >
                Gobbl Up
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3344 5.1974L2.46771 17.0641C2.22326 17.3085 1.91215 17.4307 1.53438 17.4307C1.1566 17.4307 0.845486 17.3085 0.601042 17.0641C0.356597 16.8196 0.234375 16.5085 0.234375 16.1307C0.234375 15.753 0.356597 15.4418 0.601042 15.1974L12.4677 3.33073H2.33438C1.9566 3.33073 1.63993 3.20295 1.38438 2.9474C1.12882 2.69184 1.00104 2.37517 1.00104 1.9974C1.00104 1.61962 1.12882 1.30295 1.38438 1.0474C1.63993 0.79184 1.9566 0.664062 2.33438 0.664062H15.6677C16.0455 0.664062 16.3622 0.79184 16.6177 1.0474C16.8733 1.30295 17.001 1.61962 17.001 1.9974V15.3307C17.001 15.7085 16.8733 16.0252 16.6177 16.2807C16.3622 16.5363 16.0455 16.6641 15.6677 16.6641C15.2899 16.6641 14.9733 16.5363 14.7177 16.2807C14.4622 16.0252 14.3344 15.7085 14.3344 15.3307V5.1974Z"
                    fill="#FFFCF5"
                  />
                </svg>
              </Button>
            </Link>
            <Link href="/foodfury" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  width: "fit-content",
                  height: "32px",
                  fontFamily: "'Karla'",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "32px",
                  color: "#FFFCF5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0px",
                  gap: "10px",
                  opacity: 0.6,
                  textTransform: "capitalize",
                }}
              >
                Food Fury
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3344 5.1974L2.46771 17.0641C2.22326 17.3085 1.91215 17.4307 1.53438 17.4307C1.1566 17.4307 0.845486 17.3085 0.601042 17.0641C0.356597 16.8196 0.234375 16.5085 0.234375 16.1307C0.234375 15.753 0.356597 15.4418 0.601042 15.1974L12.4677 3.33073H2.33438C1.9566 3.33073 1.63993 3.20295 1.38438 2.9474C1.12882 2.69184 1.00104 2.37517 1.00104 1.9974C1.00104 1.61962 1.12882 1.30295 1.38438 1.0474C1.63993 0.79184 1.9566 0.664062 2.33438 0.664062H15.6677C16.0455 0.664062 16.3622 0.79184 16.6177 1.0474C16.8733 1.30295 17.001 1.61962 17.001 1.9974V15.3307C17.001 15.7085 16.8733 16.0252 16.6177 16.2807C16.3622 16.5363 16.0455 16.6641 15.6677 16.6641C15.2899 16.6641 14.9733 16.5363 14.7177 16.2807C14.4622 16.0252 14.3344 15.7085 14.3344 15.3307V5.1974Z"
                    fill="#FFFCF5"
                  />
                </svg>
              </Button>
            </Link>
            <Link href="/food5" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  width: "fit-content",
                  height: "32px",
                  fontFamily: "'Karla'",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "32px",
                  color: "#FFFCF5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0px",
                  gap: "10px",
                  opacity: 0.6,
                  textTransform: "capitalize",
                }}
              >
                Food5
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3344 5.1974L2.46771 17.0641C2.22326 17.3085 1.91215 17.4307 1.53438 17.4307C1.1566 17.4307 0.845486 17.3085 0.601042 17.0641C0.356597 16.8196 0.234375 16.5085 0.234375 16.1307C0.234375 15.753 0.356597 15.4418 0.601042 15.1974L12.4677 3.33073H2.33438C1.9566 3.33073 1.63993 3.20295 1.38438 2.9474C1.12882 2.69184 1.00104 2.37517 1.00104 1.9974C1.00104 1.61962 1.12882 1.30295 1.38438 1.0474C1.63993 0.79184 1.9566 0.664062 2.33438 0.664062H15.6677C16.0455 0.664062 16.3622 0.79184 16.6177 1.0474C16.8733 1.30295 17.001 1.61962 17.001 1.9974V15.3307C17.001 15.7085 16.8733 16.0252 16.6177 16.2807C16.3622 16.5363 16.0455 16.6641 15.6677 16.6641C15.2899 16.6641 14.9733 16.5363 14.7177 16.2807C14.4622 16.0252 14.3344 15.7085 14.3344 15.3307V5.1974Z"
                    fill="#FFFCF5"
                  />
                </svg>
              </Button>
            </Link>
            <Box style={{ textDecoration: "none" }}>
              <Button
                style={{
                  width: "fit-content",
                  height: "32px",
                  fontFamily: "'Karla'",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "32px",
                  color: "#FFFCF5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0px",
                  gap: "10px",
                  opacity: 0.6,
                  textTransform: "capitalize",
                  cursor: "not-allowed",
                }}
              >
                Foodverse
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3344 5.1974L2.46771 17.0641C2.22326 17.3085 1.91215 17.4307 1.53438 17.4307C1.1566 17.4307 0.845486 17.3085 0.601042 17.0641C0.356597 16.8196 0.234375 16.5085 0.234375 16.1307C0.234375 15.753 0.356597 15.4418 0.601042 15.1974L12.4677 3.33073H2.33438C1.9566 3.33073 1.63993 3.20295 1.38438 2.9474C1.12882 2.69184 1.00104 2.37517 1.00104 1.9974C1.00104 1.61962 1.12882 1.30295 1.38438 1.0474C1.63993 0.79184 1.9566 0.664062 2.33438 0.664062H15.6677C16.0455 0.664062 16.3622 0.79184 16.6177 1.0474C16.8733 1.30295 17.001 1.61962 17.001 1.9974V15.3307C17.001 15.7085 16.8733 16.0252 16.6177 16.2807C16.3622 16.5363 16.0455 16.6641 15.6677 16.6641C15.2899 16.6641 14.9733 16.5363 14.7177 16.2807C14.4622 16.0252 14.3344 15.7085 14.3344 15.3307V5.1974Z"
                    fill="#FFFCF5"
                  />
                </svg>
              </Button>
            </Box>
          </Box>
          <Image
            src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/hero_left.svg"
            alt="Gobbl Games"
            width={sm ? 180 : 350}
            height={sm ? 180 : 350}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <Image
            src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/hero_right.svg"
            alt="Gobbl Games"
            width={sm ? 180 : 350}
            height={sm ? 180 : 350}
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              zIndex: 1,
            }}
          />
          <Image
            src="/assets/gobbl_games.png"
            alt="Gobbl Games"
            width={sm ? 180 : 350}
            height={sm ? 180 : 350}
            style={{
              position: "absolute",
              bottom: sm ? -20 : -70,
              left: 0,
            }}
          />
          <Box
            style={{
              position: "absolute",
              width: sm ? 200 : 300,
              height: sm ? 200 : 300,
              right: sm ? -75 : -159,
              top: sm ? -35 : -76,
              background: "#D1FF19",
              filter: "blur(212px)",
              zIndex: 0,
            }}
          />
        </Box>

        {/* explore_foodverse */}
        <Box
          style={{
            width: "100%",
            height: "100%",
            background: "#2B2D25",
            padding: md ? (sm ? "50px 5%" : "75px 5%") : "7% 5%",
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
              maxWidth: "1240px",
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
                title1="Food as"
                title2="Collectibles"
                badgeStyle={{
                  transform: sm ? "rotate(-5.5deg)" : "rotate(-7deg)",
                  marginTop: "3px",
                  marginRight: "-14%",
                  zIndex: 1,
                }}
              />
              <Image
                src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/home/explore_foodverse.svg"
                alt="Foodverse"
                width={176}
                height={152}
                style={{
                  width: "100%",
                  maxWidth: lg ? (md ? (sm ? 85 : 100) : 125) : 176,
                  position: "absolute",
                  left: lg ? (sm ? "80%" : "38%") : "43%",
                  top: lg ? (sm ? "-22%" : "-50%") : "-45%",
                  margin: "0 auto",
                }}
              />
              <Typography
                variant="inherit"
                className={classes.sub_heading}
                style={{ maxWidth: 445, textAlign: "left", fontWeight: 400 }}
              >
                Create, clash, and collect in a world where food isn't just
                food—it's your next big adventure. Get gaming with a pinch of
                flavor and a whole lot of fun. Dive in, the game is on!
              </Typography>
            </Box>
            <Box
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: lg ? "1fr 1fr" : "1fr 1fr 1fr 1fr",
                placeItems: "center",
                gap: "10px",
                rowGap: lg ? (sm ? "85px" : "120px") : "10px",
                paddingTop: md ? 120 : "10%",
              }}
            >
              <ExploreCard
                img="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/home/win_big.svg"
                title="Play Games"
                description="Battle it out against foodies in exciting formats- from delivery hustles to card strategy."
                color="#FFC700"
                url={"https://t.me/GobblUpBot"}
              />
              <ExploreCard
                img="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/home/cook_dishes.svg"
                title="Collect Dishes"
                description="Use Dish Collectibles for multiplying your rewards. Level up your dishes to create power cards."
                color="#8DC123"
                url={"/recipes"}
                imgStyle={{
                  width: sm ? 190 : 270,
                  height: sm ? 190 : 270,
                  top: sm ? -105 : -155,
                }}
              />
              <ExploreCard
                img="/assets/home/refer_friends.png"
                title="Refer Friends"
                description="Invite your Friends and earn CHIPS. Cherry on top - The more they play, the more you earn!"
                color="#35CBFA"
                url={"https://t.me/GobblUpBot"}
                imgStyle={{
                  width: sm ? 190 : 200,
                  height: sm ? 190 : 200,
                  top: sm ? -105 : -140,
                }}
              />
              <ExploreCard
                img="/assets/home/win_big.png"
                title="Win Big"
                description="Earn MUNCH through Games and power your way up the Leaderboard for exciting rewards."
                color="#FF5555"
                url={"https://t.me/GobblUpBot"}
                imgStyle={{
                  width: sm ? 190 : 240,
                  height: sm ? 190 : 240,
                  top: sm ? -105 : -170,
                }}
              />
            </Box>
            <Box
              style={{
                position: "absolute",
                width: lg ? (sm ? 160 : 250) : 318,
                height: lg ? (sm ? 160 : 250) : 318,
                top: "-20%",
                left: "-20%",
                background: "#40FFF4",
                opacity: 0.6,
                filter: "blur(212px)",
              }}
            />
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

        {/* play games */}
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
            src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/home/play_our_games.png"
            alt="Foodverse"
            width={156}
            height={146}
            style={{
              width: "100%",
              maxWidth: lg ? (sm ? 80 : 125) : 152,
              position: "absolute",
              left: "5%",
              top: "-2%",
              margin: "0 auto",
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
              padding: md ? (sm ? "50px 5%" : "75px 5%") : "7% 5%",
              position: "relative",
              zIndex: 2,
              overflow: "hidden",
            }}
          >
            <Box
              style={{
                width: "100%",
                maxWidth: "1240px",
                margin: "0 auto",
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
                  flexDirection: sm ? "column-reverse" : "row",
                  gap: "10px",
                  position: "relative",
                }}
              >
                <Typography
                  variant="inherit"
                  className={classes.sub_heading}
                  style={{
                    maxWidth: 445,
                    textAlign: "left",
                    fontWeight: 400,
                    marginTop: sm ? "15px" : 0,
                  }}
                >
                  Whip up, compete, and savor the victory. <br />
                  Ready to heat up the competition?
                </Typography>
                <TitleComponent
                  title1="Play our"
                  title2="Games"
                  style={{
                    justifyContent: "flex-end",
                  }}
                  badgeStyle={{
                    transform: sm ? "rotate(-5.5deg)" : "rotate(-7deg)",
                    marginTop: sm ? "-6px" : "-8px",
                    zIndex: 1,
                  }}
                />
              </Box>
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: md ? (sm ? "15px" : "25px") : "50px",
                  position: "relative",
                  paddingTop: md ? (sm ? 35 : 75) : "5%",
                }}
              >
                <Box
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <Typography
                    style={{
                      position: "absolute",
                      top: md ? 5 : 15,
                      left: sm ? -3 : -15,
                      width: sm ? 60 : 168,
                      height: sm ? 16 : 42,
                      background: "#66FF19",
                      borderRadius: sm ? "6px" : "12px",
                      transform: "rotate(-16deg)",
                      fontWeight: 700,
                      fontSize: sm ? 10 : 26,
                      textAlign: "center",
                      color: "#000000",
                      zIndex: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    LIVE NOW
                  </Typography>
                  <Box
                    style={{
                      width: "100%",
                      borderRadius: sm ? "16px" : "28px",
                      clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0% 100%)",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Image
                      src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/home/foodfury_bg.png"
                      alt="Foodverse"
                      width={1100}
                      height={450}
                      style={{
                        width: "100%",
                      }}
                    />
                    <Box
                      style={{
                        width: "50%",
                        height: "100%",
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: sm ? "center" : "flex-end",
                        gap: lg
                          ? md
                            ? sm
                              ? "5px"
                              : "10px"
                            : "15px"
                          : "25px",
                        padding: lg ? (sm ? "10px 5px" : "5% 3%") : "7% 5%",
                        overflow: "hidden",
                        background:
                          "url(https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/home/bg_gradient.svg)",
                        backgroundSize: "cover",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "'Rubik'",
                          fontWeight: 900,
                          fontSize: lg ? (md ? (sm ? 16 : 28) : 38) : 48,
                          lineHeight: "130%",
                          color: "#FFFFFF",
                          position: "relative",
                        }}
                      >
                        FOOD FURY
                      </Typography>
                      <Typography
                        className={classes.sub_heading}
                        style={{ opacity: 1, fontSize: sm ? 10 : "" }}
                      >
                        Unleash your Inner Foodie Warrior.Your Mission: Deliver
                        Deliciousness and Reign Supreme in the Foodverse!
                        <br />
                        <br />
                        DOWNLOAD NOW
                      </Typography>
                      <Box
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "15px",
                          marginTop: "-15px",
                        }}
                      >
                        <Link
                          href="https://play.google.com/store/apps/details?id=com.OneRare.FoodFury&hl=en_IN"
                          target="_blank"
                          style={{
                            width: "100%",
                            maxWidth: 195,
                            textDecoration: "none",
                          }}
                        >
                          <CommonButton
                            style={{ maxWidth: 195 }}
                            btnStyle={{
                              gap: "5px",
                            }}
                          >
                            <Image
                              src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/foodfury/play_store.svg"
                              width={22}
                              height={22}
                            />
                            GOOGLE PLAY
                          </CommonButton>
                        </Link>
                        <CommonButton
                          style={{ maxWidth: 195 }}
                          btnStyle={{
                            gap: "5px",
                          }}
                          disabled={true}
                        >
                          <Image
                            src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/foodfury/apple.svg"
                            width={20}
                            height={20}
                            style={{ opacity: 0.3 }}
                          />
                          app store
                        </CommonButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    style={{
                      width: "100%",
                      borderRadius: sm ? "16px" : "28px",
                      clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 95%)",
                      overflow: "hidden",
                      position: "relative",
                      borderBottomLeftRadius: "10%",
                      borderTopLeftRadius: "10%",
                    }}
                  >
                    <Image
                      src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/home/food5_bg.png"
                      alt="Foodverse"
                      width={1100}
                      height={450}
                      style={{
                        width: "100%",
                      }}
                    />
                    <Box
                      style={{
                        width: "50%",
                        height: "100%",
                        position: "absolute",
                        right: 0,
                        top: 0,
                        bottom: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: sm ? "center" : "flex-end",
                        gap: lg
                          ? md
                            ? sm
                              ? "5px"
                              : "10px"
                            : "15px"
                          : "25px",
                        padding: lg ? (sm ? "10px 5px" : "5% 3%") : "7% 5%",
                        overflow: "hidden",
                        background:
                          "url(https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/home/bg_gradient2.svg)",
                        backgroundSize: "cover",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "'Rubik'",
                          fontWeight: 900,
                          fontSize: lg ? (md ? (sm ? 16 : 28) : 38) : 48,
                          lineHeight: "130%",
                          color: "#FFFFFF",
                          position: "relative",
                        }}
                      >
                        FOOD5
                      </Typography>
                      <Typography
                        className={classes.sub_heading}
                        style={{ opacity: 1, fontSize: sm ? 10 : "" }}
                      >
                        Engage in a classic Card Battle with your Dish Trump
                        Cards as you attempt to wipe out the competition.
                      </Typography>
                      <CommonButton
                        style={{
                          maxWidth: md ? (sm ? 105 : 140) : 200,
                          height: lg ? (md ? (sm ? 24 : 38) : 48) : 52,
                        }}
                        btnStyle={{
                          fontSize: sm ? 12 : "",
                          borderRadius: sm ? "8px" : "",
                        }}
                        btnBgStyle={{
                          borderRadius: sm ? "8px" : "",
                        }}
                        disabled={true}
                      >
                        COMING SOON
                      </CommonButton>
                    </Box>
                  </Box>
                </Box>
                <Box
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    style={{
                      width: "100%",
                      borderRadius: sm ? "16px" : "28px",
                      clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0% 100%)",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Image
                      src="/assets/home/gobblup_bg.png"
                      alt="Foodverse"
                      width={1100}
                      height={450}
                      style={{
                        width: "100%",
                      }}
                    />
                    <Box
                      style={{
                        width: "50%",
                        height: "100%",
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: sm ? "center" : "flex-end",
                        gap: lg
                          ? md
                            ? sm
                              ? "5px"
                              : "10px"
                            : "15px"
                          : "25px",
                        padding: lg ? (sm ? "10px 5px" : "5% 3%") : "7% 5%",
                        overflow: "hidden",
                        background:
                          "url(https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/home/bg_gradient3.svg)",
                        backgroundSize: "cover",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "'Rubik'",
                          fontWeight: 900,
                          fontSize: lg ? (md ? (sm ? 16 : 28) : 38) : 48,
                          lineHeight: "130%",
                          color: "#FFFFFF",
                          position: "relative",
                        }}
                      >
                        GOBBL UP!
                      </Typography>
                      <Typography
                        className={classes.sub_heading}
                        style={{ opacity: 1, fontSize: sm ? 10 : "" }}
                      >
                        $GOBBL Token is launching soon, so join the biggest food
                        party on the block and start earning your piece of the
                        pie.
                      </Typography>
                      <Link
                        href="https://t.me/GobblUpBot"
                        target="_blank"
                        style={{
                          width: "100%",
                          textDecoration: "none",
                          maxWidth: 195,
                        }}
                      >
                        <CommonButton
                          style={{ maxWidth: 195 }}
                          btnStyle={{
                            gap: "5px",
                          }}
                        >
                          <Image
                            src="/assets/home/telegram.svg"
                            width={22}
                            height={22}
                          />
                          Play now
                        </CommonButton>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                style={{
                  position: "absolute",
                  width: lg ? (sm ? 160 : 250) : 318,
                  height: lg ? (sm ? 160 : 250) : 318,
                  right: "-25%",
                  top: "-20%",
                  background: "#6640FF",
                  opacity: 0.6,
                  filter: "blur(212px)",
                }}
              />
              <Box
                style={{
                  position: "absolute",
                  width: lg ? (sm ? 160 : 250) : 318,
                  height: lg ? (sm ? 160 : 250) : 318,
                  left: "-15%",
                  top: "25%",
                  background: "#6640FF",
                  opacity: 0.6,
                  filter: "blur(212px)",
                }}
              />
              <Box
                style={{
                  position: "absolute",
                  width: lg ? (sm ? 160 : 250) : 318,
                  height: lg ? (sm ? 160 : 250) : 318,
                  right: "-15%",
                  top: "65%",
                  background: "#6640FF",
                  opacity: 0.6,
                  filter: "blur(212px)",
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* slider 2 */}
        <Box
          style={{
            width: "100%",
            height: md ? (sm ? 32 : 46) : 66,
            background: "#0000FF",
            position: "relative",
            zIndex: 2,
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
              maxWidth: "1440px",
              margin: "0 auto",
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
                gap: md ? "25px" : "35px",
                padding: md ? "10px" : "15px",
              }}
              className="home_slider"
            >
              {emojiArray?.map((emoji, i) => (
                <Typography
                  key={i}
                  style={{
                    width: "100%",
                    fontFamily: "'Rubik'",
                    fontWeight: 900,
                    fontSize: md ? (sm ? 16 : 24) : 32,
                    color: "#FF9CFF",
                    display: "flex",
                    alignItems: "center",
                    gap: md ? "25px" : "35px",
                    whiteSpace: "nowrap",
                  }}
                >
                  PLAY NOW <span>{emoji}</span>
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Leaderboard */}
        <Box
          style={{
            width: "100%",
            height: "100%",
            background: "#2B2D25",
            padding: sm ? "50px 5%" : "7% 5% 2% 5%",
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
              maxWidth: "1240px",
              margin: "0 auto",
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
                title1="Gobbl up the"
                title2="Leaderboard"
                badgeStyle={{
                  transform: sm ? "rotate(-5.5deg)" : "rotate(-7deg)",
                  marginTop: sm ? "4px" : "12px",
                  marginLeft: "-2%",
                  zIndex: 1,
                  maxWidth: "fit-content",
                }}
              />
            </Box>
            <Box
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: sm ? "column" : "row",
                gap: md ? "25px" : "50px",
                paddingTop: sm ? "25px" : "2%",
              }}
            >
              <Image
                src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/home/leaderboard.svg"
                alt="Foodverse"
                width={lg ? (md ? 350 : 400) : 515}
                height={lg ? (md ? 350 : 400) : 490}
              />
              <Box style={{}}>
                <Typography
                  className={classes.description}
                  style={{ maxWidth: sm ? "100%" : 403 }}
                >
                  Climb up the Leaderboard as you battle in games and complete
                  tasks. Invite your friends for extra rewards, and level up to
                  be assured of $GOBBL rewards.
                </Typography>
                <Link
                  href="https://t.me/GobblUpBot"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    maxWidth: md ? (sm ? 160 : 180) : 245,
                  }}
                >
                  <CommonButton
                    style={{
                      maxWidth: md ? (sm ? 160 : 180) : 245,
                      height: lg ? (md ? (sm ? 32 : 38) : 48) : 52,
                      marginTop: md ? "25px" : "50px",
                    }}
                  >
                    LET’s battle
                    <East
                      style={{
                        marginLeft: "5px",
                      }}
                    />
                  </CommonButton>
                </Link>
              </Box>
            </Box>
            <Image
              src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/home/top_leaderboard.svg"
              alt="Foodverse"
              width={lg ? (sm ? 90 : 150) : 210}
              height={lg ? (sm ? 90 : 150) : 150}
              style={{
                position: "absolute",
                right: 10,
                bottom: sm ? -10 : 10,
                zIndex: -1,
              }}
            />
            <Box
              style={{
                position: "absolute",
                width: lg ? (sm ? 160 : 250) : 318,
                height: lg ? (sm ? 160 : 250) : 318,
                bottom: "-10%",
                left: "-20%",
                background: "#FBFF40",
                opacity: 0.6,
                filter: "blur(212px)",
              }}
            />
            <Box
              style={{
                position: "absolute",
                width: lg ? (sm ? 160 : 250) : 318,
                height: lg ? (sm ? 160 : 250) : 318,
                right: "-25%",
                top: "15%",
                background: "#40FFF4",
                opacity: 0.6,
                filter: "blur(212px)",
              }}
            />
          </Box>
        </Box>

        {/* game currency */}
        <Box
          style={{
            width: "100%",
            height: "100%",
            background: "#2B2D25",
            padding: md ? (sm ? "50px 5%" : "75px 5%") : "7% 5%",
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
              maxWidth: "1240px",
              margin: "0 auto",
              height: "100%",
              position: "relative",
            }}
          >
            <Typography className={classes.heading}>Game Currency</Typography>

            <Box
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: sm ? "column" : "row",
                gap: md ? "25px" : "10%",
                paddingTop: md ? (sm ? 25 : 50) : "5%",
                marginLeft: md ? "-2.5%" : "-1.3%",
              }}
            >
              {/* flip card 1 */}
              <Box
                style={{
                  width: md ? 320 : 409,
                  height: md ? 450 : 520,
                  borderRadius: sm ? "20px" : "24px",
                  padding: md ? "10px" : "12px",
                }}
                className="flip-card"
              >
                <Box
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: sm ? "20px" : "24px",
                    padding: md ? "10px" : "12px",
                  }}
                  className="flip-card-inner"
                >
                  <Box
                    style={{
                      background: "#020E39",
                      borderRadius: "20px",
                      padding: "35px 25px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "15px",
                    }}
                    className="flip-card-front"
                  >
                    <Image
                      src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/chips.svg"
                      alt="Foodverse"
                      width={md ? 180 : 240}
                      height={240}
                      style={{}}
                    />
                    <Box
                      style={{
                        width: md ? 200 : 244,
                        height: md ? 60 : 80,
                        borderRadius: "48px",
                        background:
                          "linear-gradient( 40deg, #9291F1 0, #7BE6D3 20%, #D79ADF 40%, #5BC5F3 59%, #9291F1 78%, #7BE6D3 100%)",
                        padding: "3px",
                        marginTop: md ? "15px" : "25px",
                      }}
                    >
                      <Box
                        style={{
                          width: "100%",
                          height: "100%",
                          background: "#020E39",
                          borderRadius: "48px",
                        }}
                      >
                        <Typography
                          variant="inherit"
                          style={{
                            width: "100%",
                            height: "100%",
                            fontFamily: "'Rubik'",
                            fontWeight: 900,
                            fontSize: md ? 32 : 40,
                            color: "#FDFFF5",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background:
                              "linear-gradient(241.27deg, rgba(253, 255, 245, 0.08) -5.59%, rgba(253, 255, 245, 0) 100%)",
                            borderRadius: "48px",
                          }}
                        >
                          CHIPS
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant="inherit"
                      className={classes.sub_heading}
                      style={{ opacity: 1 }}
                    >
                      Purchasing Power
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      background: "#020E39",
                      borderRadius: "20px",
                      padding: "25px",
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      gap: "15px",
                    }}
                    className="flip-card-back"
                  >
                    <Box
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <Image
                        src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/chips.svg"
                        alt="Foodverse"
                        width={md ? 62 : 82}
                        height={md ? 62 : 82}
                      />
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          style={{
                            fontFamily: "'Rubik'",
                            fontWeight: 700,
                            fontSize: md ? 24 : 30,
                            color: "#FFFFFF",
                            textAlign: "left",
                          }}
                        >
                          CHIPS
                        </Typography>
                        <Typography className={classes.description}>
                          Powers your Purchases
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "flex-start",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        style={{
                          width: "100%",
                          fontWeight: 700,
                          fontSize: "24px",
                          lineHeight: "120%",
                          color: "#FFFCF5",
                          textAlign: "left",
                          margin: "10px 0",
                        }}
                      >
                        How to Earn:
                      </Typography>
                      <ul>
                        <li
                          className={classes.description}
                          style={{
                            color: "#FFFCF5",
                            opacity: 0.8,
                            listStyle: "outside",
                          }}
                        >
                          Complete Game Levels & Defeat your competition
                        </li>
                        <li
                          className={classes.description}
                          style={{
                            color: "#FFFCF5",
                            opacity: 0.8,
                            listStyle: "outside",
                          }}
                        >
                          Participate in Missions & Events
                        </li>
                      </ul>
                    </Box>
                    <Box
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "flex-start",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        style={{
                          width: "100%",
                          fontWeight: 700,
                          fontSize: "24px",
                          lineHeight: "120%",
                          color: "#FFFCF5",
                          textAlign: "left",
                          marginBottom: "10px",
                        }}
                      >
                        How to Spend:
                      </Typography>
                      <ul>
                        <li
                          className={classes.description}
                          style={{
                            color: "#FFFCF5",
                            opacity: 0.8,
                            listStyle: "outside",
                          }}
                        >
                          Upgrade & customize Vehicles to ace your Deliveries
                        </li>
                        <li
                          className={classes.description}
                          style={{
                            color: "#FFFCF5",
                            opacity: 0.8,
                            listStyle: "outside",
                          }}
                        >
                          Unlock New Levels & Special Game Quests
                        </li>
                        <li
                          className={classes.description}
                          style={{
                            color: "#FFFCF5",
                            opacity: 0.8,
                            listStyle: "outside",
                          }}
                        >
                          Enhance your Gameplay with Boosters and Weapons
                        </li>
                      </ul>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* flip card 2 */}
              <Box
                style={{
                  width: md ? 320 : 409,
                  height: md ? 450 : 520,
                  borderRadius: sm ? "20px" : "24px",
                  padding: md ? "10px" : "12px",
                }}
                className="flip-card"
              >
                <Box
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: sm ? "20px" : "24px",
                    padding: md ? "10px" : "12px",
                  }}
                  className="flip-card-inner"
                >
                  <Box
                    style={{
                      background: "#020E39",
                      borderRadius: "20px",
                      padding: "35px 25px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "15px",
                    }}
                    className="flip-card-front"
                  >
                    <Image
                      src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/munch.svg"
                      alt="Foodverse"
                      width={md ? 180 : 240}
                      height={240}
                      style={{}}
                    />
                    <Box
                      style={{
                        width: md ? 200 : 244,
                        height: md ? 60 : 80,
                        borderRadius: "48px",
                        background:
                          "linear-gradient( 40deg, #9291F1 0, #7BE6D3 20%, #D79ADF 40%, #5BC5F3 59%, #9291F1 78%, #7BE6D3 100%)",
                        padding: "3px",
                        marginTop: md ? "15px" : "25px",
                      }}
                    >
                      <Box
                        style={{
                          width: "100%",
                          height: "100%",
                          background: "#020E39",
                          borderRadius: "48px",
                        }}
                      >
                        <Typography
                          variant="inherit"
                          style={{
                            width: "100%",
                            height: "100%",
                            fontFamily: "'Rubik'",
                            fontWeight: 900,
                            fontSize: md ? 32 : 40,
                            color: "#FDFFF5",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background:
                              "linear-gradient(241.27deg, rgba(253, 255, 245, 0.08) -5.59%, rgba(253, 255, 245, 0) 100%)",
                            borderRadius: "48px",
                          }}
                        >
                          MUNCH
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant="inherit"
                      className={classes.sub_heading}
                      style={{ opacity: 1 }}
                    >
                      Leaderboard Points
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      background: "#020E39",
                      borderRadius: "20px",
                      padding: "25px",
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      gap: "15px",
                    }}
                    className="flip-card-back"
                  >
                    <Box
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <Image
                        src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/munch.svg"
                        alt="Foodverse"
                        width={md ? 62 : 82}
                        height={md ? 62 : 82}
                      />
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          style={{
                            fontFamily: "'Rubik'",
                            fontWeight: 700,
                            fontSize: md ? 24 : 30,
                            color: "#FFFFFF",
                            textAlign: "left",
                          }}
                        >
                          MUNCH
                        </Typography>
                        <Typography className={classes.description}>
                          Determines your Ranking
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "flex-start",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        style={{
                          width: "100%",
                          fontWeight: 700,
                          fontSize: "24px",
                          lineHeight: "120%",
                          color: "#FFFCF5",
                          textAlign: "left",
                          margin: "10px 0",
                        }}
                      >
                        How to Earn:
                      </Typography>
                      <ul>
                        <li
                          className={classes.description}
                          style={{
                            color: "#FFFCF5",
                            opacity: 0.8,
                            listStyle: "outside",
                          }}
                        >
                          Complete Food Fury Levels & Daily Quests
                        </li>
                        <li
                          className={classes.description}
                          style={{
                            color: "#FFFCF5",
                            opacity: 0.8,
                            listStyle: "outside",
                          }}
                        >
                          Win Battles in Food5 and Foodtruck Wars
                        </li>
                      </ul>
                    </Box>
                    <Box
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "flex-start",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        style={{
                          width: "100%",
                          fontWeight: 700,
                          fontSize: "24px",
                          lineHeight: "120%",
                          color: "#FFFCF5",
                          textAlign: "left",
                          marginBottom: "10px",
                        }}
                      >
                        How to Maximise:
                      </Typography>
                      <ul>
                        <li
                          className={classes.description}
                          style={{
                            color: "#FFFCF5",
                            opacity: 0.8,
                            listStyle: "outside",
                          }}
                        >
                          Play with Top Dish Collectibles for maximum Rewards
                        </li>
                        <li
                          className={classes.description}
                          style={{
                            color: "#FFFCF5",
                            opacity: 0.8,
                            listStyle: "outside",
                          }}
                        >
                          Higher Level Dishes earn you more Munch & speed up
                          your rise on the Leaderboard
                        </li>
                      </ul>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Image
              src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/home/game_currency.svg"
              alt="Foodverse"
              width={md ? (sm ? 70 : 115) : 153}
              height={md ? (sm ? 70 : 115) : 159}
              style={{
                position: "absolute",
                top: sm ? "-5%" : "-7%",
              }}
            />
            <Box
              style={{
                position: "absolute",
                width: lg ? 338 : 438,
                height: lg ? 338 : 438,
                left: "40%",
                top: "25%",
                background: "#6640FF",
                opacity: 0.6,
                filter: "blur(212px)",
                zIndex: -1,
              }}
            />
          </Box>
        </Box>

        {/* join telegram */}
        <Box
          style={{
            width: "100%",
            height: "100%",
            padding: sm ? "50px 5%" : "7% 5%",
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
              maxWidth: lg ? (md ? (sm ? 300 : 600) : 750) : 1100,
              margin: "0 auto",
              height: "100%",
              position: "relative",
            }}
          >
            <Box
              style={{
                width: "100%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: lg ? "5px" : "25px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "'Rubik'",
                    fontWeight: 900,
                    fontSize: lg ? (md ? (sm ? 42 : 75) : 90) : 120,
                    lineHeight: "90%",
                    color: "#6486FF",
                  }}
                >
                  JOIN
                </Typography>
                {!sm && (
                  <Typography
                    className={classes.description}
                    style={{ maxWidth: lg ? (md ? 240 : 300) : 450 }}
                  >
                    Gobbl brings Food to Blockchain, every day in every way.
                    Connect with the fastest growing Food Community on Web3!
                  </Typography>
                )}
              </Box>
              <Image
                src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/home/join_discord.svg"
                alt="Foodverse"
                width={lg ? (md ? (sm ? 50 : 107) : 147) : 187}
                height={lg ? (md ? (sm ? 50 : 107) : 147) : 177}
                style={{
                  position: "absolute",
                  left: lg ? (md ? "42%" : "38%") : "44%",
                }}
              />
              <Typography
                style={{
                  height: 95,
                  fontFamily: "'Rubik'",
                  fontWeight: 900,
                  fontSize: lg ? (md ? (sm ? 42 : 75) : 90) : 120,
                  lineHeight: "90%",
                  color: "#6486FF",
                  textAlign: "right",
                  position: "relative",
                }}
              >
                THE
                <br />
                <span
                  style={{
                    position: "absolute",
                    right: 0,
                  }}
                >
                  GOBBLS
                </span>
              </Typography>
            </Box>
            {sm && (
              <Typography
                className={classes.description}
                style={{
                  maxWidth: lg ? (md ? (sm ? 300 : 240) : 300) : 450,
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                The Foodverse brings Food to Blockchain, every day in every way.
                Connect with the fastest growing Food Community on Web3!
              </Typography>
            )}
          </Box>
          <Box
            style={{
              width: "100%",
              maxWidth: "1240px",
              margin: "0 auto",
              height: "100%",
              position: "relative",
              paddingTop: "7%",
            }}
          >
            {/* community card */}
            {/* <Box
              style={{
                width: "100%",
                maxWidth: "480px",
                height: "296px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                padding: "24px",
                gap: "24px",
                background:
                  "linear-gradient(241.27deg, rgba(255, 255, 255, 0.08) -5.59%, rgba(255, 255, 255, 0) 100%)",
                borderRadius: sm ? "20px" :"24px",
                border: "1px solid #61625c",
              }}
            >
              <Typography className={classes.description}>
                From harvesting ingredients to battling it out in the Foodtruck
                Wars, every aspect of OneRare is designed to perfection. It's
                not just a game; it's an experience.
              </Typography>
              <Box
                style={{
                  width: "100%",
                  fontFamily: "'Rubik'",
                  fontWeight: 400,
                  fontSize: "24px",
                  color: "#FFFCF5",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Image
                  src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/home/profile.svg"
                  alt="Foodverse"
                  width={32}
                  height={32}
                  style={{ borderRadius: "50%" }}
                />
                @CulinaryWarrior
              </Box>
              <Image
                src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/images/discordIcon.svg"
                alt="Foodverse"
                width={42}
                height={42}
              />
            </Box> */}
            <Link
              href="https://t.me/gmgobbl"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <CommonButton
                style={{
                  height: lg ? (md ? (sm ? 35 : 45) : 55) : 65,
                  maxWidth: lg ? (sm ? 300 : 500) : 650,
                  margin: "0 auto",
                }}
                btnStyle={{ fontSize: lg ? (sm ? 14 : 24) : 32 }}
              >
                BECOME A PART OF THE{" "}
                <Image
                  src="/assets/home/telegram.svg"
                  alt="Gobbl"
                  width={28}
                  height={28}
                />
                COMMUNITY
              </CommonButton>
            </Link>

            <Box
              style={{
                position: "absolute",
                width: lg ? (sm ? 160 : 250) : 318,
                height: lg ? (sm ? 160 : 250) : 318,
                bottom: "-30%",
                right: "-20%",
                background: "#FBFF40",
                opacity: 0.6,
                filter: "blur(212px)",
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GamesPage;
