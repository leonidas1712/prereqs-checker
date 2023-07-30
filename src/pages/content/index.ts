console.log("Detected NUSMods course page changed");

/**
 * @description
 * Chrome extensions don't support modules in content scripts.
 */
// import("./components/Demo");

(async () => {
    console.log("Sending from content script");
    const response = await chrome.runtime.sendMessage("hi from content script");
    console.log("Sent from content script");

    // do something with response here, not outside the function
    console.log(response);
  })();

// (async () => {
//     console.log("Sending from content script async");
// })();