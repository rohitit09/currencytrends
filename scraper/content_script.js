var setCurrencyType = function(){
      try{
        // debugger
        // var var
        // if (var="intrurupt"){
        var from = jQuery("#fromInput");
        

        var to = jQuery("#toInput");
        
        from.children()[1].value="USD - US Dollar";
        to.children()[1].value="INR - Indian Rupee";
        console.log('link identified', from.children()[1].value);
        console.log('link identified', to.children()[1].value);
        var submit = jQuery("#ucc_go_btn_svg");
        // var link = div3.children()[0];
        console.log('link identified', submit);
        submit.click();
        chrome.runtime.sendMessage({event: 'dataparsed'}, function(res){
            });
      // }
      // else{
      //       console.log(title);
      //       console.log("blocked");
      //       chrome.runtime.sendMessage({event: 'pageblocked'}, function(res){
      //       });
      // }
      }
      catch (err) {
            console.log("result -->", err);
            chrome.runtime.sendMessage({event: 'namesent'}, function(res){
            });
      }
}
setCurrencyType();