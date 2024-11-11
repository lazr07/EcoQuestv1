import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const AddFriends = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const recommendedFriends = ['David', 'Eve', 'Frank'];

    return (
        <div>
            <Navbar points={0} />
            <h2>Add Friends</h2>
            <input
                type="text"
                placeholder="Search for friends..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <h3>Recommended Friends</h3>
            <ul>
                {recommendedFriends
                    .filter((friend) => friend.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((friend) => (
                        <li key={friend}>{friend}</li>
                    ))}
            </ul>
        </div>
    );
};

export default AddFriends;
