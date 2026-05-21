const express = require("express");
const fs = require("fs");
const EventEmitter = require("events");

const event = new EventEmitter();
const buffer = Buffer.from("Hello");

const app = express();

//const userRoutes = require("./routes/userRoutes");




const productRoutes = require("./routes/productRoutes");


//app.use("/users",userRoutes)
app.use("/products",productRoutes)
// app.use(express.static("Public"));

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
//console.log(userRoutes);









// app.get("/", (req, res) => {
//   res.send("Server Running");
// });


// app.get("/about", (req, res) => {
//   res.send("about_page");
// });

// app.get("/contact", (req, res) => {
//   res.send("contact_page");
// });




//app.use("/users", userRoutes);



console.log(buffer);

event.on("greet", () => {
  console.log("Hello Ketan");
});

event.emit("greet");



app.listen(3000, () => {
  console.log("Server started");
});