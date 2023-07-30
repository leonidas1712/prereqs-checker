import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "@pages/popup/index.css";
import Popup from "@pages/popup/Popup";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import { MantineProvider } from "@mantine/core";
import { requestContentScript } from "./helpers";

refreshOnUpdate("pages/popup");

// set module here: pass down Option<Module> to popup
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
