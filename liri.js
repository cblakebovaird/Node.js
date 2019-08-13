require("dotenv").config();

var axios = require("axios");

// Step 3 OMDB
var movieName = process.argv[3];
function info (){
  if ( process.argv[2] === "movie-this")
  {
    axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
      var movieInfo = {
      title :  response.data.Title,
      year : response.data.Year,
      rating : response.data.imdbRating,
      rotten : response.data.Metascore,
      country : response.data.Country,
      language : response.data.Language,
      plot : response.data.Plot,
      actors : response.data.Actors
      }
     
   console.log(`\nTitle:  ${movieInfo.title} \nYear: ${movieInfo.year} \nIMDB Rating: ${movieInfo.rating} \nRotten Tomatoes Rating: ${movieInfo.rotten} \nCountry: ${movieInfo.country} \nLanguage: ${movieInfo.language} \nPlot: ${movieInfo.plot} \nActors: ${movieInfo.actors}\n` );
  }
);
// Step 2 Bands In Town
  } else if ( process.argv[2] === "concert-this") {
    var artist = process.argv[3];
    var bandAPI = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(bandAPI).then(
    function(response) {
      for (var i = 0; i < response.data.length; i++){
        event = response.data[i];
        // console.log(response.data[0]);
          console.log("\nVenue: "+ event.venue.name + "\nLocation: " + event.venue.city + ", " + event.venue.region + "\nDate: " + event.datetime);
      }
      
  }
);
  } else if (process.argv[2] === "spotify-this-song"){
    var song = process.argv[3];
    var spotifyAPI = 
  }
}





var keys = require("./keys.js")

info();

// var spotify = new Spotify(keys.spotify);
