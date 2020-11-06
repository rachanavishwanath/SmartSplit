import React from 'react';
import { Link } from 'react-router-dom';

export default ({friend, deleteFriend}) => {
    console.log(deleteFriend)
    return (
        <li className="li-friends">
            <Link to={`/friends/${friend.friend_id}`}>{friend.name}</Link>
            <button class="delete-friend" onClick={() => deleteFriend(friend.friend_id)}>x</button>
        </li>
    )
}