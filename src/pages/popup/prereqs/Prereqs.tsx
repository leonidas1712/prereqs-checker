import { Stack, Container, Text, Center, useMantineTheme} from "@mantine/core";
import { ScrollContent, Repeat } from "../common"
import { ModuleProps } from "../Popup";
import { match } from "fp-ts/lib/Option";
import { Module } from "@src/common";

function ModDescription(props:ModuleProps) {
    const theme = useMantineTheme();
    console.log("Module in module desc:", props.module);
    const matcher = match(() => {
        return (
            <>
                <Center>
                    <Text fw={theme.other.titleFontWeight} c={theme.other.fadedFontColor} fz={theme.other.titleFontSize}>No module found to validate.</Text>
                </Center>
                <Center>
                    <Text fz={theme.other.fadedFontColor}>(visit nusmods.com/courses to find a module)</Text>
                </Center>
            </>
        );

    }, (module:Module) => {
        return (
            <>
                <Center>
                    <Text fz={theme.other.titleFontSize} fw={theme.other.titleFontWeight}>{module.moduleCode}</Text>
                </Center>

                <Center>
                    <Text 
                    c={theme.other.secondaryFontColor} 
                    fz={theme.other.subtitleFontSize} 
                    fw={theme.other.titleFontWeight}
                    align="center"
                    >{module.title}</Text>
                </Center>
            </>
        );
    });

    return (
        matcher(props.module)
    );
}

export type PrereqsProps = ModuleProps;

export default function Prereqs(props:PrereqsProps) {
    const theme = useMantineTheme();
    return (
        <Container>
            <ModDescription module={props.module}/>
        </Container>
    )
}