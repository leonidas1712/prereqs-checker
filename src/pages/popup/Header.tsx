import { Text, Flex, Tooltip, ActionIcon } from "@mantine/core";
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
    return (
      <Flex h={HEADER_HEIGHT_PCT} bg="#292929" justify={"center"} align={"center"}>
        <Text fz="lg" align="center" color="#ff5138">PrereqsChecker</Text>
        <ToggleModsBtn showMods={props.showMods} setShowMods={props.setShowMods} />
      </Flex>
    );
}