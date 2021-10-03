function getword(info, tab) {
  chrome.tabs.create({
    url: "https://source.unsplash.com/random",
  });
}
chrome.contextMenus.create({
  title: "Bring a random photo",
  contexts: ["all"],
  id: "this_is_my_unique_id_hakki",
});

chrome.contextMenus.onClicked.addListener(getword);
