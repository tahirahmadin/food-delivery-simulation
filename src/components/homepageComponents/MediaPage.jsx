import React, { useEffect, useState } from "react";
import { mediaArticles, mediaVideos } from "./data/mediaData";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Seo from "../../common-v4/Seo";
import CommonButton from "../../common-v4/CommonButton";

const MediaPage = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const [videos, setVideos] = useState(md ? 10 : 9);
  const [articles, setArticles] = useState(md ? 10 : 9);

  useEffect(() => {
    if (md) {
      setVideos(10);
      setArticles(10);
    }
  }, [md]);

  return (
    <div className="media">
      <Seo
        title="Media | Foodverse"
        description="The Farm consists of six theme pools. Farmers can stake their $ORARE tokens on our farm to win Ingredients' NFTs as rewards. Start staking now."
        keywords="farm, onerare farm, foodverse farm, stake in farm, nft farm, nft game, metaverse game, game nft, nft metaverse, nft blockchain, metaverse blockchain, food metaverse, foodverse, food game, nft food, metaverse food game, onerare, onerare foodverse, onerare metaverse"
        image="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/images/farm.jpg"
      />

      {/* videos */}
      <Box
        style={{
          width: "100%",
          height: "100%",
          background: "#161810",
          position: "relative",
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
            top: "50%",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: "50%",
          }}
        />
        <div className="media_container">
          <Box
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingTop: "7%",
            }}
          >
            <Box
              style={{
                width: "100%",
                height: md ? (sm ? 120 : 140) : 190,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxSizing: "border-box",
                position: "relative",
                maxWidth: "100%",
              }}
            >
              <Typography
                variant="inherit"
                sx={{
                  textAlign: "left",
                  whiteSpace: "nowrap",
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
                }}
              >
                Watch our
              </Typography>
              <Box
                style={{
                  width: "100%",
                  maxWidth: 700,
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
                  transform: "rotate(-6deg)",
                  marginTop: "0px",
                  zIndex: 2,
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
                  sx={{
                    textAlign: "left",
                    whiteSpace: "nowrap",
                    fontFamily: "'Rubik'",
                    fontWeight: 900,
                    fontSize: 58,
                    lineHeight: "100%",
                    color: "#161810",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                    [theme.breakpoints.down("lg")]: {
                      fontSize: 48,
                    },
                    [theme.breakpoints.down("md")]: {
                      fontSize: 42,
                    },
                    [theme.breakpoints.down("sm")]: {
                      fontSize: 36,
                    },
                  }}
                >
                  Media Interactions
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
          </Box>
          <div className="media_cards">
            {mediaVideos.slice(0, videos).map((video, i) => (
              <div className="media_card" key={i}>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#161811",
                    borderRadius: sm ? "16px" : "25px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: sm ? "15px" : "20px",
                    padding: sm ? "10px 10px 35px" : "20px 20px 60px",
                  }}
                >
                  <Image
                    src={video.thumb}
                    alt={video.platform}
                    className="media_thumb"
                    width={313}
                    height={200}
                    style={{ minWidth: "100%" }}
                  />
                  <div>
                    <Image
                      src={video.logo}
                      alt={video.platform}
                      className="media_logo"
                      width={80}
                      height={80}
                    />
                    <p>{video.platform}</p>
                  </div>
                  <a href={video.url} target="_blank" className="card_cta">
                    <span>VIEW FULL VIDEO</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {mediaVideos.length >= videos && (
            <button
              className="media_more"
              onClick={() => setVideos(videos + (md ? 10 : 9))}
            >
              SEE MORE
            </button>
          )}
        </div>
      </Box>

      {/* articles */}
      <div className="media_articles">
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
            top: "50%",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: "50%",
          }}
        />
        <div className="media_container">
          <Box
            style={{
              width: "fit-content",
              maxWidth: 494,
              height: md ? (sm ? 50 : 65) : 80,
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: md ? "10px" : "15px",
              padding: md ? "0 15px" : "0 25px",
              background: "#FF9CFF",
              border: "1px solid #FF9CFF",
              borderRadius: "12px",
              transform: "rotate(6deg)",
              zIndex: 2,
              marginBottom: sm ? "20px" : "0px",
              marginLeft: "auto",
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
              sx={{
                textAlign: "left",
                whiteSpace: "nowrap",
                fontFamily: "'Rubik'",
                fontWeight: 900,
                fontSize: 50,
                lineHeight: "100%",
                color: "#161810",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
                [theme.breakpoints.down("lg")]: {
                  fontSize: 42,
                },
                [theme.breakpoints.down("md")]: {
                  fontSize: 36,
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: 32,
                },
              }}
            >
              News Updates
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
          <div className="media_cards">
            {mediaArticles.slice(0, articles).map((article, i) => (
              <div className="media_card" key={i}>
                <Image
                  src={article.logo}
                  alt="FoodVerse Article"
                  className="article_logo"
                  width={208}
                  height={80}
                />
                <Image
                  src={article.article}
                  alt="FoodVerse Article"
                  className="article_Image"
                  width={308}
                  height={228}
                />
                <a href={article.url} target="_blank" className="card_cta">
                  <span>READ ARTICLE</span>
                </a>
              </div>
            ))}
          </div>
          {mediaArticles.length >= articles && (
            <button
              className="media_more"
              onClick={() => setArticles(articles + (md ? 10 : 9))}
            >
              SEE MORE
            </button>
          )}
        </div>
      </div>

      {/* press_kit */}
      <div className="kit_container">
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
        <div className="kit_header">
          <Box
            style={{
              width: "100%",
              display: "flex",
              flexDirection: md ? "column" : "row",
              gap: md ? "5px" : "25px",
            }}
          >
            <Box
              style={{
                width: "100%",
                height: md ? (sm ? 120 : 140) : 190,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                boxSizing: "border-box",
                position: "relative",
                maxWidth: "100%",
              }}
            >
              <Typography
                variant="inherit"
                sx={{
                  textAlign: "left",
                  whiteSpace: "nowrap",
                  fontFamily: "'Rubik'",
                  fontWeight: 900,
                  fontSize: 56,
                  lineHeight: "100%",
                  color: "#FDFFF5",
                  textAlign: "center",
                  position: "relative",
                  zIndex: 1,
                  [theme.breakpoints.down("lg")]: {
                    fontSize: 48,
                  },
                  [theme.breakpoints.down("md")]: {
                    fontSize: 42,
                  },
                  [theme.breakpoints.down("sm")]: {
                    fontSize: 36,
                  },
                }}
              >
                Gobbl
              </Typography>
              <Box
                style={{
                  width: "fit-content",
                  maxWidth: 350,
                  height: md ? (sm ? 50 : 65) : 80,
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: md ? "10px" : "15px",
                  padding: md ? "0 15px" : "0 15px",
                  background: "#FFFF19",
                  border: "1px solid #FFFF19",
                  borderRadius: "12px",
                  transform: "rotate(-6deg)",
                  marginTop: sm ? "-10px" : "-12px",
                  marginLeft: "-5%",
                  zIndex: 2,
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
                  sx={{
                    textAlign: "left",
                    whiteSpace: "nowrap",
                    fontFamily: "'Rubik'",
                    fontWeight: 900,
                    fontSize: 50,
                    lineHeight: "100%",
                    color: "#161810",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                    [theme.breakpoints.down("lg")]: {
                      fontSize: 42,
                    },
                    [theme.breakpoints.down("md")]: {
                      fontSize: 36,
                    },
                    [theme.breakpoints.down("sm")]: {
                      fontSize: 32,
                    },
                  }}
                >
                  Press Kit
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
            <p
              className="partners_description"
              style={{
                width: "100%",
                fontSize: sm ? 16 : 24,
                opacity: 0.8,
                color: "#fff",
              }}
            >
              Here is our Official Press Kit for your perusal when writing and
              talking about our project. For any further questions, please
              contact partners@onerare.io
            </p>
          </Box>
        </div>
        <div className="kit_images">
          <a
            href="https://drive.google.com/drive/folders/1vfDuChXeXKts62n_Ombh0jW9p71BZAY9"
            target="_blank"
            className="kit_1"
          >
            <Image
              src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/kit/kit_1.png"
              alt="FoodVerse Trailers"
              width={590}
              height={300}
            />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1QVijoXpTxmG_6fajpm7ha7dJEyPWSdI2"
            target="_blank"
            className="kit_2"
          >
            <Image
              src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/kit/kit_2.png"
              alt="FoodVerse Logos"
              width={300}
              height={300}
            />
          </a>
          <a
            href="https://drive.google.com/drive/folders/10slMzropumFl-2vl9StzESqgzNMYvTwi"
            target="_blank"
            className="kit_3"
          >
            <Image
              src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/kit/kit_3.png"
              alt="FoodVerse Blurb"
              width={300}
              height={300}
            />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1nLJyy5P2Om6bvwsZZ_8MTpVwpPmrTODq"
            target="_blank"
            className="kit_4"
          >
            <Image
              src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/kit/kit_4.png"
              alt="FoodVerse Food DIGITAL COLLECTIBLES"
              width={300}
              height={300}
            />
          </a>
          <a
            href="https://drive.google.com/drive/folders/10FVMUMHiXT4l4S6ubo4NxQGr30Gzyj3H"
            target="_blank"
            className="kit_5"
          >
            <Image
              src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/kit/kit_5.png"
              alt="FoodVerse Game Screenshots"
              width={590}
              height={300}
            />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1q5eECw_DCyMu8z0CZADuJnkqlftaptnB"
            target="_blank"
            className="kit_6"
          >
            <Image
              src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/kit/kit_6.png"
              alt="FoodVerse Environment"
              width={300}
              height={300}
            />
          </a>
        </div>
        <a
          href="https://drive.google.com/drive/folders/1qLJHkl4i6FsOtgG0psbI8wfkb1rLC-wZ"
          target="_blank"
          className="kit_cta"
          style={{ textDecoration: "none" }}
        >
          <CommonButton
            style={{
              height: sm ? 40 : 55,
              maxWidth: sm ? 190 : 300,
              margin: "50px auto 0",
            }}
            btnStyle={{ fontWeight: 800 }}
          >
            DOWNLOAD KIT
          </CommonButton>
        </a>
      </div>
    </div>
  );
};

export default MediaPage;
