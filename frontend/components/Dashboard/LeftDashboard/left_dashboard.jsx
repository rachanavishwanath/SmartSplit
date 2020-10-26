import React from 'react';
import { Link } from 'react-router-dom';
import FriendListItems from './all_friends_list_item';
import AddFriend from './add_friend';

export default class LeftDashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = { addFriends: false }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(modal) {
         this.props.openModal({modal: modal})
    }

    render() {
        console.log(this.props);
        if (this.props.friends === undefined) { return null; }
        const allFriends = this.props.friends.map(friend => {
            return <FriendListItems
                key={friend.friend_id}
                friend={friend}
            />
        })
        return (
            <div>
                <div className="left-dashboard">
                    <Link id="dashboard-link" to="/dashboard">Dashboard</Link>
                    <Link id="recent-activity" to="/activity"><i className="icon-flag"></i>Recent activity</Link>
                    <Link id="all-expenses" to="/all">All expenses</Link>
                    <div id="friends">
                        <div className="fr-header">
                            <h3>FRIENDS</h3>
                            <button className="add-friend" onClick={() => this.handleClick('add-friend')}>+</button>
                        </div>
                        <ul className="ul-friends">
                            {allFriends}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}