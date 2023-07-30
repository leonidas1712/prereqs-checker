import reloadOnUpdate from "virtual:reload-on-update-in-background-script";
import { get_mods } from "./helpers";
reloadOnUpdate("pages/background");

function hi():Promise<number> {
    return Promise.resolve(2450);
}

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate("pages/content/style.scss");

console.log("background loaded: date is", Date());

get_mods().then((res) => {
    chrome.storage.local.set({ key: res }).then(() => {
        console.log("Value is set to (first 5):", res);
    });
})

// chrome.runtime.onStartup.addListener(() => {
//     console.log("On startup listener in background");


//     chrome.storage.local.set({ key: "react" }).then(() => {
//         console.log("Set value of key to react");

//     });
// });


  
// chrome.storage.local.get(["key"]).then((result) => {
//     console.log("Value currently is " + result.key);
// }).catch((err) => console.log("Err getting val:", err));

// console.log("ran after");

