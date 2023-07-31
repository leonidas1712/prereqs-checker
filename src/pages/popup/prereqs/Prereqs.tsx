import { Stack, Container, Text, Center, useMantineTheme} from "@mantine/core";
import { ScrollContent, Repeat } from "../common"

export default function Prereqs() {
    const theme = useMantineTheme();
    return (
        <Container>
            <Center><Text fz={theme.other.titleFontSize} fw={theme.other.titleFontWeight}>CS3282</Text></Center>
        </Container>
    )
}