import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "@pages/popup/index.css";
import Popup from "@pages/popup/Popup";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import { MantineProvider } from "@mantine/core";

refreshOnUpdate("pages/popup");

async function requestContentScript() {
  console.log("Requesting tab changed!");
  const queryOptions = { active: true, lastFocusedWindow:true };

    try {
      const [tab] = await chrome.tabs.query(queryOptions);
      console.log("Got tab:")
      console.log(tab);
      

      if (tab) {
        console.log("Tab url:", tab.url);
        chrome.tabs.sendMessage(tab.id, { type: 'hi from popup' }, (response) => {
          console.log("Got response from content script:");
          console.log(response);
        });
      }
  } catch(error) {
    console.log("Error requesting content script from index.tsx:");
    console.log(error);
  }
}

function Root() {
  useEffect(() => {
    requestContentScript();
  });
  return (
    <MantineProvider theme={{
      // Font from NUSMods
      fontFamily: "-apple-system, BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    }}>
      <Popup />
    </MantineProvider>
  )
}

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find #app-container");
  }

  const root = createRoot(appContainer);
  root.render(
    <Root />
  );
}

init();
