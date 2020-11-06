import React from 'react';
import { Link } from 'react-router-dom';

export default ({friend, deleteFriend, push}) => {
    return (
        <li className="li-friends">
            <Link to={`/friends/${friend.friend_id}`}>{friend.name}</Link>
            <button className="delete-friend" onClick={() => {
                deleteFriend(friend.friend_id).then(action => {
                    return push('/all');
                })
            }}>X</button>
        </li>
    )
}