import { Text, Flex, Tooltip, ActionIcon, useMantineTheme, Center, createStyles, Group } from "@mantine/core";
import { ShowModsProps, HEADER_HEIGHT_PCT } from "./common";
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const ICON_SIZE="1.2rem";

function ToggleModsBtn(props:ShowModsProps) {
    const { showMods, setShowMods } = props;
    const theme = useMantineTheme();

    const click = () => {
      console.log("Show mods", showMods);
      setShowMods(!showMods);
    };
  
    const label=showMods ? "Hide mods" : "Show mods";
    const icon = showMods ? <FaEyeSlash size={ICON_SIZE} color={theme.other.secondaryFontColor}/> : <FaEye size={ICON_SIZE} color={theme.other.secondaryFontColor}/>
  
    return (
      <Tooltip label={label} color={theme.other.priOrange}>
        <ActionIcon component="button" onClick={click} color="yellow" ml="0rem">{icon}</ActionIcon>
      </Tooltip>
    )
  }

const align = createStyles((theme) => ({
  alignRight: {
    // marginLeft:"auto"
    justifySelf:"right"
  },
}));

export function Header(props:ShowModsProps) {
    const theme = useMantineTheme();
    const { classes } = align();

    return (
      // justify={"center"} 
      // <Flex h={HEADER_HEIGHT_PCT} direction={"row"} bg={theme.other.bgColorLight} align={"center"}>
      //   <Text 
      //   fz="xl" 
      //   color={theme.other.headerFontColor} 
      //   fw={theme.other.titleFontWeight}>PrereqsChecker</Text>
      //   <ToggleModsBtn showMods={props.showMods} setShowMods={props.setShowMods} />
      // </Flex>

      <Group h={HEADER_HEIGHT_PCT} bg={theme.other.bgColorLight} position="center">
        {/* <div></div> */}
        <Text 
          fz={theme.other.titleFontSize} 
          color={theme.other.headerFontColor} 
          fw={theme.other.titleFontWeight}>
            CS3282
        </Text>

        {/* <Group className={classes.alignRight}>
          <ToggleModsBtn showMods={props.showMods} setShowMods={props.setShowMods} />
        </Group> */}
      </Group>
    );
}