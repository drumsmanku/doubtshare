import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import LoginTutor from './Components/LoginTutor/LoginTutor';
import RegisterTutor from './Components/RegisterTutor/RegisterTutor';
import DashboardTutor from './Components/DashboardTutor/DashboardTutor';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/tutor' element={<DashboardTutor/>}/>
          <Route path='/register/student' element={<Register/>}/>
          <Route path='/login/student' element={<Login/>}/>
          <Route path='/login/tutor' element={<LoginTutor/>}/>
          <Route path='/register/tutor' element={<RegisterTutor/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
