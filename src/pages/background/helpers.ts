import axiosRetry from 'axios-retry';
import axios from 'axios';

axiosRetry(axios, { retries: 3 });


// For requesting mods
type ModuleCode = string; // E.g. "CS3216"
type ModuleTitle = string;

type ModuleCondensed = Readonly<{
    moduleCode: ModuleCode;
    title: ModuleTitle;
}>;

const mod_list = "https://api.nusmods.com/v2/2023-2024/moduleList.json";

async function get_mods():Promise<ModuleCondensed[]> {
    try {
        const res:ModuleCondensed[] = await axios.get(mod_list);
        console.log("Mods:", res.slice(0,5));
        return Promise.resolve(res);
    } catch (error) {
        return Promise.reject(`Error getting module list: ${error}`);
    }
}