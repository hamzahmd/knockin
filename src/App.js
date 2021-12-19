import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import AgentPage from './pages/AgentPage/AgentPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ChatScreen from './screen/ChatScreen';
import ProfilePage from './screen/ProfilePage';
import PropertiesScreen from './screen/PropertiesScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/agent' element={<AgentPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/chat' element={<ChatScreen />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/property' element={<PropertiesScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
