let scraper = document.getElementById('scraper');

scraper.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: scrape,
    });
})

function scrape() {
    alert(document.location);
}