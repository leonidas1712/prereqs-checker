import { Stack, Container, Text, Center, useMantineTheme} from "@mantine/core";
import { ScrollContent, Repeat } from "../common"

export default function Prereqs() {
    const theme = useMantineTheme();
    return (
        <Container>
            <Center>
                <Text fz={theme.other.titleFontSize} fw={theme.other.titleFontWeight}>CS3282</Text>
            </Center>

            <Center>
                <Text c={theme.other.secondaryFontColor} fz={theme.other.subtitleFontSize} fw={theme.other.titleFontWeight}>Thematic Systems Project II</Text>
            </Center>
        </Container>
    )
}