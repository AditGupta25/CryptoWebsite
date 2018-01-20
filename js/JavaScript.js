
// function getCrypto(){

// 	var name = document.getElementById("searchBar").value;
// 	console.log(name);

// 	$.ajax({
// 	    url: "https://api.coinmarketcap.com/v1/ticker/?limit=0",
// 	    dataType: 'jsonp',
// 	    success: function(results){
// 	        console.log(results);
// 	    }
// 	});

// }


// Get the <datalist> and <input> elements.

window.onload = function() {

	var dataList = document.getElementById('json-datalist');
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
	        // Create a new <option> element.
	        var option = document.createElement('option');
	        // Set the value using the item in the JSON array.
	        option.value = item.name;
	        // Add the <option> element to the <datalist>.
	        dataList.appendChild(option);
	      });

	      // Update the placeholder text.
	      input.placeholder = "Search Your Cryptocurrency Here...";
	    } else {
	      // An error occured :(
	      // input.placeholder = "Couldn't load datalist options :(";
	    }
	  }
	};

	// Update the placeholder text.
	input.placeholder = "Loading options...";

	// Set up and make the request.
	request.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?limit=0', true);
	request.send();
    
};
