import React from 'react';

export default class AdditionalDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = { notes: '', assetFile: null, assetUrl: null }
        this.updateField = this.updateField.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    updateField(e){
        this.props.updatedNotes(e.currentTarget.value, this.state.assetUrl, this.state.assetFile )
        this.setState({ notes: e.currentTarget.value})
    }

    handleFile(e){
        const file = e.target.files[0] ;
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ assetFile: file, assetUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
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
                        <form>
                            <input 
                                className="file-input"
                                type="file"
                                onChange={this.handleFile}
                            />
                        </form>
                    </section>
                    <section className="notes">
                        <textarea className="add-notes" cols="30" rows="10"
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