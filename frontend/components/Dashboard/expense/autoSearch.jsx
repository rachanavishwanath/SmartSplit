import React from 'react';

export default class AutoSearch extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.state;
        this.state = { searchResult: null };
        this.SearchResult = this.SearchResult.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.SearchResult();
    }

    handleClick(friend_id) {
        e.preventDefault();
        this.props.setPayableId(friend_id)
    }

    SearchResult(){
        let searchResult = this.props.friends.map(friend => {
        if (friend.name.startsWith(this.props.val)) {
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
                <ul className="autoSearch-ul">{this.state.searchResult}</ul>
            </div>
        )
    }
}