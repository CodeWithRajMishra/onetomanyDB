const StuModel= require("../models/employeeModel");
const stuDataSave=async(req, res)=>{
    const {eno, name, designation, salary}= req.body;
     try {
        const Student=await StuModel.create({
            empno:eno,
            empname:name,
            designation:designation,
            salary:salary
        })  
        res.status(200).json(Student);
     } catch (error) {
        res.status(404).json("MongoDB Server No Strated!!!");
     }
}

const stuDataDisplay=async(req, res)=>{
 
    try {
        const studata= await StuModel.find();
        res.status(200).json(studata);
    } catch (error) {
         res.status(404).json("Data from MongoDB not Found!")
    }
}


const stuDataSearch=async(req, res)=>{
         let {empno}= req.body;
         const myData=await     StuModel.find({empno:empno})         
         res.send(myData);
}
const stuUpdateDataDisplay=async(req, res)=>{
     const Data= await StuModel.find();
     res.send(Data);
}

const stuDataDelete=async(req, res)=>{
   const myid= req.body.id;
   const student=await  StuModel.findByIdAndDelete(myid);   
   res.send("record deleted!")
}
const stuDataEdit=async(req, res)=>{
    const id=req.body.id;
    const studata= await  StuModel.findById(id);
    res.send(studata);
}
const stuDataEditSave=async(req, res)=>{
    const {_id, empno, empname, designation, salary} = req.body;

    const studata= await StuModel.findByIdAndUpdate(_id, {
       empno:empno,
       empname:empname,
       designation:designation,
       salary:salary
    })
   
    res.send("Data succesfully updated!!!");
}

module.exports={
    stuDataSave,
    stuDataDisplay,
    stuDataSearch,
    stuUpdateDataDisplay,
    stuDataDelete,
    stuDataEdit,
    stuDataEditSave
}