import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/register' element={<Register/>}/>
         
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
