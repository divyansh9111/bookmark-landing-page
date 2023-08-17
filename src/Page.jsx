/* eslint-disable react/prop-types */
import { Box} from "@mui/material";
import { Button } from "@mui/base/Button";
// import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import './App.css';
const Page = (props) => {
  let bag = props.bg;
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:matches?"column":"row",
        gap:'5rem',
        mt:matches?"5rem": "8.2rem",
      }}
    >
      <Box sx={{ width:matches?"100%": "50%", position: "relative" }}>
        <img
          style={{ position:matches?"":"absolute", top: "-5rem", left:props.feature===1?"-1.2rem":"3rem" }}
          width={props.feature===1?"100%":"85%"}
          src={bag}
          alt="background"
        />
        <Box
          sx={{
            width: "118%",
            height:matches?"14rem":"18rem",
            backgroundColor: "hsl(231, 69%, 60%)",
            borderTopRightRadius: "8rem",
            borderBottomRightRadius: "8rem",
            position: "absolute",
            top:matches?"2.2rem": ".1rem",
            left: matches?"-6rem":"-10rem",
            zIndex: "-1",
          }}
        />
      </Box>
      <Box
        sx={{
         width:matches?"100%": "40%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          textAlign:matches?"center":""
        }}
      >
        <h1
          style={{
            fontWeight: "500",
            color: "hsl(229, 31%, 21%)",
            lineHeight: "3rem",
          }}
        >
          {props.heading}
        </h1>
        <p className="para">{props.paragraph}</p>
        <span>
          <Button  className="intro-btn" id="chrome-btn">
            More Info
          </Button>
        </span>
      </Box>
    </Box>
  );
};

export default Page;
