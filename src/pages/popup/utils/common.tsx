// File for common utils
import { Text, ScrollArea, Center, Loader, MantineTheme } from "@mantine/core";
import { replicate } from "fp-ts/lib/Array";
import * as Opt from "fp-ts/lib/Option";
import { Module } from "@src/common";

export const CONTENT_HEIGHT_PCT_INT=93;
export const CONTENT_HEIGHT_PCT=`${CONTENT_HEIGHT_PCT_INT}%`;
export const HEADER_HEIGHT_PCT=`${100-CONTENT_HEIGHT_PCT_INT}%`

// Exact match on mod code with ^...$
    // First part can have 2-4 chars e.g GESS1000
    // Second part has exactly 4 numbers e.g GESS1000
    // Possible to have 0 chars for last part e.g AR5803
    // Last part has 0-5 chars but just do .* in case a mod with 6+ chars at the end exists later
        // 5 chars at the end: LC6009GRSII (Graduate Seminar)
export const MOD_CODE_REGEX = /^[A-Z]{2,4}\d{4}.*$/;

// captures modCode title into mod
    // e.g mod:CS2030S Programming Methodology II
export const MOD_CAPTURE_REGEX = /(?<mod>[A-Z]{2,4}\d{4}.*) - (NUSMods)/;

export function is_valid_mod_code(mod_code:string):boolean {
    return mod_code.match(MOD_CODE_REGEX) != null;
}

export type ShowModsProps = {
    showMods: boolean, 
    setShowMods: React.Dispatch<React.SetStateAction<boolean>>
}

export type ModuleProps = {
    module:Opt.Option<Module>
  
  }


export function Repeat({ n, text }: { n:number, text:string })  {
    const mapper = (txt: string, idx: number) => {
      return <Text fz="md">{`${idx+1}. ${txt}`}</Text>
    };
  
    return (
      <>
        { replicate(n, text).map(mapper) }
      </>
    )
}


// Scrollable content
export type ScrollProps = {
    style?:React.CSSProperties
};
  
export function ScrollContent(props:React.PropsWithChildren<ScrollProps>) {
    const commonStyle:React.CSSProperties = {
        overflow: 'auto',
        padding:"0.5rem",
    };

    return (
        <ScrollArea style=
        {{...props.style, ...commonStyle}} 
        >
        { props.children }
        </ScrollArea>
    )
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const Spinner = (props: { color: string }) => {
    return (
      <Center>
        <Loader color={props.color} mt={10}/>
      </Center>
    );
};

// takes theme, returns object for react style
export type ThemedStyler = (theme:MantineTheme) => React.CSSProperties;