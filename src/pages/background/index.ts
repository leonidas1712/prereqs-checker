import reloadOnUpdate from "virtual:reload-on-update-in-background-script";
import { get_mods, store_mods_list } from "./helpers";
reloadOnUpdate("pages/background");
/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate("pages/content/style.scss");

console.log("background loaded: date is", Date());

// get_mods().then((res) => {
//     chrome.storage.local.set({ key: res }).then(() => {
//         console.log("Value is set to (first 5):", res);
//     });
// });

store_mods_list();

chrome.windows.onCreated.addListener(() => {
    console.log("Background script ran on windows created:", Date());
    store_mods_list()
        .then((res) => console.log("Sucessfully stored mod list upon new window"))
        .catch((err) => console.log("Error when storing mods list upon window create:", err));
});

// when tab is updated (i.e new url) send message with tab
    // to listen for tab changes - e.g nav to new link
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     console.log("TabId from bg:", tabId);
//     console.log("Change info from background script", changeInfo);

//     chrome.runtime.sendMessage(tab)
//         .then((res) => console.log("Res after sending frm bg:", res))
//         .catch((err) => console.log("Err when sending frm bg:", err));
    
//     console.log("Sent message from bg");
// });
