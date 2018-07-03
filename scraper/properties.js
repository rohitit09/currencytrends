chrome.browserAction.onClicked.addListener(function(activeTab){
  alert(activeTab+" Click Ok")
  setTimeout(openNextURLInTab, 10000);
});

var openNextURLInTab = function(){
    var url = 'https://www.xe.com/'
    console.log(url);
    chrome.tabs.update(null, {url: url});
    setTimeout(function() {injectTheScript();}, 10000); //runing every 10 sec

}

function injectTheScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {file: "content_script.js"}, function(){
          	console.log('execution done');
        });
    });
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // alert(message.event);
  if(message.event == 'dataparsed'){
    setTimeout(function(){
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.executeScript(tabs[0].id, {file: "step2.js"});
      });
    }, 7000);
  }else if(message.event == 'namesent'){
    console.log('JOB done');
    setTimeout(openNextURLInTab,10000);
    // openNextURLInTab();
  }
  else if(message.event == "pageblocked"){
    console.log('JOB done');
    setTimeout(openNextURLInTab,6000000);
    // sendResponse({farewell: 'goodbye'});
  }
  // setTimeout(openNextURLInTab,6000000);
  sendResponse({farewell: 'goodbye'});
});
