import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/challenges');
    };

    return (
        <div className="home">
            <h1>Climate Action App</h1>
            <button onClick={handleLogin}>Log In / Sign Up</button>
        </div>
    );
};

export default Home;
