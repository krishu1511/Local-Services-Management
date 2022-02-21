const express = require("express");
const mongoose = require("mongoose");

const sessionController = require("./controller/session-controller");
const roleController = require("./controller/role-controller");
const userController = require("./controller/user-controller");

const app = express();

//middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.write("Welcome.......");
  res.end();
});

//html
app.get("/login", sessionController.login);
app.get("/signup", sessionController.signup);
app.post("/saveuser", sessionController.saveuser);

//role
app.post("/roles", roleController.addRole);
app.get("/roles", roleController.getAllRoles);
app.delete("/roles/:roleId", roleController.deleteRole);

app.put("/roles", roleController.updateRole);

//user
app.post("/users", userController.addUser);
app.get("/users", userController.getAllUsers);
app.put("/users", userController.updateUser);
app.delete("/users/:userId", userController.deleteUser);
app.post("/login", userController.login);

//database
mongoose.connect("mongodb://localhost:27017/localservices", function (err) {
  if (err) {
    console.log("db connection fail....");
    console.log(err);
  } else {
    console.log("db connected....");
  }
});

app.listen(3000, function () {
  console.log("server started on 3000");
});

// const calc = require("./calc") //import

// calc.addition(10,20)
// calc.multiplication(10,10)
// calc.subtraction(50,10)

// console.log("Hello");

// a=10 //number
// console.log(a)

// a="royal" //string
// console.log(a)

// function add(a,b)
// {
//     c=a+b
//     console.log("Addition=",c)
// }

// add(10,20)
