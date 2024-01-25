import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import DataList from './component/DataList';
import PostData from './component/PostData';
import EditData from './component/EditData';
function App() {
  return(
      <div>
        <BrowserRouter>
        <Routes>
          <Route index = "/" element = {<PostData />} ></Route>
          
          <Route path='/dataList' element = {<DataList/>}></Route>
          
          <Route path='/dataEdit/:_id' element = {<EditData/>}></Route>
          
          
        </Routes>
        </BrowserRouter>
      </div>
    
  ) 
}

export default App
