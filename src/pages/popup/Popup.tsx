import React, { useEffect, useState } from "react";
import "@pages/popup/style/Popup.css";
import { Box, Loader, useMantineTheme, Center } from "@mantine/core";

import { Header } from "./Header";
import { Content } from "./Content";
import { ModuleProps } from "./utils/common";
// change Box bg to use theme

const Spinner = (props: { color: string }) => {
  return (
    <Center>
      <Loader color={props.color} mt={10}/>
    </Center>
  );
};

export type ColorSchemeProps = {
  isDark:boolean,
  setIsDark:React.Dispatch<React.SetStateAction<boolean>>
}
type PopupProps = ModuleProps & ColorSchemeProps & {
  loading:boolean,
}

const Popup = (props:PopupProps) => {
  const theme = useMantineTheme();

  // initially don't show mods
  const [showMods, setShowMods] = useState(false);
  return (
      <Box h="100%" bg={theme.other.bgColor}>  
        <Header 
        module={props.module} 
        showMods={showMods} 
        setShowMods={setShowMods}
        isDark={props.isDark}
        setIsDark={props.setIsDark}
        />
        {props.loading ? <Spinner color={theme.other.priOrange} /> : <Content module={props.module} showMods={showMods} setShowMods={setShowMods}/> }
      </Box>
  );
};

export default Popup;
