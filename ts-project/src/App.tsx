import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainSearch from './components/MainSearch';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyNav from './components/MyNav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path='/' element={<MainSearch />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
