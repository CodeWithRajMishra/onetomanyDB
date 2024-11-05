import { useState } from "react";
import axios from "axios";
const App=()=>{
 
  const [fileData, setFileData]= useState();
 
  const handleFileChange=(e)=>{
  console.log(e.target.files);
  setFileData(e.target.files[0]);
  console.log(fileData);
 }

const handleSubmit=async()=>{
  const formData = new FormData();
  formData.append('file', fileData);
  let api="http://localhost:8080/upload";
  const response= await axios.post(api, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  console.log(response);

  alert("file Uploaded!");
}

  return(
    <>
      <h1> Welcome To File Uploading</h1>
      Upload image : <input type="file" onChange={handleFileChange} />
      <br/>
      <button onClick={handleSubmit}>Upload!</button>
    </>
  )
}

export default App;