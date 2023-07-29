import React from "react";
import logo from "@assets/img/logo.svg";
import "@pages/popup/Popup.css";
import { Container, Text, Accordion, Center } from "@mantine/core";
import { Plus } from 'tabler-icons-react';

const Popup = () => {
  return (
     <Accordion variant="separated" radius="sm" defaultValue="mods"
      styles={{
        item: {
          width:"100%"
        }}}>
      <Accordion.Item value="mods">
        <Accordion.Control>Add modules</Accordion.Control>
        <Accordion.Panel>Panel content</Accordion.Panel>
      </Accordion.Item>
     </Accordion>
  );
};

export default Popup;
