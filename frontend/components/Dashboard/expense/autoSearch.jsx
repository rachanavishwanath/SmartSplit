import React from 'react';
// pass val to this component
export default (props) => {
    debugger
    console.log(props);
    const SearchResult = props.friends.map(friend => {
        debugger
            if (friend.name.startsWith(props.val)) {
                return <li key={friend.friend_id} 
                        className="names"
                        onClick={props.setPayableId(friend.friend_id)}
                        >
                        {friend.name}
                    </li>
                }
            })
        return (
            <div>
                <h1>Where are you?</h1>
                <ul>{SearchResult}</ul>
            </div>
        )
    }