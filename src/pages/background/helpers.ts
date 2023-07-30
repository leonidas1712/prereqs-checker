// For requesting mods
import { ModuleCondensed } from "@src/common";

const mod_list = "https://api.nusmods.com/v2/2023-2024/moduleList.json";

export async function get_mods():Promise<ModuleCondensed[]> {
    try {
        const res:ModuleCondensed[] = await (await fetch(mod_list)).json();
        console.log("[GET_MODS_API] Mods from get_mods:", res.slice(0,5), Date());
        return Promise.resolve(res);
    } catch (error) {
        return Promise.reject(`Error getting module list: ${error}`);
    }
}