// Common across components
export const NUSMODS_HOSTNAME = "nusmods.com";

// Request for module from content script
export const GET_MODULE="GET_MODULE";

// type for content script response when GET_MODULE

// example return for nusmods.com:
    // 'CS1010S Programming Methodology - NUSMods'
    // 'Timetable - NUSMods'
export type ContentScriptGetModuleResponse = string;