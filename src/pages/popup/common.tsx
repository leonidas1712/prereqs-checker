import { Text, ScrollArea } from "@mantine/core";
import { replicate } from "fp-ts/lib/Array";

export const CONTENT_HEIGHT_PCT_INT=93;
export const CONTENT_HEIGHT_PCT=`${CONTENT_HEIGHT_PCT_INT}%`;
export const HEADER_HEIGHT_PCT=`${100-CONTENT_HEIGHT_PCT_INT}%`

export type ShowModsProps = {
    showMods: boolean, 
    setShowMods: React.Dispatch<React.SetStateAction<boolean>>
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
        <ScrollArea style={{...props.style, ...commonStyle}} type="auto">
        { props.children }
        </ScrollArea>
    )
}