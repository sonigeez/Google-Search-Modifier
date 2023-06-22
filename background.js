chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["contentScript.js"],
    });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "BUY_ITEM") {
    chrome.storage.local.get({ boughtItems: [] }, function (result) {
      let items = result.boughtItems;
      items.push({ title: request.title, url: request.url });
      chrome.storage.local.set({ boughtItems: items });
    });
  }
});
