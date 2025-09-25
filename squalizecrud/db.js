const sequalize = require("sequelize");

const db = new sequalize("mca", "root", "", {
    host: "localhost",
    dialect: "mysql",
});
db.authenticate()
  .then(() => {
    console.log("Database connected...");
    })
    .catch((err) => {
        console.log("Unable to connect to the databse ", err);
    });
    
module.exports = db;