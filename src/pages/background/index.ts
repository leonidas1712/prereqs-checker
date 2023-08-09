import reloadOnUpdate from "virtual:reload-on-update-in-background-script";
import { get_mods, store_mods_list } from "./helpers";
reloadOnUpdate("pages/background");
/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate("pages/content/style.scss");

console.log("background loaded: date is", Date());


store_mods_list();

chrome.windows.onCreated.addListener(() => {
    console.log("Background script ran on windows created:", Date());
    store_mods_list()
        .then((res) => console.log("Sucessfully stored mod list upon new window"))
        .catch((err) => console.log("Error when storing mods list upon window create:", err));
});

