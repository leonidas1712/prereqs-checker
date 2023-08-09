import { Flex, Center, useMantineTheme, Box, createStyles, Title, MantineTheme } from "@mantine/core";
import { ShowModsProps, ScrollContent, CONTENT_HEIGHT_PCT, ThemedStyler } from "./utils/common";
import Prereqs from "./prereqs/Prereqs";
import { ModuleProps } from "./utils/common";
import { match, isNone } from "fp-ts/lib/Option";
import { Module } from "@src/common";
import Mods from "./mods/Mods";

const useStyles = createStyles((theme) => ({
  link: {
    textDecoration:"underline",
    color:theme.other.priOrange,
    '&:hover': {
      color:theme.other.warnCardBg
    }
  },
}));

// Description to show at the top - either module code and title or empty mod message
export function ModDescription(props:ModuleProps) {
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
          <Title order={4} fz={"lg"} c={theme.other.fadedFontColor}>No module found to check.</Title>
        </Center>

        <Center>
            <Title order={5} fw={theme.other.subtitleFontWeight} c={theme.other.priOrange} fz={"md"}>(visit {link} to find a module)</Title>
        </Center>
      </>
    );
  }, (module) => {
    // Show module code and title
    return (
      <>
        <Center>
          <Title order={2} c={theme.other.priOrange} fz={theme.other.titleFontSize} fw={theme.other.titleFontWeight}>{module.moduleCode}</Title>
        </Center>
      </>
    );
  });

  return (
    <Box bg={theme.other.bgColor}>
      { matcher(props.module) }
    </Box>
  );
}

// styles for prereqs scroll area and mods scroll area
const prereqStyler:ThemedStyler = (theme) => {
  return {
    flex: '1',
    backgroundColor:theme.other.bgColor,
    color:theme.other.priOrange
  }
}

const modsStyler:ThemedStyler = (theme) => {
  return {
    backgroundColor:theme.other.modsBg,
    color:theme.other.secondaryFontColor
  };
}


// Content component containing prereqs validation and modules CRUD
  // when no module: show view with message at top, divider, then Mods.tsx and hide mods toggle button
  // have module: normal, just split in half etc
export type ContentProps = ShowModsProps & ModuleProps;
export function Content(props:ContentProps) {
    const { showMods, setShowMods } = props;
    console.log("Opt module within <Content/>:", props.module);
    const { classes } = useStyles();

    const theme = useMantineTheme();

    const MODS_FLEX='1.35' // separate: when mods not shown don't apply this
    const prereqStyle = prereqStyler(theme);
    const modsStyle = modsStyler(theme);

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
      return <Prereqs module={module}/>
    });

    // Fetch prereq tree here if 
    return (
      <>
      {/* Styles applied outside because applied to entire ScrollArea */}
      <Flex direction={"column"} align={"stretch"} justify={"stretch"} style={{height:CONTENT_HEIGHT_PCT}}>
        {/* Mod description or empty message */}
        <ModDescription module={props.module}/>
        
        <ScrollContent style={prereqStyle}>
            { prereqsMatcher(props.module) }
        </ScrollContent>
  
        {/* Mods */}
        { (isNone(props.module) ||  showMods) ? 
        <ScrollContent style={isNone(props.module) ? modsStyle : {...modsStyle, flex:MODS_FLEX}}>
            <Mods />
        </ScrollContent> : <></> }
      </Flex>
      </>
    );
}