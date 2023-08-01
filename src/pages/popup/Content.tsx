import { Flex, Center, Text, useMantineTheme, Box, NavLink, createStyles } from "@mantine/core";
import { ShowModsProps, ScrollContent, CONTENT_HEIGHT_PCT } from "./common";
import Prereqs from "./prereqs/Prereqs";
import { ModuleProps } from "./common";
import { match, isNone } from "fp-ts/lib/Option";
import { Module } from "@src/common";
import Mods from "./mods/Mods";

// styles for prereqs scroll area and mods scroll area
// flex ratio defines ratio of scroll area sizes
const prereqStyle:React.CSSProperties = {
    flex: '1',
    backgroundColor:"#222324",
    color:"#ff5138"
};

const modsStyle:React.CSSProperties = {
    flex: '1.35',
    backgroundColor:'#333'
};

const useStyles = createStyles((theme) => ({
  link: {
    textDecoration:"underline",
    color:theme.other.priOrange,
    '&:hover': {
      color:theme.other.warnCardBg
    }
  }
}));

// Description to show at the top - either module code and title or empty mod message
function ModDescription(props:ModuleProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  // const link = <NavLink component="a" href={"https://nusmods.com/courses?sem[0]=1&sem[1]=2&sem[2]=3&sem[3]=4"} label="NUSMods"></NavLink>
  const link = <a href="https://nusmods.com/courses?sem[0]=1&sem[1]=2&sem[2]=3&sem[3]=4" target="_blank" rel="noreferrer"
  className={classes.link}>NUSMods</a>

  const matcher = match<Module, JSX.Element>(() => {
    // When no module
    return (
      <>
        <Center>
            <Text fw={theme.other.titleFontWeight} c={theme.other.fadedFontColor} fz={"lg"}>No module found to check.</Text>
        </Center>
        <Center>
            <Text c={theme.other.priOrange} fz={"md"}>(visit {link} to find a module)</Text>
        </Center>
      </>
    );
  }, (module) => {
    // Show module code and title
    return (
      <>
      <Center>
      <Text c={theme.other.priOrange} fz={theme.other.titleFontSize} fw={theme.other.titleFontWeight}>{module.moduleCode}</Text>
      </Center>
    
      {/* <Center>
        <Text 
          c={theme.other.secondaryFontColor} 
          fz={theme.other.subtitleFontSize} 
          fw={theme.other.titleFontWeight}
          align="center"
          >{module.title}
        </Text>
      </Center> */}
      </>
    );
  });

  return (
    <Box bg={theme.other.bgColor}>
      { matcher(props.module) }
    </Box>
  );
}

// Content component containing prereqs validation and modules CRUD
  // when no module: show view with message at top, divider, then Mods.tsx and hide mods toggle button
  // have module: normal, just split in half etc
type ContentProps = ShowModsProps & ModuleProps;
export function Content(props:ContentProps) {
    const { showMods, setShowMods } = props;
    console.log("Opt module within <Content/>:", props.module);

    const prereqsMatcher = match<Module,JSX.Element>(
    // No module -> can't show prereqs, just empty
    () => {
      return(
        <>
        </>
      );
    }, 
    // module -> show prereqs section
    (module) => {
      return <Prereqs module={module} />
    });

    // Fetch prereq tree here if 
  
    return (
      <>
      <Flex direction={"column"} align={"stretch"} justify={"stretch"} style={{height:CONTENT_HEIGHT_PCT}}>
        {/* Mod description or empty message */}
        <ModDescription module={props.module}/>
        
        <ScrollContent style={prereqStyle}>
          {/* <Prereqs module={props.module} /> */}
          { prereqsMatcher(props.module) }
        </ScrollContent>
  
        {/*  style={modsStyle} */}
        { (isNone(props.module) ||  showMods) ? 
        <ScrollContent style={isNone(props.module) ? { backgroundColor:'#333' } : modsStyle}>
          <Mods />
        </ScrollContent> : <></> }
      </Flex>
      </>
    );
}