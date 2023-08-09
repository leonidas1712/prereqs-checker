import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "@pages/popup/style/index.css";
import Popup from "@pages/popup/Popup";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import { MantineProvider } from "@mantine/core";
import { requestModuleFromContentScript } from "./utils/helpers";
import { DarkThemeOverride, LightThemeOverride } from "./utils/themes";
import * as Opt from "fp-ts/lib/Option";
import { Module } from "@src/common";

refreshOnUpdate("pages/popup");


// Refresh the useEffect here when content title changes
// React.SetStateAction<Opt.Option<Module>>

async function getCurrentTab() {
  const queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  return chrome.tabs.query(queryOptions);
}

// set module here: pass down Option<Module> to popup
function Root() {
  const [module, setModule] = useState<Opt.Option<Module>>(Opt.none);
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);


  // To request for module upon initial page load (errs when not on nusmods.com)
  useEffect(() => {
    requestModuleFromContentScript()
    .then((res) => { 
      console.log("Res from content script:", res);
      setModule(Opt.some(res));

    })
    .catch((err) => console.log("Error while requesting:", err))
    .finally(() => {
      setLoading(false);
    });
  },[]);
  return (
    <MantineProvider theme={isDark ? DarkThemeOverride : LightThemeOverride}>
        <Popup module={module} loading={loading} isDark={isDark} setIsDark={setIsDark} />
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
