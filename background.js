var SessionTime = 10000;
var tickDuration = 1000;
var myInterval = setInterval(function() {
    SessionTime = SessionTime - tickDuration
    //$("label").text(SessionTime);
    console.log(SessionTime);
}, 1000);
setTimeout(SessionExpireEvent, SessionTime);
var myTimeOut = setTimeout(SessionExpireEvent, SessionTime);

function SessionExpireEvent() {
    clearInterval(myInterval);
    console.log("Session expired");
    if(typeof(localStorage) != "undefined"){
        localStorage.removeItem('login');
    }
}

function sendEmail() {
    var emailUrl = "";
    chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
        chrome.tabs.create({ url: emailUrl }, function(tab) {
            setTimeout(function() {
                chrome.tabs.remove(tab.id);
            }, 500);
        });
    });
}
