import React, { useEffect, useState } from "react";
import "@pages/popup/Popup.css";
import { Box } from "@mantine/core";

import { Header } from "./Header";
import { Content } from "./Content";

const Popup = () => {
  useEffect(() => {
    chrome.storage.local.get(["key"]).then((result) => {
      console.log("Value from popup is: " + result.key);
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
