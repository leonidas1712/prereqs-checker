import { ContentScriptModuleResponse } from "@src/common";

console.log("Detected NUSMods course page changed");

/**
 * @description
 * Content script to run on nusmods.com
 */

// Send response with Module
  // module: module code, title
  // e.g CS2040S, Data Structures and Algorithms
const messagesFromReactAppListener = (
  msg,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response) => void) => {
 
  console.log('[content.js]. Message received', msg);

   // Prepare the response object with information about the site
  const response:ContentScriptModuleResponse = document.title;

  sendResponse(response);
}

chrome.runtime.onMessage.addListener(messagesFromReactAppListener);