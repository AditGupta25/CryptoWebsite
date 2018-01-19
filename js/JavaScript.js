
function getCrypto(){

var name = document.getElementById("searchBar").value;
console.log(name);

$.ajax({
    url: "https://api.coinmarketcap.com/v1/ticker/?limit=0",
    dataType: 'jsonp',
    success: function(results){
        console.log(results);
    }
});

}