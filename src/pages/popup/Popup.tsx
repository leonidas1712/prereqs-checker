import React from "react";
import logo from "@assets/img/logo.svg";
import "@pages/popup/Popup.css";
import { Container, Text, Accordion, Center } from "@mantine/core";
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

function Repeat({ n, text }: { n:number, text:string })  {
  return (
    <>
      { replicate(n, <Text fz="xl">{text}</Text>) }
    </>
  )
}

const Popup = () => {
  return (
     <>
      <Repeat n={30} text="Hi first"/>
      <Repeat n={30} text="Hi second"/>

     </>
  );
};

export default Popup;
