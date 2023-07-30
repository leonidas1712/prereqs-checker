// Helper functions

// Should return Option<Module> of module code and title
export async function requestContentScript() {
    console.log("Requesting tab changed!");
    // Get activeTab
    const queryOptions = { active: true, lastFocusedWindow:true };
  
      try {
        const [tab] = await chrome.tabs.query(queryOptions);
        console.log("Got tab:")
        console.log(tab);
  
        // Check for nusmods.com
        if (tab) {
          console.log("Tab url:", tab.url);
          console.log("Sending message to content script");
          chrome.tabs.sendMessage(tab.id, { type: 'hi from popup' }, (response) => {
            console.log("Got response from content script:");
            console.log(response);
          });
        }
    } catch(error) {
      console.log("Error requesting content script from index.tsx:");
      console.log(error);
    }
  }