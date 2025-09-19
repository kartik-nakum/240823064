//sequalize
const sequalize = require("sequelize");

//connection
const db = new sequalize("mca", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

//test connection
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// create model
const Student = db.define("student", {
  id: {
    type: sequalize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: sequalize.STRING,
    allowNull: false,
  },
  city: {
    type: sequalize.STRING,
    allowNull: false,
  },
  email: {
    type: sequalize.STRING,
    allowNull: false,
    unique: true,
  },
});

//sync model
// Student.sync()
//   .then(() => {
//     console.log("Student table created successfully");
//   })
//   .catch((err) => {
//     console.error("Unable to create table:", err);
//   });

// insert data
// Student.create({
//   name: "kartik1",
//   city: "Junagadh",
//   email: "kartik@gmail.com",
// })
//   .then(() => {
//     console.log("Data inserted successfully");
//   })
//   .catch((err) => {
//     console.error("Unable to insert data:", err);
//   });

// fetch data
// Student.findAll({where: {city: 'Junagadh'}})
//   .then((students) => {
//     console.log(students);
//   })
//   .catch((err) => {
//     console.error("Unable to fetch data:", err);
//   });

//fetch single data
// Student.findByPk(2)
//   .then((student) => {
//     console.log(student);
//   })
//   .catch((err) => {
//     console.error("Unable to fetch data:", err);
//   });

// update data
// Student.update(
//   { name: "kartik1", city: "jam" },
//   {
//     where: { id: 3 },
//   }
// )
//   .then(() => {
//     console.log("Data updated successfully");
//   })
//   .catch((err) => {
//     console.error("Unable to update data:", err);
//   });

// delete data
Student.destroy({
  where: { id: 1 },
})
  .then(() => {
    console.log("Data deleted successfully");
  })
  .catch((err) => {
    console.error("Unable to delete data:", err);
  });
