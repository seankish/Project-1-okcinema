//On click button
var comedyArray=[];
var horrorArray=[];
var romanceArray=[];
var actionArray=[];
var sciFiArray=[];
var dramaArray=[];
var fantasyArray=[];
var documentaryArray=[];
var westernArray=[];
var musicalsArray=[];
var indieArray=[];
var thrillerArray=[];



//ALL THESE IDS ARE GOOD TO BE CHANGED TO FIT WITH OTHER CODE
$("#submitButton").on("click", function(){
  var movie = "Star Wars";//$("#movieSearchBar").val();
  movie.replace(" ","-");
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
  var title;
  var actors;
  var director;
  var runTime;
  var rating;
  var releaseDate;
  var summary;
  var poster;
  $.ajax({
    url: queryURL,
    method: "GET"

  }).then(function(response) {
    console.log(response);
    title = response.Title;
    actors = response.Actors;
    rating = response.Rated;
    director = response.Director;
    releaseDate = response.Released;
    summary = response.Plot;
    runTime = response.Runtime;
    poster = response.Poster;


  });
});