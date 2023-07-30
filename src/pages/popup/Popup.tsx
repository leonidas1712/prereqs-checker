import React, { useEffect, useState } from "react";
import "@pages/popup/Popup.css";
import { Box } from "@mantine/core";

import { Header } from "./Header";
import { Content } from "./Content";
import { ModuleCondensed } from "@src/common";

const Popup = () => {
  useEffect(() => {
    chrome.storage.local.get(["key"]).then((result:{ key: ModuleCondensed[]}) => {
      console.log("Value from popup is: " + result.key.slice(0,5));
      const y = result.key.slice(0,5).map((r) => r.moduleCode);
      console.log("y:", y);
      console.log("Total len:", result.key.length);
    });
  });
  const [showMods, setShowMods] = useState(false);
  return (
      <Box h="100%" bg="#aaa">  
        <Header showMods={showMods} setShowMods={setShowMods}/>
        <Content showMods={showMods} setShowMods={setShowMods}/>
      </Box>
  );
};

export default Popup;
