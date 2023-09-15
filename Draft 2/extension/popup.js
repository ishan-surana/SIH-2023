document.addEventListener("DOMContentLoaded", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0] && tabs[0].url) {
            const url = tabs[0].url;[]
            const paragraph = document.getElementById("loc");
            paragraph.textContent = "You are here: " + url;
        }
    });
});