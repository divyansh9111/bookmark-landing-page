import * as React from "react";
import { useTheme } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab, tabClasses } from "@mui/base/Tab";
import Page from "./Page";
import bg1 from "../images/illustration-features-tab-1.svg";
import bg2 from "../images/illustration-features-tab-2.svg";
import bg3 from "../images/illustration-features-tab-3.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function Tabs_() {
  const featureData = [
    {
      feature: 1,
      bg: bg1,
      heading: "Bookmark in one click",
      paragraph:
        "  Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    {
      feature: 2,
      bg: bg2,
      heading: "Intelligent search",
      paragraph:
        "  Our powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks.",
    },
    {
      feature: 3,
      bg: bg3,
      heading: "Share your bookmarks",
      paragraph:
        "  Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  ];
  return (
    <React.Fragment>
      <Tabs className="CustomTabs" defaultValue={1}>
        <TabsList className="CustomTabsList">
          <Tab className="CustomTab" value={1}>
            Simple Bookmarking
          </Tab>
          <Tab className="CustomTab" value={2}>
            Speedy Searching
          </Tab>
          <Tab className="CustomTab" value={3}>
            Easy Sharing
          </Tab>
        </TabsList>
        {featureData.map((item) => {
          return (
            <TabPanel
              key={item.feature}
              className="CustomTabPanel"
              value={item.feature}
            >
              <Page
                bg={item.bg}
                heading={item.heading}
                paragraph={item.paragraph}
                feature={item.feature}
              />
            </TabPanel>
          );
        })}
      </Tabs>
      <Styles />
    </React.Fragment>
  );
}

function Styles() {
  const matches = useMediaQuery("(max-width:600px)");
  // Replace this with your app logic for determining dark mode
  return (
    <style>
      {`
      .CustomTabsList {
        width: 65%;
        background-color:white;
        border-bottom:1px solid  hsl(0, 0%, 67%);
        margin:2rem auto;
        display: flex;
        flex-direction:${matches?"column":"row"};
        align-items: center;
        justify-content: center;
        align-content: space-between;
      }

      .CustomTab {
        font-family: 'IBM Plex Sans', sans-serif;
        color:hsl(229, 8%, 60%);
        cursor: pointer;
        font-size: 1.2rem;
        background-color: transparent;
        width: 100%;
        line-height: 1.5;
        padding: 12px 12px;
        border: none;
        border-top:${matches&& "1px solid  hsl(0, 0%, 67%)"};
        display: flex;
        justify-content: center;
      }

      .CustomTab:hover {
        color:  #d32f2f;
      }

      .CustomTab.${tabClasses.selected} {
        background-color: #fff;
        color: hsl(229, 31%, 21%);
        border-bottom:4px solid  #d32f0f;
      }

      .CustomTab.${buttonClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .CustomTabPanel {
        width: 100%;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
      }
      `}
    </style>
  );
}
