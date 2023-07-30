import React, { useState } from "react";
import "@pages/popup/Popup.css";
import { Text, Box, ScrollArea, Flex,  Transition } from "@mantine/core";

import { Header } from "./Header";
import { Content } from "./Content";

const Popup = () => {
  const [showMods, setShowMods] = useState(false);
  return (
      <Box h="100%" bg="#aaa">  
        <Header showMods={showMods} setShowMods={setShowMods}/>
        <Content showMods={showMods} setShowMods={setShowMods}/>
      </Box>
  );
};

export default Popup;
