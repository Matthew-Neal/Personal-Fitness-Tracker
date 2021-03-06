const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/WorkoutTracker',
    {});


//Routes
app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"));


app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})