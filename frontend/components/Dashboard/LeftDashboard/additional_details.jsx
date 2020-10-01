import React from 'react';

export default class AdditionalDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            author_id: this.props.currentUser.id,
            notes: '',
            expense_id: this.props.expenseId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        debugger
        this.props.fetchADs(this.props.expenseId);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createAD(this.state);
    }

    render() {
        console.log(this.props);
        if (!this.props.additionalDetails) { return null; }
        let that = this;
        let allADDetails;
        if (this.props.additionalDetails.length > 0) {
            allADDetails = this.props.additionalDetails.map(ad => {
                let author;
                if (ad.author_id === that.props.currentUser.id) {
                    author = that.props.currentUser.name
                } else {
                    this.props.currentUser.friends.forEach(friend => {
                        if (ad.author_id === friend.profile_id) {
                            author = friend.name
                        }
                    })
                }
                return <li key={ad.id}>
                            <p className="ad.author">{author}</p> 
                            <p className="ad.createdAt">{ad.created_at}</p>
                            <p className="ad.notes">{ad.notes}</p>
                            <button onClick={() => this.props.deleteAD(ad.id)}>X</button>
                        </li>
            })
        }
        
        return(
            <div className="list-additional_details">
                <h1>NOTES AND COMMENTS </h1>
                <ul>{allADDetails}</ul>
                <form onSubmit={this.handleSubmit} className="add-a-comment">
                    <input
                        className="input-add-a-comment"
                        placeholder="Add a comment"
                        value={this.state.notes}
                        onChange={(e) => (this.setState({ notes: e.currentTarget.value}))}
                    />
                    <button className="post-comment">Post</button>
                </form>
            </div>
        )
    }
}