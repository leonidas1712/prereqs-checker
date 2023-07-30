import { Text, Flex, Tooltip, ActionIcon, useMantineTheme } from "@mantine/core";
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
        <ActionIcon component="button" onClick={click} color="yellow" ml="0.2rem">{icon}</ActionIcon>
      </Tooltip>
    )
  }

export function Header(props:ShowModsProps) {
    const theme = useMantineTheme();
    return (
      <Flex h={HEADER_HEIGHT_PCT}  bg={theme.other.bgColorLight} justify={"center"} align={"center"}>
        <Text fz="xl" align="center" color={theme.other.headerFontColor} fw={theme.other.titleFontWeight}>PrereqsChecker</Text>
        <ToggleModsBtn showMods={props.showMods} setShowMods={props.setShowMods} />
      </Flex>
    );
}