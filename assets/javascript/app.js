//On click button

$("#submitButton").on("click", function(){
  var movie = "StarWars";
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

});