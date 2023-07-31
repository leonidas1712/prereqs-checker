// For requesting mods
import { Module, ModuleCode, ModuleTitle, ModulesRecord } from "@src/common";

const mod_list = "https://api.nusmods.com/v2/2023-2024/moduleList.json";

// Get array of mods and turn into Object indexed by module code
export async function get_mods():Promise<ModulesRecord> {
    try {
        const res:Module[] = await (await fetch(mod_list)).json();
        console.log("[GET_MODS_API] Mods from get_mods:", res.slice(0,5), Date());
        const rec:Record<ModuleCode, ModuleTitle> = res.reduce((acc, curr) => {
            acc[curr.moduleCode] = curr.title;
            return acc;
        }, {});

        return Promise.resolve(rec);
    } catch (error) {
        return Promise.reject(`Error getting module list: ${error}`);
    }
}