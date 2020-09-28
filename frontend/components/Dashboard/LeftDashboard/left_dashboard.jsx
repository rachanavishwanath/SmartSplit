import React from 'react';
import { Link } from 'react-router-dom';
import FriendListItems from './all_friends_list_item';

export default class LeftDashboard extends React.Component {
    render() {
        console.log(this.props);
        const allFriends = this.props.friends.map(friend => {
            debugger
            return <FriendListItems
                key={friend.friend_id}
                friend={friend}
            />
        })
        console.log(allFriends);
        return (
            <div className="left-dashboard">
                <Link id="dashboard-link" to="/dashboard">Dashboard</Link>
                <Link id="recent-activity" to="/activity"><i className="icon-flag"></i>Recent activity</Link>
                <Link id="all-expenses" to="/all">All expenses</Link>
                <div id="friends">
                    <div className="fr-header">
                        <h3>FRIENDS</h3>
                        <button className="add-friend">+</button>
                    </div>
                    <ul className="ul-friends">
                        {allFriends}
                        {/* <img src={window.friend} alt="friend-logo"/> */}
                        {/* <li className="li-friends">List of friends</li>
                        <li className="li-friends">Another List</li> */}
                    </ul>
                </div>
            </div>
        )
    }
}