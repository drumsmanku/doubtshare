import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
