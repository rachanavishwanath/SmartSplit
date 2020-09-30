import React from 'react';
import Calender from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

export default class Calender1 extends React.Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange (date) {
        this.setState({ date: date })
    } 

    render() {
        return (
            <div>
                <div className="expense-form-header">
                    <h2>Choose date</h2>
                    <button onClick={props.handleClick}>x</button>
                </div>
                <Calender
                    onChange={this.props.onChange}
                    value={this.props.value}
                />
            </div>
        );
    }
}