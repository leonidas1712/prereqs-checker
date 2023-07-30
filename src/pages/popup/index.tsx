import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "@pages/popup/index.css";
import Popup from "@pages/popup/Popup";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import { MantineProvider } from "@mantine/core";

refreshOnUpdate("pages/popup");

function Root() {
  // useEffect(() => {
  //   console.log("hi from root");

  //   chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  //     console.log(sender.tab ?
  //                 "from a content script:" + sender.tab.url :
  //                 "from the extension");

  //     console.log("Request:", request);

  //   },)
  // }, []);

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

  console.log("hi from init");

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");

    console.log("Request:", request);

  },)

  const root = createRoot(appContainer);
  root.render(
    <Root />
  );
}

init();
