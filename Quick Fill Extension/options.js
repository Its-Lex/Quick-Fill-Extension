document.addEventListener('DOMContentLoaded', function () {
    var saveButton = document.getElementById('save');
    var textInput = document.getElementById('text');

    saveButton.addEventListener('click', function () {
        var text = textInput.value;
        chrome.storage.sync.set({ 'text': text }, function () {
            console.log('Text saved: ' + text);
        });
    });

    chrome.storage.sync.get('text', function (data) {
        var text = data.text;
        if (text) {
            textInput.value = text;
        }
    });
});
