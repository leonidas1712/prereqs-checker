import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "@pages/popup/index.css";
import Popup from "@pages/popup/Popup";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import { MantineProvider } from "@mantine/core";
import { requestModuleFromContentScript } from "./helpers";
import { DarkThemeOverride } from "./themes";

refreshOnUpdate("pages/popup");


// Refresh the useEffect here when content title changes

// set module here: pass down Option<Module> to popup
function Root() {
  useEffect(() => {
    // requestModuleFromContentScript()
    //   .then((res) => console.log("Res from content script:", res))
    //   .catch((err) => console.log("Error while requesting:", err));

      // log msgs
    chrome.runtime.onMessage.addListener((msg, sender, sendRes) => {
      console.log("Received msg inside Root");
      console.log("Msg:", msg);
    });
  });
  return (
    <MantineProvider theme={DarkThemeOverride}>
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
