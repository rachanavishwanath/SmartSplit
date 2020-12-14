import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default ({friend, deleteFriend, push}) => {
    return (
        <li className="li-friends">
            <NavLink 
                to={`/friends/${friend.friend_id}`}
                activeStyle={{ color: "#1cc29f" }}
            >{friend.name}</NavLink>
            <button className="delete-friend" onClick={() => {
                deleteFriend(friend.friend_id).then(action => {
                    return push('/all');
                })
            }}>X</button>
        </li>
    )
}