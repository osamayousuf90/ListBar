import './App.scss';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './Page/Home';
import Profile from './Page/Profile';
import CustomPagination from './CustomPagination/CustomPagination';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CustomPagination />}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
     </div>
   )
}

export default App;
