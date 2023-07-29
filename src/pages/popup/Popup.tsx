import React, { useState } from "react";
import logo from "@assets/img/logo.svg";
import "@pages/popup/Popup.css";
import { Container, Text, Accordion, Center, Box, ScrollArea, Flex, Space, Collapse, Button, Group } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { replicate } from "fp-ts/lib/Array";


// const Mods = () => {
//   return <Accordion variant="separated" radius="sm" defaultValue="mods"
//   styles={{
//     item: {
//       width:"100%"
//     }}}>
//   <Accordion.Item value="mods">
//     <Accordion.Control>Add modules</Accordion.Control>
//     <Accordion.Panel>Panel content</Accordion.Panel>
//   </Accordion.Item>
//  </Accordion>
// };


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

function Content() {
  const topStyle:React.CSSProperties = {
    flex: '1',
    // backgroundColor:"cyan"
    // height: "20%",
  };

  const bottomStyle:React.CSSProperties = {
    flex: '1.2',
    // maxHeight:"50%",
    backgroundColor:"green"
    // height: "80%",
  };

  const [opened, { toggle }] = useDisclosure(false);
  const [showMods, setShowMods] = useState(true);

  const clickToggle = () => {
    toggle();
    setShowMods(!showMods);
  };

  return (
    <Flex direction={"column"} align={"stretch"} justify={"stretch"} style={{height:CONTENT_HEIGHT_PCT}}>
      <ScrollContent style={topStyle}>
        <Group position="center" mb={5}>
          <Button onClick={() => setShowMods(!showMods)} color="pink"><Text>Toggle modules</Text></Button>
        </Group>

        <Repeat n={15} text="Hi first"/>
      </ScrollContent>

      {/* Modules */}
      { showMods ? <ScrollContent style={bottomStyle}>
          <Repeat n={30} text="Hi second"/>
      </ScrollContent> : <></>}
    </Flex>
  );
}

function TestAll() {
  const topStyle:React.CSSProperties = {
    flex: '1',
    // backgroundColor:"cyan"
    // height: "20%",
  };

  const bottomStyle:React.CSSProperties = {
    flex: '1.2',
    // maxHeight:"50%",
    backgroundColor:"green"
    // height: "80%",
  };

  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Flex direction={"column"} align={"stretch"} justify={"stretch"} style={{height:CONTENT_HEIGHT_PCT}}>
      <ScrollContent style={topStyle}>

        <Repeat n={5} text="Hi first"/>


        <Group position="center" mb={5}>
          <Button onClick={toggle} color="pink"><Text>Toggle modules</Text></Button>
        </Group>

        <Collapse in={opened}>
          <Repeat n={30} text="Hi second"/>
        </Collapse>
      </ScrollContent>

      {/* <ScrollContent style={bottomStyle}>
        
      </ScrollContent> */}
     
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

function Header() {
  return (
    <Flex h={HEADER_HEIGHT_PCT} bg="red" justify={"center"} align={"center"}>
      <Text fz="lg" align="center">Prerequisites Checker</Text>
    </Flex>
  );
}

const Popup = () => {
  return (
    <Box h="100%">  
      <Header />
      <Content/>
    </Box>
  );
};

export default Popup;
