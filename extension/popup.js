document.addEventListener("DOMContentLoaded", () => {
    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        if (message.action === "updatePopup") {
            const data = message.data;
            const paragraph = document.getElementById("loc");
            alert('hi');
            if (data.cindex === 0) {
                paragraph.textContent = "This person has " + data.value + " posts";
                
            } else if (data.cindex === 1) {
                const newParagraph = document.createElement("p");
                newParagraph.textContent = "This person has " + data.value + " followers.";
                paragraph.appendChild(newParagraph);
            } else if (data.cindex === 2) {
                const newParagraph = document.createElement("p");
                newParagraph.textContent = "This person is following " + data.value + " people.";
                paragraph.appendChild(newParagraph);
            }
        }
    });
});
