import { Flex, Transition } from "@mantine/core";
import { ShowModsProps, ScrollContent, Repeat, CONTENT_HEIGHT_PCT } from "./common";

const prereqStyle:React.CSSProperties = {
    flex: '1',
    backgroundColor:"#222324",
    color:"#ff5138"
};

const modsStyle:React.CSSProperties = {
    flex: '1.2',
    backgroundColor:"#aaa"
};

// Content component containing prereqs validation and modules CRUD
export function Content(props:ShowModsProps) {
    const { showMods, setShowMods } = props;
  
    return (
      // Prerequisite errors
      <Flex direction={"column"} align={"stretch"} justify={"stretch"} style={{height:CONTENT_HEIGHT_PCT}}>
        <ScrollContent style={prereqStyle}>
          <Repeat n={15} text="Hi changes!"/>
        </ScrollContent>
  
        <Transition mounted={showMods} transition="slide-up" duration={200} timingFunction="ease-out">
  
        {/* Modules */}
        {(styles) => showMods ? 
        <ScrollContent style={{...styles, ...modsStyle}}>
            <Repeat n={30} text="Hi third"/>
        </ScrollContent> : <></>}
  
      </Transition>
      </Flex>
    );
}