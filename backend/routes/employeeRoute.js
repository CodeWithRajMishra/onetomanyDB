const express= require("express");
const route= express.Router();
const empController= require("../controllers/employeeController");
route.post("/usersave",  empController.userSave);
route.get("/userdisplay",  empController.userDisplay);


module.exports=route;