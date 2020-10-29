import React from 'react';
import { ListItem } from 'semantic-ui-react';
import InviteFriend from './invite_friend';

export default class AutoSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchResult: null,
            openInviteFriend: false 
        };
        this.SearchResult = this.SearchResult.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.OpenChildModal = this.OpenChildModal.bind(this);
    }

    componentDidMount(){
        this.SearchResult();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.val != this.props.val) {
            this.setState({ searchResult: null});
            this.SearchResult();
        }
    }

    handleClick(friend_id) {
        e.preventDefault();
        this.props.setPayableId(friend_id)
    }

    OpenChildModal(e) {
        e.preventDefault();
        this.setState({ openInviteFriend: true })
    }

    SearchResult(){
        let searchResult = this.props.friends.map(friend => {
            const lowerCase = this.props.val.toLowerCase();
            const friendName = friend.name.toLowerCase();
            if (friendName.includes(lowerCase)) {
            return <li key={friend.friend_id}
                        className="autoSearch-li"
                        onClick={() => (this.props.setPayableId(friend.friend_id, friend.name))}
                    >
                    {friend.name}
                 </li>
            }
        })
        this.setState({ searchResult: searchResult})
    }
    
    render() {
        if (this.state.searchResult === null) {return null};
        return (
            <div className="autoSearch">
               <ul className="autoSearch-ul" >
                 {this.state.searchResult.every(function(a) {return a === undefined}) ? 
                    <li className="autoSearch-li"
                        onClick={(e) => this.props.openInviteFriend(e)}
                    >Click to add email address</li>
                    : this.state.searchResult }
               </ul>
            </div>
        )
    }
}