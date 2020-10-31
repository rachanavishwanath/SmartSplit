import React from 'react';
import { forShow } from '../../../reducers/format_date/for_expense';

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
        this.props.fetchADs(this.props.expenseId);
        this.props.handleShowAsset();
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('additional_detail[notes]', this.state.notes);
        formData.append('additional_detail[author_id]', this.props.currentUser.id);
        formData.append('additional_detail[expense_id]', this.props.expenseId);
        this.props.createAD(formData).then(()=>{
            this.setState({
                author_id: this.props.currentUser.id,
                notes: '',
                expense_id: this.props.expenseId
            })
        });
    }

    render() {
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
                return <li key={ad.id} className="ad-li">
                        <div className="parent-div">
                            <div className="child-div">
                                <p className="ad-author">{author}</p> 
                                <p className="ad-createdAt">{forShow(ad.created_at)}</p>
                            </div>
                            <button onClick={() => this.props.deleteAD(ad.id)}>X</button>
                        </div> 
                        <div className="ad-div">
                            <p className="ad-notes">{ad.notes}</p>  
                            {ad.asset_url ? <a className="ad-asset" href={ad.asset_url} target="_blank">Receipt</a> : null}
                        </div>
                        </li>
            })
        }
        
        return(
            <div className="list-additional_details">
                <h1>NOTES AND COMMENTS </h1>
                <ul>{allADDetails}</ul>
                <form onSubmit={this.handleSubmit} className="add-a-comment">
                    <textarea
                        className="input-add-a-comment"
                        placeholder="Add a comment"
                        value={this.state.notes}
                        onChange={(e) => (this.setState({ notes: e.currentTarget.value}))}
                    />
                    <br/>
                    <button className="post-comment">Post</button>
                </form>
            </div>
        )
    }
}