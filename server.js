require("dotenv").config({ path: "./config.env" });
const app = require("./app");
const mongoose = require("mongoose");

//// get DATABASE_ULR and PASSWORD from config.env file
const db = process.env.DATABASE_URL.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

//// connect to DB
mongoose.connect(db).then(console.log(`Connected to DB`));

//// get PORT from config.env file
const port = process.env.PORT || 5500;

//// Listen to Server
app.listen(port, console.log(`Server is running on port... ${port}`));
