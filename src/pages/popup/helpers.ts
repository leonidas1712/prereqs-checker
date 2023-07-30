// Helper functions
import * as Opt from "fp-ts/lib/Option";
import { NUSMODS_HOSTNAME } from "../../common"
import { ContentScriptGetModuleResponse, GET_MODULE } from "@src/common";
import { pipe } from "fp-ts/lib/function";

// Check if tab.url corresponds to NUSMods
function isNusMods(url_str:string):boolean {
    const hostname = new URL(url_str).hostname;
    console.log("Hostname:", hostname);
    return hostname==NUSMODS_HOSTNAME;
}

// Should return Option<Module> of module code and title
type Module = {
    moduleCode:string,
    title:string
};

// Return Module from content script response on nusmods.com
// 'CS1010S Programming Methodology - NUSMods'
// 'Timetable - NUSMods'
function getModuleFromContentResponse(response:ContentScriptGetModuleResponse):Opt.Option<Module> {
    if (response.length == 0) {
        return Opt.none;
    }

    const first_split = response.split('-')[0].trim().split(' ');  // CS1010S,Programming,Methodology 

    // TODO: filter mod code by regex
    const mod_code = first_split[0]; // CS1010S
    const title = first_split.slice(1).join(' '); // Programming Methodology

    const mod:Module = {
        moduleCode:mod_code,
        title
    }

    return Opt.some(mod)
}   

// Request content script for document title if hostname is nusmods.com
// Return module code, module title parsed from document title
export async function requestContentScript():Promise<Module> {
    console.log("Requesting tab changed!");
    // Get activeTab
    const queryOptions = { active: true, lastFocusedWindow:true };
  
      try {
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
        
        // if option is none: return Promise.reject(not a module page)
        // else: return Promise.resolve(module)

        // return Promise.resolve(getModuleFromContentResponse(res));
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