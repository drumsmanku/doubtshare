import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
