import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ points }) => (
    <div className="navbar">
        <div>Points: {points}</div>
        <Link to="/challenges">Challenges</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/add-friends">Add Friends</Link>
    </div>
);

export default Navbar;
