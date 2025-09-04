const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kartik:kartik@cluster0.5gdfgyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const studentSchema = new mongoose.Schema({
  name: String,
  department: String,
  startYear: Number,
  endYear: Number,
  enrollment: Number,
  address: String,
});

const Student = mongoose.model("Student", studentSchema);

console.log("MongoDB connected successfully");

const student = new Student({
  name: "kartik nakum20",
  department: "Computer Science",
  startYear: 2024,
  endYear: 2026,
  enrollment: 240823064,
  address: "jamnagar",
});

student
  .save()
  .then(() => {
    console.log("Student saved successfully");
  })
  .catch((error) => {
    console.error("Error saving student:", error);
  });

