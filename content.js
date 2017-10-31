alert("hello");

chrome.runtime.onMessage.addListener(

    function(request, sender, sendResponse) {

        if (request.greeting == "hello"){
            sendResponse({farewell: document.getElementsByTagName('html')[0].innerHTML});
        }

        if (request.method == "isOctaneDetailView"){
            var copyLinkButton = document.querySelectorAll('[data-aid="alm-entity-form-tab-details-toolbar-copy-link clipboard-toolbar-button"]')
            if(copyLinkButton.length == 1){
                sendResponse({message: copyLinkButton.[0].attributes['clipboard-text']);
            } else {
                sendResponse({message: ""});
            }
        }

    }
);