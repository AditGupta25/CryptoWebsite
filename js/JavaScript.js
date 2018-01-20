
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


//This function takes user to white page for the crypto currency
function getCrypto(){
	var coinName = document.getElementById("ajax").value;


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
	        if(coinName == item.name){

	        	window.open(item.white_paper_url,"_blank")
	        	//alert("Found it");
	        	//console.log(item.white_paper_url)

	        }else{

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
	request.open('GET', 'https://github.com/AditGupta25/CryptoWebsite/blob/master/data.json', true);
	request.send(); 

	
}
