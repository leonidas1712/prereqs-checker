// Search bar + Grid of mod cards
import { Repeat } from "../common";

export const MODS_TESTID="mods";
export default function Mods() {
    return (
        <div data-testid={MODS_TESTID} style={{
            fontWeight:500
        }}>
            <Repeat n={50} text="Hi from Mods!"/>
        </div>
    );
}