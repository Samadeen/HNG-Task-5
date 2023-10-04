import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Profile from './pages/Profile/Profile';
import Share from './pages/Share/Share';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/share' element={<Share />} />
    </Routes>
  );
}

export default App;
