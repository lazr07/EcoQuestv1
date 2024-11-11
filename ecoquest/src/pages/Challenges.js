import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Challenges = () => {
    const [points, setPoints] = useState(0);
    const challenges = [
        { id: 1, title: 'Pick up litter', points: 10 },
        { id: 2, title: 'Plant a tree', points: 50 },
    ];

    return (
        <div>
            <Navbar points={points} />
            <h2>Challenges</h2>
            <div className="challenge-list">
                {challenges.map((challenge) => (
                    <div key={challenge.id}>
                        <h3>{challenge.title}</h3>
                        <p>Points: {challenge.points}</p>
                        <button onClick={() => setPoints(points + challenge.points)}>Complete Challenge</button>
                    </div>
                ))}
            </div>
            <Link to="/leaderboard">Check Leaderboard</Link>
            <Link to="/add-friends">Add Friends</Link>
        </div>
    );
};

export default Challenges;
