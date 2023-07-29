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

{/* <Box bg="red" style={{flex: 1}}>
        <Text fz="xl">hi</Text>
      </Box> */}

function Test() {
  return (
    <Flex direction={"column"} align={"stretch"} justify={"stretch"} style={{height:"100%"}}>
      <Box bg="blue" style={{flex: 1}}><Text fz="xl">hi2</Text></Box>
      <Box bg="cyan" style={{flex: 1.3}}><Text fz="xl">hi3</Text></Box>
    </Flex>
  );
}

function Repeat({ n, text }: { n:number, text:string })  {
  return (
    <>
      { replicate(n, <Text fz="xl">{text}</Text>) }
    </>
  )
}

function Content() {
  const topStyle = {
    flex: '1',
    overflow: 'auto',
    // height: "20%",
  };

  const bottomStyle = {
    flex: '1.618',
    overflow: 'auto',
    // height: "80%",
  };

  return (
    <Stack spacing="xs" h="600px" style={{
     alignContent:"center",
   }}>
     <ScrollArea style={topStyle} type="auto" bg="white">
       <Repeat n={1} text="Hi first"/>
     </ScrollArea>
     <Divider/>
     <ScrollArea style={bottomStyle} bg="white">
       <Repeat n={1} text="Hi second"/>
     </ScrollArea>
     {/* <Repeat n={30} text="Hi first"/>
     <Repeat n={30} text="Hi second"/> */}
    </Stack>
 );
}

const Popup = () => {
  const topStyle = {
    flex: '1',
    overflow: 'auto',
    // height: "20%",
  };

  const bottomStyle = {
    flex: '1.618',
    overflow: 'auto',
    // height: "80%",
  };

  return (
     <Test/>
  );
};

export default Popup;
