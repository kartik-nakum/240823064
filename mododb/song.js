const mongoose = require("mongoose");
const { search } = require("../routes/studentRoute");

mongoose.connect("mongodb+srv://kartik:kartik@cluster0.5gdfgyo.mongodb.net/song", {
});

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  category: String,
  album: String,
  url: String,
  photo: String,
  year: Number,
});

const Song = mongoose.model("Song", songSchema);
console.log("Song model created successfully");


const newSong = new Song({
  title: "Vandematram12",
  artist: "Arijit Singh",
  category: "Bollywood",
  album: "Patrotic",
  url: "https://bajaao.pendujatt.com.se/load/128/66780039/2136806/Aavan Jaavan.mp3",
  photo:
    "https://pendujatt.com.se/uploads/album/aavan-jaavan-from-war-2-pritam.webp",
  year: 2022,
});

newSong
  .save()
  .then(() => {
    console.log("New song added successfully");
  })
  .catch((error) => {
    console.error("Error adding new song:", error);
  });

  // multiple song 
Song.find()
  .then((allSongs) => {
    console.log("All songs retrieved successfully:", allSongs);
  })
  .catch((error) => {
    console.error("Error retrieving songs:", error);
  });


  // one song search
// Song.find({ category: "Bollywood" })
//   .then((allSongs) => {
//     console.log("All songs retrieved successfully:", allSongs);
//   })
//   .catch((error) => {
//     console.error("Error retrieving songs:", error);
//   });



