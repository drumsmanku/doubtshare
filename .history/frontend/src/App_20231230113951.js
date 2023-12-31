import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import LoginTutor from './Components/LoginTutor/LoginTutor';
import RegisterTutor from './Components/RegisterTutor/RegisterTutor';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/register/student' element={<Register/>}/>
          <Route path='/login/student' element={<Login/>}/>
          <Route path='/login/tutor' element={<LoginTutor/>}/>
          <Route path='/register/tutor' element={<LoginTutor/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
