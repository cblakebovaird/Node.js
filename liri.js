require("dotenv").config();


var axios = require("axios");

var Spotify = require('node-spotify-api');

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
    var moment = require('moment');
      moment().format();

    axios.get(bandAPI).then(
    function(response) {
      for (var i = 0; i < response.data.length; i++){
        event = response.data[i];
        name = event.venue.name;
        date = event.datetime;
        // console.log(response.data[0]);
          console.log("\nVenue: "+ name + "\nLocation: " + event.venue.city + ", " + event.venue.region + "\nDate: " + date);
      }
      
  }
);
  } else if (process.argv[2] === "spotify-this-song"){
    var song = process.argv[3];
    // var keys = require("./keys.js")
    var spotify = {
      id: process.env.f8106a2bbc8c4746a9199ac73e4bcf35,
      secret: process.env.c37e2d43ef8f46dc97eb884a61aa2f07
    };
    // var spotifyAPI = "https://api.spotify.com/v1/tracks/" + song;

      spotify.search({ type: 'track', query: song }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;  //from spotify npm docs
        }
        console.log(data);
      });
    
    

    };
  
  }




info();

