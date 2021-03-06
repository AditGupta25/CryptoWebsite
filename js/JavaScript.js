
// Get the <datalist> and <input> elements.

window.onload = function() {

	var loc = window.location.href+'';
	if (loc.indexOf('http://')==0){
	    window.location.href = loc.replace('http://','https://');
	}

	var dataList = document.getElementById('json-datalist');
	var input = document.getElementById('ajax');

	// Create a new XMLHttpRequest.
	var request = new XMLHttpRequest();

	var suggestions = new Array(" ");

	// Handle state changes for the request.
	request.onreadystatechange = function(response) {
	  if (request.readyState === 4) {
	    if (request.status === 200) {
	      // Parse the JSON
	      var jsonOptions = JSON.parse(request.responseText);

	      // Loop over the JSON array.
	      jsonOptions.forEach(function(item) {
	        // Create a new <option> element.
	        //var option = document.createElement('option');
	        // Set the value using the item in the JSON array.
	        //option.value = item.name;
	        // Add the <option> element to the <datalist>.
	        //dataList.appendChild(option);
	        suggestions.push(item.name)
	      });

	      // Update the placeholder text.
	      //console.log(suggestions);

	      // $( "#ajax" ).autocomplete({
     		//  source: suggestions
   		  //  });

		   $(function () {
		   		$("#ajax").autocomplete({
		   			source: suggestions,
		   			dataType: "json",
		   			success: function( suggestions ) {
                    	var escapedTerm=request.term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1");
                   		var regex = new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + escapedTerm + ")(?![^<>]*>)(?![^&;]+;)", "gi");
                    	var result = $.map(suggestions, function(value){
                        //console.log(value);
                        value.label=value.label.replace(regex, "<span class='highlight'>$1</span>");
                        return value;
                    });
                    response(result);
                }
		   		});
		   		$( "#ajax" ).autocomplete("widget").addClass("fixedHeight");
		   });

	      input.placeholder = " Search White Papers Here...";
	    } else {
	      // An error occured :(
	      // input.placeholder = "Couldn't load datalist options :(";
	    }
	  }
	};


	// Update the placeholder text.
	input.placeholder = " Loading options...";

	// Set up and make the request.
	request.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?limit=0', true);
	request.send();   
};


//This function takes user to white page for the crypto currency

$(document).ready(function(){
    $("#submitButton").on('click touchstart', function() {
        getCrypto();
    });
});

function getCrypto(){
	var coinName = document.getElementById("ajax").value;
	var input = document.getElementById('ajax');

	// Create a new XMLHttpRequest.
	var request = new XMLHttpRequest();

	// Handle state changes for the request.
	request.onreadystatechange = function(response) {
	  if (request.readyState === 4) {
	    if (request.status === 200) {
	      // Parse the JSON
	      var jsonOptions = JSON.parse(request.responseText);

	      // Loop over the JSON array.
	      jsonOptions.forEach(function(item) {
	        //console.log(item.white_paper_url);
	        if(coinName){
	        	if(coinName == item.name){
	        		 setTimeout(() => window.open(item.white_paper_url),1000);
	        // 		$.ajax({
				     //  url:      item.white_paper_url,
				     //  async:    false,
				     //  dataType: "json",
				     //  success:  function() {
				     //    window.open(item.white_paper_url);
				  	  // }
				     // });
	        	}
	        }else {
	        	input.placeholder = "  Sorry! We can't find this one!";
	        }
	        
	      });

	      // Update the placeholder text.
	    } else {
	      // An error occured :(
	     alert("There seems to be an error!");
	    }
	  }
	};


	// Set up and make the request.
	request.open('GET', 'https://raw.githubusercontent.com/AditGupta25/CryptoWebsite/master/data/data.json', true);
	request.send(); 

	
}
