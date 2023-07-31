import { ScrollContent } from "../common"
import { Repeat } from "../common";

const prereqStyle:React.CSSProperties = {
    flex: '1',
    backgroundColor:"#222324",
    color:"#ff5138"
};

export default function Prereqs() {
    return (
        <ScrollContent style={prereqStyle}>
          <Repeat n={4} text="Hi changes!"/>
        </ScrollContent>
    )
}