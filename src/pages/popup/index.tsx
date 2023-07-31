import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "@pages/popup/index.css";
import Popup from "@pages/popup/Popup";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import { MantineProvider } from "@mantine/core";
import { requestModuleFromContentScript } from "./helpers";
import { DarkThemeOverride } from "./themes";
import * as Opt from "fp-ts/lib/Option";
import { Module } from "@src/common";

refreshOnUpdate("pages/popup");


// Refresh the useEffect here when content title changes

// set module here: pass down Option<Module> to popup
function Root() {
  const [module, setModule] = useState<Opt.Option<Module>>(Opt.none);


  // To request for module upon initial page load (errs when not on nusmods.com)
  useEffect(() => {
    requestModuleFromContentScript()
      .then((res) => { 
        console.log("Res from content script:", res);
        setModule(Opt.some(res));
      })
      .catch((err) => console.log("Error while requesting:", err));

  },[]);

  // useEffect(() => {
  //   // requestModuleFromContentScript()
  //   //   .then((res) => console.log("Res from content script:", res))
  //   //   .catch((err) => console.log("Error while requesting:", err));

  //   // log msgs
  //   // to remove listener make the callback a constant
  //   chrome.runtime.onMessage.addListener((msg, sender, sendRes) => {
  //     console.log("Received msg inside Root");
  //     console.log("Msg:", msg);
  //   });

  //   // chrome.runtime.removeListener for cleanup

  // });
  return (
    <MantineProvider theme={DarkThemeOverride}>
      <Popup module={module} />
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
