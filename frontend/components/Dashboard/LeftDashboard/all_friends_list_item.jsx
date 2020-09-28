import React from 'react';
import { Link } from 'react-router-dom';

export default ({friend}) => {
    return (
        <li className="li-friends">
            <Link to={`/friends/${friend.friend_id}`}>{friend.name}</Link>
        </li>
    )
}