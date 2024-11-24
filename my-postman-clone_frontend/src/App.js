import './App.css';
import RestApiHome from './pages/RestApiHome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        {/* Define your routes here */}
        <Routes>
          {/* Add other routes as needed */}
          <Route path="/" element={<RestApiHome />} />
          <Route path='*' element={<div>Page Not Found!</div>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
