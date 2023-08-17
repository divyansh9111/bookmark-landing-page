import { useState } from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import logo from "../images/logo-bookmark.svg";
import lightLogo from "../images/light-logo-bookmark.svg";
import bg from "../images/illustration-hero.svg";
import { Button } from "@mui/base/Button";
import Tabs_ from "./Tabs_";
import BrowserCard from "./BrowserCard";
import bLogo1 from "../images/logo-chrome.svg";
import bLogo2 from "../images/logo-firefox.svg";
import bLogo3 from "../images/logo-opera.svg";
import twitter from "../images/icon-twitter.svg";
import facebook from "../images/icon-facebook.svg";
import Faq from "./Faq";
import useMediaQuery from '@mui/material/useMediaQuery';
import Nav from "./Nav";

function Home() {
  const matches = useMediaQuery('(max-width:600px)');
  const bData = {
    b1: {
      id: 1,
      logo: bLogo1,
      heading: "  Add to Chrome",
      paragraph: "  Minimum version 62",
    },
    b2: {
      id: 2,
      logo: bLogo2,
      heading: "  Add to Firefox",
      paragraph: "  Minimum version 55",
    },
    b3: {
      id: 3,
      logo: bLogo3,
      heading: "  Add to Opera",
      paragraph: "  Minimum version 46",
    },
  };
  return (
    <>
      <CssBaseline />
      <Container disableGutters maxWidth="lg"  >
        <Container maxWidth={matches?"xs": "md"} disableGutters sx={{ mb: "7rem",p:matches?"1rem":""}}>
        <Nav/>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs:"column-reverse",
                sm:"row",
                md:"row"
              },
              justifyContent: "space-between",
              gap:matches?"3rem":"",
              mt:matches?"3rem": "10rem",
            }}
          >
            <Box
              sx={{
                width:matches?"100%": "50%",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                textAlign:matches?"center":""
              }}
            >
              <h1
                style={{
                  fontSize:matches?"2rem" :"2.5rem",
                  fontWeight: "500",
                  color: "hsl(229, 31%, 21%)",
                  lineHeight:matches?"": "3rem",
                }}
              >
                A Simple Bookmark Manager
              </h1>
              <p className="para">
                {" "}
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
              </p>
              <span>
                <Button className="intro-btn" id="chrome-btn">
                  Get it on Chrome
                </Button>
                <Button className="intro-btn" id="firefox-btn">
                  Get it on Firefox
                </Button>
              </span>
            </Box>
            <Box sx={{ width: matches?"100%": "50%", position: "relative" }}>
              <img
                style={{ position:matches?"":"absolute", top:matches?"": "-5rem", left:matches?"": "1.2rem" }}
                width={matches?"105%":"115%"}
                src={bg}
                alt="background"
              />
              <Box
                sx={{
                  width:matches?"93%":"92%",
                  height:matches?"14rem":"18rem",
                  backgroundColor: "hsl(231, 69%, 60%)",
                  borderTopLeftRadius: "8rem",
                  borderBottomLeftRadius: "8rem",
                  position: "absolute",
                  top: "2.8rem",
                  left:matches?"3rem": "10rem",
                  zIndex: "-1",
                }}
              />
            </Box>
          </Box>
          <Box id="feature" sx={{ mt: "10rem" }}>
            {/*Feature*/}
            <Box sx={{ textAlign: "center", width:matches?"100%": "50%", mx: "auto" }}>
              <h1
                style={{
                  fontWeight: "500",
                  color: "hsl(229, 31%, 21%)",
                  marginBottom: "1rem",
                }}
              >
                Features
              </h1>
              <p className="para">
                Our aim is to make it quick and easy for you to access your
                favourite websites. Your bookmarks sync between your devices so
                you can access them on the go.
              </p>
            </Box>
            <Box>
              {/*tabs*/}
              <Tabs_ />
            </Box>
          </Box>
          <Box sx={{ mt: "10rem" }}>
            {/*Download*/}
            <Box sx={{ textAlign: "center", width:matches?"100%": "50%", mx: "auto" }}>
              <h2
                style={{
                  fontWeight: "500",
                  color: "hsl(229, 31%, 21%)",
                  marginBottom: "1rem",
                }}
              >
                Download the extension
              </h2>
              <p className="para">
                We’ve got more browsers in the pipeline. Please do let us know
                if you’ve got a favourite you’d like us to prioritize.
              </p>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection:matches?"column": "row",
                justifyContent: "center",
                gap:matches?"0rem": "1.7rem",
                marginTop:matches?"3rem":""
              }}
            >
              <BrowserCard
                l={bData.b1.logo}
                h={bData.b1.heading}
                p={bData.b1.paragraph}
                id={bData.b1.id}
              />
              <BrowserCard
                l={bData.b2.logo}
                h={bData.b2.heading}
                p={bData.b2.paragraph}
                id={bData.b2.id}
              />
              <BrowserCard
                l={bData.b3.logo}
                h={bData.b3.heading}
                p={bData.b3.paragraph}
                id={bData.b3.id}
              />
            </Box>
          </Box>
          <Box sx={{}}>
            {/*faq*/}
            <Box sx={{ textAlign: "center", width:matches?"100%": "50%", mx: "auto" }}>
              <h2
                style={{
                  fontWeight: "500",
                  color: "hsl(229, 31%, 21%)",
                  marginBottom: "1rem",
                }}
              >
                Frequently Asked Questions
              </h2>
              <p className="para">
                Here are some of our FAQs. If you have any other questions you’d
                like answered please feel free to email us.
              </p>
              <Faq />
              <Button className="intro-btn" id="chrome-btn">
                More Info
              </Button>
            </Box>
          </Box>
        </Container>
        {/* contact */}
        <Box
          id="contact"
          sx={{ bgcolor: "  hsl(231, 69%, 60%)", height: "20rem",display:'flex',flexDirection:'column',gap:matches?"": "1rem",justifyContent:'space-between' }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              mx: "auto",
              my:'3rem',
              width:matches?"100%": "30%",
              height:matches?'15rem': '10rem',
              textAlign: "center",
            }}
          >
            <p style={{color:'#',fontSize:'.7rem',letterSpacing:'.3rem'}}> 35,000+ ALREADY JOINED</p>
            <h2
              style={{
                fontWeight: "500",
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              Stay up-to-date with what we’re doing
            </h2>
            <Box sx={{display:'flex',flexDirection:matches?"column":"row",width:matches?"80%":'auto',mx:matches?"auto":"",marginBottom: "1rem",gap:matches?"1rem":""}}>
              <input style={{width:matches?"":'52%', color:'hsl(229, 8%, 60%)' ,padding:'.9rem',fontSize:'.7rem',marginRight:matches?"":'1rem',borderRadius:'.2rem',border:'none'}} type='text' placeholder="Enter your email address"/>
              <Button className="login-btn ct">Contact Us</Button>
            </Box>
          </Box>
          <Box
            sx={{
              bgcolor: " hsl(229, 31%, 21%)",
              height:matches?"20rem": "5rem",
              px:matches?"": "6.2rem",
              display: "flex",
              flexDirection:matches?"column": "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                paddingTop: ".4rem",
                display: "flex",
                flexDirection:matches?"column": "row",
                gap: "2rem",
                margin:matches?"1rem 0":"",
                alignItems:matches?"center":""
              }}
            >
              <img width={"150px"} src={lightLogo} alt="Bookmark logo" />
              <nav>
                <ul style={{ color: "#fff" }} className="nav">
                  <li>
                    <a style={{ color: "#fff" }} href="#feature">
                      FEATURES
                    </a>
                  </li>
                  <li>
                    <a style={{ color: "#fff" }} href="#">
                      PRICING
                    </a>
                  </li>
                  <li>
                    <a style={{ color: "#fff" }} href="#contact">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </nav>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "2rem", margin:matches?"1rem 0":"" }}>
              <img src={twitter} />
              <img src={facebook} />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Home;
