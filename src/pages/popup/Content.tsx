import { Flex, Transition } from "@mantine/core";
import { ShowModsProps, ScrollContent, Repeat, CONTENT_HEIGHT_PCT } from "./common";
import Prereqs from "./prereqs/Prereqs";
import { ModuleProps } from "./Popup";

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
type ContentProps = ShowModsProps & ModuleProps;
export function Content(props:ContentProps) {
    const { showMods, setShowMods } = props;

    // Fetch prereq tree here if 
  
    return (
      // Prerequisite errors
      <Flex direction={"column"} align={"stretch"} justify={"stretch"} style={{height:CONTENT_HEIGHT_PCT}}>
        {/* <ScrollContent style={prereqStyle}>
          <Repeat n={15} text="Hi changes!"/>
        </ScrollContent> */}

        <ScrollContent style={prereqStyle}>
          <Prereqs module={props.module} />
        </ScrollContent>
  

        {/* Modules */}
        <Transition mounted={showMods} transition="slide-up" duration={200} timingFunction="ease-out">
          {(styles) => showMods ? 
          <ScrollContent style={{...styles, ...modsStyle}}>
              <Repeat n={30} text="Hi third"/>
          </ScrollContent> : <></>}
        </Transition>

      </Flex>
    );
}