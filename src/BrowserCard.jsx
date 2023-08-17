import { Button } from "@mui/base/Button";
import Box from "@mui/material/Box";
import React from "react";
import bg from "../../images/bg-dots.svg";
import useMediaQuery from '@mui/material/useMediaQuery';
const BrowserCard = (props) => {
  const matches = useMediaQuery('(max-width:600px)');
  return (

    <Box
      sx={{
        width:matches?"90%": "25%",
        height:matches?"22rem": "20rem",
        backgroundColor: "#fff",
        my:matches?"5rem": "5rem",
        mx:matches?"auto":"",
        mt:matches?"": props.id === 1 ? "5rem" : props.id === 2 ? "7rem" : "9rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        pb: ".5rem",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        borderRadius: ".2rem",
      }}
    >
      <img
        src={props.l}
        width="38%"
      />
      <span>
        <h4
          style={{
            fontWeight: "500",
            color: "hsl(229, 31%, 21%)",
            marginTop: ".5rem",
          }}
        >
          {props.h}
        </h4>
        <p
          style={{
            color: "hsl(229, 8%, 60%)",
            fontSize: ".7rem",
            textAlign: "center",
            marginTop: ".5rem",
          }}
        >
          {props.p}
        </p>
      </span>
      <img src={bg} style={{ marginTop: "1rem" }} width="100%" />
      <Button className="intro-btn install-btn  ">
        Add & Install Extension
      </Button>
    </Box>
  );
};

export default BrowserCard;
