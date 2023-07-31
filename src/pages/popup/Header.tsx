import { Text, Flex, Tooltip, ActionIcon, useMantineTheme, Center, createStyles, Group, Grid, Space } from "@mantine/core";
import { ShowModsProps, HEADER_HEIGHT_PCT } from "./common";
import { FaEye, FaEyeSlash, FaArrowsRotate } from 'react-icons/fa6';

// const ICON_SIZE="1.2rem";

function ToggleModsBtn(props:ShowModsProps) {
    const { showMods, setShowMods } = props;
    const theme = useMantineTheme();

    const click = () => {
      console.log("Show mods", showMods);
      setShowMods(!showMods);
    };
  
    const label=showMods ? "Hide mods" : "Show mods";
    const icon = showMods ? 
    <FaEyeSlash size={theme.other.iconSize} color={theme.other.secondaryFontColor}/> : 
    <FaEye size={theme.other.iconSize} color={theme.other.secondaryFontColor}/>;
  
    return (
      <Tooltip label={label} color={theme.other.priOrange}>
        <ActionIcon component="button" onClick={click} color="yellow">{icon}</ActionIcon>
      </Tooltip>
    )
}

export function Header(props:ShowModsProps) {
    const theme = useMantineTheme();
    return (
      <Group h={HEADER_HEIGHT_PCT} bg={theme.other.bgColorLight} position="center" align="center">
        <Grid w="100%" grow>

          <Grid.Col span={4}></Grid.Col>

          <Grid.Col span={4}>

            <Group position="center">
              <Text 
                fz={theme.other.titleFontSize}
                color={theme.other.headerFontColor} 
                fw={theme.other.titleFontWeight}>ModChecker
              </Text>
            </Group>
          </Grid.Col>


          {/* Buttons */}
          <Grid.Col span={4}>
            <Group position="right" spacing={2}>
              <ToggleModsBtn showMods={props.showMods} setShowMods={props.setShowMods} />
            </Group>
          </Grid.Col>
        </Grid>
      </Group>
    );
}