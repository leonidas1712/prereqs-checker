import React, { useEffect, useState } from "react";
import "@pages/popup/Popup.css";
import { Box, useMantineTheme } from "@mantine/core";

import { Header } from "./Header";
import { Content } from "./Content";
import { ModuleProps } from "./common";
// change Box bg to use theme

const Popup = (props:ModuleProps & { loading:boolean }) => {
  // useEffect(() => {
  //   chrome.storage.local.get(["key"]).then((result:{ key: ModulesRecord}) => {
  //     console.log("Value from popup is: " + result.key['CS3233']);
  //     console.log("Num of keys:", Object.keys(result.key).length);
  //   });
  // });

  const theme = useMantineTheme();

  // initially don't show mods
  const [showMods, setShowMods] = useState(false);
  return (
      <Box h="100%" bg={theme.other.bgColor}>  
        <Header module={props.module} showMods={showMods} setShowMods={setShowMods}/>
        <Content module={props.module} showMods={showMods} setShowMods={setShowMods}/>
      </Box>
  );
};

export default Popup;
