import React from 'react';

// will receive friends arr 

export default (props) => {
    if (props.val) {
        return (
            props.friends.map((friend, idx) => {
                if (friend.name.startsWith(this.props.val)) {
                    return (
                        <li key={idx} className="names" value={idx}>
                            {name}
                        </li>
                    )
                }
            })
        )
    } else {
        return (
            props.friends.map((friend, idx) => {
                return (
                    <li key={idx} className="names" onClick={props.select} value={idx}>
                        {friend}
                    </li>
                )
            })
        )
    }
}