const Song=require("./Song");
exports.index = (req, res) => {
  Song.find()
  .then((allSongs) => {
    console.log("All songs retrieved successfully:", allSongs);
    res.send({message: "songs retrieved successfully:",data:allSongs});
  })
  .catch((error) => {
    console.error("Error retrieving songs:", error);
  });
};


exports.show = (req, res) => {
//   Song.find({_id: req.params.id})
   Song.findById(req.params.id)
  .then((Song) => {
    console.log("All songs retrieved successfully:", Song);
    res.send({message: "songs retrieved successfully:",data:Song});
  })
  .catch((error) => {
    console.error("Error retrieving songs:", error);
  });
};
exports.store=(req,res)=>{
    const newSong = new Song({
  title: req.body.title,
  artist: req.body.artist,
  category: req.body.category,
  album: req.body.album,
  url: req.body.url,
  photo: req.body.photo,
  year:  req.body.year,
});

newSong
  .save()
  .then(() => {
    console.log("New song added successfully");
  })
  .catch((error) => {
    console.error("Error adding new song:", error);
  });
  res.send({message:"data stored successfully", data : newSong});
};
   

exports.update = (req, res) => {
       Song.findByIdAndUpdate(req.params.id,req.body,{new:true})
   
       .then((updatedSong) => {
         console.log(" songs update successfully:",updatedSong);
       res.send({message: "songs update successfully:",data:updatedSong});
  })
  .catch((error) => {
    console.error("Error updating songs:", error);
  });
};

exports.delete = (req, res) => {
        Song.findByIdAndDelete(req.params.id)
   
       .then(() => {
         console.log(" songs delete successfully:");
       res.send({message: "songs delete successfully:"});
  })
  .catch((error) => {
    console.error("Error deleting songs:", error);
  });
};
