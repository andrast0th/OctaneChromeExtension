document.addEventListener('DOMContentLoaded', function() {

    console.log('(' + getEntityLink + ')()')

    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.executeScript(tab.id, {code: '(' + getEntityLink + ')()'}, function(response) {
            console.log(response);
        });
    });

});

function getEntityLink(){
    var copyLinkButton = document.querySelectorAll('[data-aid="alm-entity-form-tab-details-toolbar-copy-link clipboard-toolbar-button"]');
    if(copyLinkButton.length == 1){
        //return copyLinkButton[0].attributes['clipboard-text'];
        return "potato"
    } else {
        return "";
    }
}
