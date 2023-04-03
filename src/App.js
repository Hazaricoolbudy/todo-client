// import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contacus from './components/Contacus';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <>
      <NoteState>

        <Navbar />
        <Alert />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contactus" element={<Contacus />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/singup" element={<Signup />} />
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
