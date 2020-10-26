import React from 'react';
import { ListItem } from 'semantic-ui-react';

export default class AutoSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchResult: null };
        this.SearchResult = this.SearchResult.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
        return (
            <div className="autoSearch">
                <ul className="autoSearch-ul" 
                >{this.state.searchResult}</ul>
            </div>
        )
    }
}