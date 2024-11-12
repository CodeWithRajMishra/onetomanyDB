import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Display from "./Display";
import Insert from "./Insert";
import AddBook from "./AddBook";
const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="insert" element={<Insert/>}/>
          <Route path="display" element={<Display/>}/>
          <Route path="addmorebook/:id" element={<AddBook/>}/>
        </Route>
      </Routes>
    </BrowserRouter>      
    </>
  )
}

export default App;