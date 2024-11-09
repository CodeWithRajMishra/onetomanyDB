const UserModel=require("../models/userModel");
const ProfileModel= require("../models/profileModel");
const userSave=async(req, res)=>{
      const {username, email, fname, sname}= req.body;
      console.log(username, email, fname, sname);
      const UserData= await UserModel.create({
         username:username,
         email:email
      })
      console.log(UserData);
      const ProfileData= await ProfileModel.create({
        userid:UserData._id,
        firstname:fname,
        secondname:sname
      })
      res.send("Data succesfully save!!!");
}
const userDisplay=async(req, res)=>{
    const UserData= await ProfileModel.find().populate("userid");
    res.send(UserData);
}

module.exports={
    userSave,
    userDisplay
}