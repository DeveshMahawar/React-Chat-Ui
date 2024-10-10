import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Myapp.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './component/headar/Header';
import Chatbox from './component/chatbox/Chatbox';
import Chatname from './component/chatname-box/Chatname';




function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Chatname />} />
        <Route path="/Chatbox" element={<Chatbox />} />

      </Routes>

    </>
  );
}

export default App;
