const EmpModel= require("../models/employeeModel");

const userRegistration=async(req, res)=>{
    const {name, email, password} = req.body;
    const empdata=await EmpModel.create({
        name:name,
        email:email,
        password:password
    })

    res.send("succesfully registered!");
}
const userLogin=async(req, res)=>{
    const {email, password} = req.body;
    const empdata= await EmpModel.find({email:email});
      if (empdata.length<1)
      {
        res.status(401).send("Invalid Email!")
      }
      else
      {
        if (empdata[0].password!=password)
        {
            res.status(401).send("Invalid Credentials!");
        }
        else
        {
            res.status(200).send(empdata);
        }
      }
}



module.exports={
    userRegistration,
    userLogin
}