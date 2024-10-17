import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const EditData=()=>{
    const {empid} =useParams();
    const [mydata, setMydata]= useState({}); 
    //mydata={_id: '670ccbfdbf666d7b59298d89', empno: 1002, empname: 'sakshi', salary: 56000, __v: 0}

    const loadData=()=>{
        let api="http://localhost:8000/students/studenteditdata";
        axios.post(api, {id:empid}).then((res)=>{
           console.log(res.data);
           setMydata(res.data);
        })
    }

 useEffect(()=>{
    loadData();
 }, [])

    return(
        <>
         <h1> Edit Employee Data</h1>
         Edit Emp no <input type="text" 
         value={mydata.empno}  />
         <br/>
         Edit Emp name <input type="text" value={mydata.empname} />
         <br/>
         Edit Designation <input type="text" value={mydata.designation} />
         <br/>
         Edit Salary <input type="text" value={mydata.salary} />
         <br/>
        </>
    )
}
export default EditData;