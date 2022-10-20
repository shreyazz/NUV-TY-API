const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const e = require("express");

// middlewares
app.use(cors());
app.use(express.json());
// defining port
const PORT = process.env.PORT || 3001;

app.use(express.static('public'))
// setting up an empty GET Route
app.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})


app.post("/getCourse", (req, res) => {
  const courses = [
    {
      name: "Operating System Concepts (OS)",
      teacher: "Ms. Kinjal Patni",
      code: "IT229",
    },
    {
      name: "Management Information System (MIS)",
      teacher: "Ms. Meghna Desai",
      code: "IT206",
    },
    {
      name: "Android Technology (Android-L)",
      teacher: "Mr. Dhaval Mehta",
      code: "CA312",
    },
    {
      name: "Cloud Computing (CC-L)",
      teacher: "Ms. Cecil Johny",
      code: "CA313",
    },
    {
      name: "Computer Graphics & Image Processing (CGIP)",
      teacher: "Mr. Dhaval Mehta",
      code: "CA314",
    },
    {
      name: "Software Testing Basics (STB-L)",
      teacher: "Ms. Kriti Jaiswal",
      code: "CA317",
    },
    {
      name: "Application of Android Technologies (Android-P)",
      teacher: "Mr. Dhaval Mehta",
      code: "CA315",
    },
    {
      name: "Application of Software Basics (STB-P)",
      teacher: "Ms. Meghna Mittal",
      code: "CA316",
    },
  ];
  const { code } = req.body;
  let count = 0;
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].code == code) {
      return res.json({ subject: courses[i].name, teacher: courses[i].teacher });
    } else {
      count++;
    }
  }
  if (count > 0) {
    return res.json({ subject: "no subject found", teacher: "no teacher found" });
  }
});

// Starting Server on PORT
app.listen(PORT, () => console.log("Server started on PORT Number: " + PORT));
module.exports = app
