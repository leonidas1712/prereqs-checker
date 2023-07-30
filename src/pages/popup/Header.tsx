import { Text, Flex, Tooltip, ActionIcon, useMantineTheme } from "@mantine/core";
import { ShowModsProps, HEADER_HEIGHT_PCT } from "./common";
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

function ToggleModsBtn(props:ShowModsProps) {
    const { showMods, setShowMods } = props;
    const click = () => {
      console.log("Show mods", showMods);
      setShowMods(!showMods);
    };
  
    const label=showMods ? "Hide mods" : "Show mods";
    const icon = showMods ? <FaEyeSlash size="1.1rem"/> : <FaEye size="1.1rem" />
  
    return (
      <Tooltip label={label} color="teal">
        <ActionIcon component="button" onClick={click} color="yellow">{icon}</ActionIcon>
      </Tooltip>
    )
  }

export function Header(props:ShowModsProps) {
    const theme = useMantineTheme();
    return (
      <Flex h={HEADER_HEIGHT_PCT}  bg={theme.other.bgColorLight} justify={"center"} align={"center"}>
        <Text fz="xl" align="center" color="white" fw={theme.other.titleFontWeight}>PrereqsChecker</Text>
        <ToggleModsBtn showMods={props.showMods} setShowMods={props.setShowMods} />
      </Flex>
    );
}