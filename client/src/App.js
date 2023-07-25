import { Routes, Route } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import DisplayAll from './components/DisplayAll';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DisplayAll />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
