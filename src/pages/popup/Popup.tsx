import React from "react";
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


const CONTENT_HEIGHT_PCT_INT=95;
const CONTENT_HEIGHT_PCT=`${CONTENT_HEIGHT_PCT_INT}%`;
const HEADER_HEIGHT_PCT=`${100-CONTENT_HEIGHT_PCT_INT}%`

type ScrollProps = {
  style:React.CSSProperties
};

function ScrollContent(props:React.PropsWithChildren<ScrollProps>) {
  const commonStyle = {
    overflow: 'auto',
    padding:"0.4rem",
  };
  return (
    <ScrollArea style={{...props.style, ...commonStyle}} type="auto">
      { props.children }
    </ScrollArea>
  )
}

function Test3() {
  const topStyle:React.CSSProperties = {
    flex: '1',
    // backgroundColor:"cyan"
    // height: "20%",
  };

  const bottomStyle:React.CSSProperties = {
    flex: '1.2',
    backgroundColor:"green"
    // height: "80%",
  };

  // const [opened, { toggle }] = useDisclosure(false);

  return (
    <Flex direction={"column"} align={"stretch"} justify={"stretch"} style={{height:CONTENT_HEIGHT_PCT}}>
      <ScrollContent style={topStyle}>

      <Button color="pink"><Text color="orange">Toggle</Text></Button>
      

       {/* <Repeat n={2} text="Hi first"/> */}
      </ScrollContent>

     <ScrollContent style={bottomStyle}>
       <Repeat n={1} text="Hi second"/>
     </ScrollContent>
    </Flex>
  );
}

function Repeat({ n, text }: { n:number, text:string })  {
  const mapper = (txt: string, idx: number) => {
    return <Text fz="lg">{`${idx+1}. ${txt}`}</Text>
  };

  return (
    <>
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

      <Test3/>
    </Box>
  );
};

export default Popup;
