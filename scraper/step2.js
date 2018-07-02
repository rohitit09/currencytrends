var getCurrency = function(){
	try{
		// debugger
		var currencyinfo=document.getElementsByClassName("uccResultUnit")[0].innerText
		var timeinfo=document.getElementsByClassName("resultTime")[0].innerText
		var dictionary = {};
		dictionary.currencyinfo=currencyinfo;
		dictionary.timeinfo=timeinfo;
		console.log(dictionary);
		$.ajax({
			type: "POST",
			contentType: "application/json",
			url:"http://127.0.0.1:5000/getdata",
			dataType: "json",
			data: JSON.stringify(dictionary),
			xhrFields: {
			        withCredentials: true
			},
			success : function(result) {
				
			    console.log("result -->", result);
				return  result;
			},
			error: function(err) {
				alert("Something is wrong", err);
			}
		});

		chrome.runtime.sendMessage({event: 'namesent'}, function(res){});

	}
	catch (err) {
				console.log("result -->", err);
	            chrome.runtime.sendMessage({event: 'namesent'}, function(res){
	            });
	      }
}
getCurrency();