import React from "react";
import ProfileCard from "./ProfileCard";
import {
  profiles,
  brands,
  foodBrands,
  partners,
  chef_partners,
} from "./data/partnersData";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const Partners = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  return (
    // <Layout>

    <div
      className="partners"
      style={{
        width: "100%",
        height: "100%",
        background: "#161810",
        position: "relative",
      }}
    >
      <img
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
          height: "20%",
        }}
      />
      <img
        src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/noisebg.png"
        alt="FoodVerse"
        width={2000}
        height={2000}
        style={{
          pointerEvents: "none",
          objectFit: "cover",
          position: "absolute",
          top: "20%",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "20%",
        }}
      />
      <img
        src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/noisebg.png"
        alt="FoodVerse"
        width={2000}
        height={2000}
        style={{
          pointerEvents: "none",
          objectFit: "cover",
          position: "absolute",
          top: "40%",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "20%",
        }}
      />
      <img
        src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/noisebg.png"
        alt="FoodVerse"
        width={2000}
        height={2000}
        style={{
          pointerEvents: "none",
          objectFit: "cover",
          position: "absolute",
          top: "60%",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "20%",
        }}
      />
      <img
        src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/htp/noisebg.png"
        alt="FoodVerse"
        width={2000}
        height={2000}
        style={{
          pointerEvents: "none",
          objectFit: "cover",
          position: "absolute",
          top: "80%",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "20%",
        }}
      />
      <div className="partners_container">
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
              Meet our
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
                transform: sm ? "rotate(-6deg)" : "rotate(-8deg)",
                marginTop: sm ? "-10px" : "-12px",
                marginLeft: "-3%",
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
                  fontSize: 72,
                  lineHeight: "100%",
                  color: "#161810",
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
                Partners
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
            style={{ width: "100%", fontSize: sm ? 16 : 24, opacity: 0.8 }}
          >
            OneRare is proud to collaborate with the Best of the Best, creating
            quality partnerships to help grow our Foodverse.
            <br />
            <br />
            We are a Proud Partner to Top Brands & Celebrity Chefs from around
            the world, alongside Strategic Partnerships with Angels, VCs &
            Projects in Web3.
          </p>
        </Box>
        <div className="partners_partners">
          {partners?.map((partner) => (
            <div key={partner.id}>
              <img
                src={partner.image}
                alt={partner.description}
                width={175}
                height={175}
                style={{
                  marginBottom: "10px",
                  objectFit: "contain",
                }}
              />
              <p
                className="partners_descp"
                style={{ fontFamily: "Rubik", fontWeight: 800 }}
              >
                {partner.description}
              </p>
              <p
                className="partners_descp"
                style={{ fontWeight: 400, opacity: 0.8 }}
              >
                {partner.description2}
              </p>
            </div>
          ))}
        </div>

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
            marginBottom: "50px",
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
            Chef Partners
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
        <div className="partners_partners" style={{ paddingTop: 0 }}>
          {chef_partners?.map((chef) => (
            <div key={chef.id}>
              <img
                src={chef.image}
                alt={chef.description}
                width={242}
                height={242}
                style={{
                  marginBottom: "10px",
                  objectFit: "contain",
                }}
              />
              <p
                className="partners_descp"
                style={{ fontFamily: "Rubik", fontWeight: 800 }}
              >
                {chef.description}
              </p>
              <p
                className="partners_descp"
                style={{ fontWeight: 400, opacity: 0.8 }}
              >
                {chef.description2}
              </p>
            </div>
          ))}
        </div>

        <Box
          style={{
            width: "fit-content",
            maxWidth: 302,
            height: md ? (sm ? 50 : 65) : 80,
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: md ? "10px" : "15px",
            padding: md ? "0 15px" : "0 25px",
            background: "#FFFF19",
            border: "1px solid #FFFF19",
            borderRadius: "12px",
            transform: "rotate(-6deg)",
            zIndex: 2,
            marginBottom: md ? "-35px" : "50px",
            marginRight: "auto",
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
            Angels
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
        <div className="partners_profiles">
          {profiles?.map((profile) => (
            <ProfileCard
              key={profile.id}
              redirectUrl={profile.redirectUrl}
              profile={profile.profile}
              batch={profile.batch}
              name={profile.name}
              company={profile.company}
            />
          ))}
        </div>

        <Box
          style={{
            width: "fit-content",
            maxWidth: 358,
            height: md ? (sm ? 50 : 65) : 80,
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: md ? "10px" : "15px",
            padding: md ? "0 15px" : "0 25px",
            background: "#FFFF19",
            border: "1px solid #FFFF19",
            borderRadius: "12px",
            transform: "rotate(6deg)",
            zIndex: 2,
            marginBottom: "50px",
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
            Partners
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
        <div className="partners_brands partners_brands1">
          {brands?.map((brand) => (
            <a
              href={brand.redirectUrl}
              target="_blank"
              rel="noreferrer"
              className="brand_card"
              key={brand.id}
            >
              <img
                src={brand.image}
                alt={brand.image}
                width={200}
                height={80}
              />
            </a>
          ))}
        </div>

        <Box
          style={{
            width: "fit-content",
            maxWidth: 497,
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
            transform: "rotate(-6deg)",
            zIndex: 2,
            marginBottom: "50px",
            marginRight: "auto",
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
            Food Partners
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
        <div className="partners_brands partners_brands2">
          {foodBrands?.map((brand) => (
            <a
              href={brand.redirectUrl}
              target="_blank"
              rel="noreferrer"
              className="brand_card"
              key={brand.id}
            >
              <img
                src={brand.image}
                alt={brand.image}
                width={200}
                height={80}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
    // </Layout>
  );
};

export default Partners;
