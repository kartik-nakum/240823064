const express = require("express");
const studentRoute = require("./routes/studentRoute1");
const app = express();
const PORT = 80;
app.use(express.json());

app.use("/student", studentRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
