import React from "react";
import logo from "@assets/img/logo.svg";
import "@pages/popup/Popup.css";
import { Container, Text, Accordion, Center, Box, ScrollArea, Flex, Stack, Divider} from "@mantine/core";
import { replicate } from "fp-ts/lib/Array";

const Mods = () => {
  return <Accordion variant="separated" radius="sm" defaultValue="mods"
  styles={{
    item: {
      width:"100%"
    }}}>
  <Accordion.Item value="mods">
    <Accordion.Control>Add modules</Accordion.Control>
    <Accordion.Panel>Panel content</Accordion.Panel>
  </Accordion.Item>
 </Accordion>
};


const CONTENT_HEIGHT_PCT_INT=95;
const CONTENT_HEIGHT_PCT=`${CONTENT_HEIGHT_PCT_INT}%`;
const HEADER_HEIGHT_PCT=`${100-CONTENT_HEIGHT_PCT_INT}%`

function Test2() {
  const topStyle = {
    flex: '1',
    overflow: 'auto',
    // height: "20%",
  };

  const bottomStyle = {
    flex: '1.3',
    overflow: 'auto',
    // height: "80%",
  };

  return (
    <Flex direction={"column"} align={"stretch"} justify={"stretch"} style={{height:CONTENT_HEIGHT_PCT}}>
      <ScrollArea style={topStyle} type="auto" bg="blue">
       <Repeat n={20} text="Hi first"/>
     </ScrollArea>

     <ScrollArea style={bottomStyle} type="auto" bg="cyan">
       <Repeat n={100} text="Hi second"/>
     </ScrollArea>
    </Flex>
  );
}

function Repeat({ n, text }: { n:number, text:string })  {
  const mapper = (txt: string, idx: number) => {
    return <Text fz="xl">{`${idx+1}. ${txt}`}</Text>
  };

  return (
    <>
      {/* { replicate(n, <Text fz="xl">{text}</Text>) } */}
      { replicate(n, text).map(mapper) }
    </>
  )
}

const Popup = () => {
  return (
    <Box h="100%">
      <Box h={HEADER_HEIGHT_PCT} bg="red">
        <Text fz="xl" align="center">Prerequisites Checker</Text>
      </Box>

      <Test2/>
    </Box>
  );
};

export default Popup;
