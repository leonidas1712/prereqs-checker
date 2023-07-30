import React, { useState } from "react";
import logo from "@assets/img/logo.svg";
import "@pages/popup/Popup.css";
import { Container, Text, Accordion, Center, Box, ScrollArea, Flex, 
  Space, Collapse, Button, Group, ActionIcon, Tooltip, Transition } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { replicate } from "fp-ts/lib/Array";

import { Header } from "./Header";

import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const CONTENT_HEIGHT_PCT_INT=93;
const CONTENT_HEIGHT_PCT=`${CONTENT_HEIGHT_PCT_INT}%`;
const HEADER_HEIGHT_PCT=`${100-CONTENT_HEIGHT_PCT_INT}%`

type ScrollProps = {
  style?:React.CSSProperties
};

function ScrollContent(props:React.PropsWithChildren<ScrollProps>) {
  const commonStyle:React.CSSProperties = {
    overflow: 'auto',
    padding:"0.5rem",
  };
  return (
    <ScrollArea style={{...props.style, ...commonStyle}} type="auto">
      { props.children }
    </ScrollArea>
  )
}

function Content(props:ShowModsProps) {
  const prereqStyle:React.CSSProperties = {
    flex: '1',
    backgroundColor:"#222324",
    color:"#ff5138"

    // backgroundColor:"cyan"
    // height: "20%",
  };

  const modsStyle:React.CSSProperties = {
    flex: '1.2',
    backgroundColor:"#aaa"
    // maxHeight:"50%",
    // height: "80%",
  };

  const { showMods, setShowMods } = props;

  return (
    // Prerequisite errors
    <Flex direction={"column"} align={"stretch"} justify={"stretch"} style={{height:CONTENT_HEIGHT_PCT}}>
      <ScrollContent style={prereqStyle}>
        <Repeat n={15} text="Hi!"/>
      </ScrollContent>

      <Transition mounted={showMods} transition="slide-up" duration={200} timingFunction="ease-out">

      {/* Modules */}
      {(styles) => showMods ? 
      <ScrollContent style={{...styles, ...modsStyle}}>
          <Repeat n={30} text="Hi second"/>
      </ScrollContent> : <></>}

    </Transition>
    </Flex>
  );
}

function Repeat({ n, text }: { n:number, text:string })  {
  const mapper = (txt: string, idx: number) => {
    return <Text fz="md">{`${idx+1}. ${txt}`}</Text>
  };

  return (
    <>
      { replicate(n, text).map(mapper) }
    </>
  )
}

type ShowModsProps = {
  showMods: boolean, 
  setShowMods: React.Dispatch<React.SetStateAction<boolean>>
}

function ToggleModsBtn(props:ShowModsProps) {
  const { showMods, setShowMods } = props;
  const click = () => {
    console.log("Show mods", showMods);
    setShowMods(!showMods);
  };

  const label=showMods ? "Hide mods" : "Show mods";
  const icon = showMods ? <FaEyeSlash size="1.1rem"/> : <FaEye size="1.1rem" />

  return (
    <Tooltip label={label} color="teal">
      <ActionIcon component="button" onClick={click} color="yellow">{icon}</ActionIcon>
    </Tooltip>
  )
}

// function Header(props:ShowModsProps) {
//   return (
//     <Flex h={HEADER_HEIGHT_PCT} bg="#292929" justify={"center"} align={"center"}>
//       <Text fz="lg" align="center" color="#ff5138">Prerequisites Checker</Text>
//       <ToggleModsBtn showMods={props.showMods} setShowMods={props.setShowMods} />
//     </Flex>
//   );
// }


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
