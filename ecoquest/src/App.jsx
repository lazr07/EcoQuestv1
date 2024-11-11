import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Challenges from './pages/Challenges';
import Leaderboard from './pages/Leaderboard';
import AddFriends from './pages/AddFriends';
import './styles/app.css';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/challenges" element={<Challenges />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/add-friends" element={<AddFriends />} />
            </Routes>
        </Router>
    );
}

export default App;
