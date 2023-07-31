import { Stack, Container, Text, Center, useMantineTheme} from "@mantine/core";
import { ScrollContent, Repeat } from "../common"

function ModDescription() {
    const theme = useMantineTheme();
    return (
        <>
            <Center>
                <Text fz={theme.other.titleFontSize} fw={theme.other.titleFontWeight}>CS3282</Text>
            </Center>

            <Center>
                <Text c={theme.other.secondaryFontColor} fz={theme.other.subtitleFontSize} fw={theme.other.titleFontWeight}>Thematic Systems Project II</Text>
            </Center>
        </>
    );
}

export default function Prereqs() {
    const theme = useMantineTheme();
    return (
        <Container>
            <ModDescription />
        </Container>
    )
}