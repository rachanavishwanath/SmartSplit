import React from 'react';

export default class AdditionalDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = { notes: '' }
        this.updateField = this.updateField.bind(this);
    }

    updateField(e){
        this.props.updatedNotes(e.currentTarget.value)
        this.setState({ notes: e.currentTarget.value})
    }

    render(){
        return(
            <div className="child-modal ad">
                <div className="expense-form-header">
                    <h2>Add images/notes</h2>
                    <button onClick={this.props.handleClick}>x</button>
                </div>
                <div className="ad-summary">
                    <section className="upload">
                        <p>Attach an image or PDF:</p>
                        <div className="upload-asset">
                            <button>Choose File</button>
                            <p>No file chosen</p>
                        </div>
                    </section>
                    <section className="notes">
                        <textarea className="add-notes" cols="30" rows="10"
                            // pass value in below prop
                            onChange={this.updateField}
                            value={this.props.value}
                            placeholder="Add notes"
                        > 
                        </textarea>
                    </section>
                    <section className="complete">
                        <button onClick={this.props.closeNotesModal}>Done</button>
                    </section>
                </div>

            </div>
        )
    }
}