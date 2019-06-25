//On click button
var comedyArray=["Deadpool","Bridesmaids","21 Jump Street","Hot Fuzz", "Zombieland", "The Hangover", "Airplane!", "Ghostbusters","Mean Girls", "Robin Hood Men in Tights"];
var horrorArray=["The conjuring", "Psycho", "The conjuring 2", "the grudge", "Us", "A quiet place", "It follows", "Annable", "Paranormal Activity", "Scream"];
var romanceArray=["The fault in our stars", "The Notebook", "Call me By your name", "A star is born", "La la land", "One day", "Love actually", "Love Story", "Pride and Prejudice", "Casablanca"];
var actionArray=["John Wick", "Godzilla: King of monsters", "Avengers: Endgame", "Wonder Woman", "Mad Max", "Iron Man", "Kill Bill", "The Terminator", "The Matrix", "Crouching Tiger, Hidden Dragon"];
var sciFiArray=["The Martian", "Inception", "Arrival", "Intersteller", "Annihilation", "Star Wars: The last jedi", "Blade Runner", "Gravity", "avatar", "edge of tomorrow"];
var dramaArray=["Bohemian Rhapsody", "The aftermath", "First Man", "Boyhood", "The help", "Schindler's list", "The godfather", "Titanic", "The fighter", "the blind side"];
var fantasyArray=["Harry Potter", "The Hobbit", "lord of the rings", "maleficent", "aladdin", "The Chronicles of Narnia", "Alice in Wonderland", "Twilight", "The Wizard of Oz", "Shrek"];
var documentaryArray=["Fyre", "Icarus", "Blackfish", "Strong Island", "The Cove", "Amy", "Citizenfour", "The Central Park Five", "The Inventor", "13th"];
var westernArray=["Hostiles", "The Hateful Eight", "Django Unchained", "The Lone Ranger", "Appaloosa", "The Assassination of Jesse James", "Tombstone", "Open Range", "The Proposition", "Once Upon a Time in the West"];
var musicalsArray=["Enchanted","La La Land", "A Star is Born", "Mamma Mia", "Les Miserables", "Pitch Perfect", "Hairspray", "Dreamgirls", "The Sound of Music", "Grease"];
var indieArray=["Lady Bird", "The Big Sick", "Call me by Your Name", "Boyhood", "Tangerine", "Winter's Bone", "Manchester by the Sea", "Blue Jay", "Krisha", "Green Room"];
var thrillerArray=["Annabelle", "Child's Play", "Ma", "Get Out", "Don't Breathe", "Seven", "The Silence of the Lambs", "Shutter Island", "Inception", "Zodiac" ];



$("#searchButton").on("click", function(e){
  e.preventDefault();
  var movie = $("#search-input").val();
  
  movie.replace(" ","-");
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
 
  $.ajax({
    url: queryURL,
    method: "GET"

  }).then(function(response) {
    console.log(response);
    var title = response.Title;
    var genre = response.Genre;
    var actors = response.Actors;
    var rating = response.Rated;
    var director = response.Director;
    var releaseDate = response.Released;
    var summary = response.Plot;
    var runTime = response.Runtime;
    var poster = $("<img src=" + response.Poster+ ">");

      console.log(title);
      $(".title").text(title);
      $(".genre").text("Genre: " +genre);
      $(".rating").text("Rating: " + rating);
      $(".runtime").text("Run Time: " + runTime);
      $(".releaseDate").text("Release Date: " + releaseDate);
      $(".synopsis").text(summary);
      $(".cast").text("Actors: " +actors);
      $(".directors").text("Director(s): " + director);
      $(".movie-poster").text("");
      $(".movie-poster").append(poster);
  });
});