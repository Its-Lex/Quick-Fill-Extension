function fillTextField(text) {
    var textField = document.activeElement;
    if (textField && (textField.tagName.toLowerCase() == "input" || textField.tagName.toLowerCase() == "textarea")) {
        textField.value = text;
    }
}

function detectKeyCombination(event) {
    if (event.ctrlKey && event.key === "y") {
        event.preventDefault();
        chrome.storage.sync.get('text', function (data) {
            var text = data.text;
            if (text) {
                fillTextField(text);
            } else {
                console.error("No text specified in the options.");
            }
        });
    }
}

document.addEventListener("keydown", detectKeyCombination);