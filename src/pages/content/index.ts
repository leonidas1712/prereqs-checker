console.log("Detected NUSMods course page changed");

/**
 * @description
 * Content script to run on nusmods.com
 */


const messagesFromReactAppListener = (
  msg,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response) => void) => {
 
  console.log('[content.js]. Message received', msg);

   // Prepare the response object with information about the site
  const response = {
      title: document.title,
  };

  sendResponse(response);
}

chrome.runtime.onMessage.addListener(messagesFromReactAppListener);