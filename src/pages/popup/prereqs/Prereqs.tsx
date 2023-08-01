import { Stack, Container, Text, Center, useMantineTheme} from "@mantine/core";
import { ScrollContent, Repeat } from "../common"
import { ModuleProps } from "../common";
import { match } from "fp-ts/lib/Option";
import { Module } from "@src/common";

// Later: add prereqTree
export type PrereqsProps = ModuleProps;

export default function Prereqs(props:{ module: Module }) {
    const theme = useMantineTheme();
    const mod = props.module;
    console.log("Module in module desc:", mod);
    return (
        <>
          <Repeat n={30} text={"Prereq tree"}/>
        </>
    );
}