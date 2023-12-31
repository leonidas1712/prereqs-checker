import { Text, Tooltip, ActionIcon, useMantineTheme, Group, Grid, } from "@mantine/core";
import { ShowModsProps, HEADER_HEIGHT_PCT } from "./utils/common";
import { FaEye, FaEyeSlash, FaSun, FaMoon } from 'react-icons/fa6';
import { ModuleProps } from "./utils/common";
import { isSome } from "fp-ts/lib/Option";
import { useState } from "react";
import { ColorSchemeProps } from "./Popup";

export const TOGGLE_MODS_TESTID="toggle-mods";

// Light more or dark mode
function ToggleColorScheme(props: ColorSchemeProps) {
    const theme = useMantineTheme();
    const { isDark, setIsDark } = props;
    // Add commment
    

    const click = () => {
      setIsDark(!isDark);
    };
  
    const label=isDark ? "Light mode" : "Dark mode";
    const icon = isDark ? <FaSun /> : <FaMoon />;
  
    return (
      <Tooltip label={label} color={theme.other.priOrange}>
        <ActionIcon variant="outline" component="button" onClick={click}>{icon}</ActionIcon>
      </Tooltip>
    )
}

// Toggle mods (show or hide)
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
        <ActionIcon size="md" component="button" onClick={click} data-testid={TOGGLE_MODS_TESTID}>{icon}</ActionIcon>
      </Tooltip>
    )
}

type HeaderProps = ModuleProps & ShowModsProps & ColorSchemeProps;
export function Header(props:HeaderProps) {
    const theme = useMantineTheme();
    return (
      <Group h={HEADER_HEIGHT_PCT} bg={theme.other.bgColorLight} position="center" align="center">
        <Grid w="100%" grow>

          {/* So that title appears in center */}
          <Grid.Col span={4}>
            <ToggleColorScheme isDark={props.isDark} setIsDark={props.setIsDark}/>
          </Grid.Col> 

          <Grid.Col span={4}>

            {/* Title */}
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

            {isSome(props.module) ? 
              <Group position="right" spacing={2}>
                <ToggleModsBtn showMods={props.showMods} setShowMods={props.setShowMods} />
              </Group> : <></>
            }
          </Grid.Col>
        </Grid>
      </Group>
    );
}