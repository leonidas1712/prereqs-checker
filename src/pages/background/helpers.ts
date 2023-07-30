// For requesting mods
type ModuleCode = string; // E.g. "CS3216"
type ModuleTitle = string;

type ModuleCondensed = Readonly<{
    moduleCode: ModuleCode;
    title: ModuleTitle;
}>;

const mod_list = "https://api.nusmods.com/v2/2023-2024/moduleList.json";

async function get_mods() {
    return 2;
}