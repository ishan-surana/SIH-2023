document.addEventListener("DOMContentLoaded", () => {
    const details = document.querySelectorAll('_ac2a');
    function findString(element, index) {
        let data = element.innerText;
        let cindex = index;

        chrome.runtime.sendMessage({
            action: "updatePopup",
            data: { value: data, cindex: cindex }
        });
    }

    details.forEach((element, index) => {
        findString(element, index);
    });
});