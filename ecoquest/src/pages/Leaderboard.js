import React from 'react';
import Navbar from '../components/Navbar';

const Leaderboard = () => {
    const users = [
        { id: 1, name: 'Alice', points: 120 },
        { id: 2, name: 'Bob', points: 100 },
        { id: 3, name: 'Charlie', points: 80 },
    ];

    return (
        <div>
            <Navbar points={users[0].points} />
            <h2>Leaderboard</h2>
            <div className="podium">
                {users.slice(0, 3).map((user, index) => (
                    <div key={user.id} className={`podium-place place-${index + 1}`}>
                        {user.name} - {user.points} pts
                    </div>
                ))}
            </div>
            <ul>
                {users.slice(3).map((user) => (
                    <li key={user.id}>{user.name} - {user.points} pts</li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
