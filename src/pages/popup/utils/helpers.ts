// Helper functions
import * as Opt from "fp-ts/lib/Option";
import { NUSMODS_HOSTNAME } from "../../../common"
import { ContentScriptGetModuleResponse, GET_MODULE, Module } from "@src/common";
import { pipe } from "fp-ts/lib/function";
import { MOD_CAPTURE_REGEX, is_valid_mod_code } from "./common";

// Check if tab.url corresponds to NUSMods
function isNusMods(url_str:string):boolean {
    const hostname = new URL(url_str).hostname;
    console.log("Hostname:", hostname);
    return hostname==NUSMODS_HOSTNAME;
}

// Return Module from content script response on nusmods.com
// 'CS1010S Programming Methodology - NUSMods'
// 'Timetable - NUSMods'

// Based on NUSMods repo (30/07/2023)
/*
- it sets pageTitle in ModulePageContent to “{moduleCode} {title}”
    - where module code, title come from NUSMods api
    - https://github.com/nusmodifications/nusmods/blob/master/website/src/views/modules/ModulePageContent.tsx

- This goes to Title.tsx as a child {pageTitle}
- Title.tsx renders <title> {children} >/title>
    - https://github.com/nusmodifications/nusmods/blob/master/website/src/views/components/Title.tsx#L10

- Helmet titleTemplate takes %s from children of <title> .. </title> and does %s - brandName
    - https://stackoverflow.com/questions/53953820/how-does-s-reference-the-title-attribute-inside-the-helmet-component
*/

export function getModuleFromContentResponse(response:ContentScriptGetModuleResponse):Opt.Option<Module> {
    if (response.length == 0) {
        return Opt.none;
    }

    // extract <modCode title>
    const match = response.match(MOD_CAPTURE_REGEX);

    if (match == null) {
        return Opt.none;
    }

    const modAndTitleSplit = match.groups.mod.split(" "); // CS1010S,Programming,Methodology
    const modCode = modAndTitleSplit[0]; // CS1010S

    // e.g Courses - NUSMods (modCode becomes Courses)
    if (!is_valid_mod_code(modCode)) {
        return Opt.none;
    }

    const title = modAndTitleSplit.slice(1).join(" "); // Programming Methodology

    const mod:Module = {
        moduleCode:modCode,
        title
    }

    return Opt.some(mod);
}

// Request content script for document title if hostname is nusmods.com
// Return module code, module title parsed from document title
export async function requestModuleFromContentScript():Promise<Module> {
    console.log("Requesting tab changed!");
    // Get activeTab
    const queryOptions = { active: true, lastFocusedWindow:true };
  
      try {
        // send to tab
        const [tab] = await chrome.tabs.query(queryOptions);
        console.log("Got tab:", tab)

        if (!tab) {
            return Promise.reject("Tab was undefined");
        }
  
        console.log("Tab url:", tab.url);
        
        // Check for nusmods.com
        if(!isNusMods(tab.url)) {
            return Promise.reject("Hostname is not NUSMods");
        }

        console.log("Sending message to content script");

        // sendMessage to query content script for document.title
        const res:ContentScriptGetModuleResponse = await chrome.tabs.sendMessage(tab.id, GET_MODULE);
        
        getModuleFromContentResponse(res);
        
        // if option is none: return Promise.reject(not a module page)
        // else: return Promise.resolve(module)
        return pipe(
            getModuleFromContentResponse(res),
            Opt.match(
                () => Promise.reject(`'${res}' is not a module page`),
                (mod:Module) => Promise.resolve(mod)
            )
        );

    } catch(error) {
      console.log("Error requesting content script");
      return Promise.reject(error);
    }
  }