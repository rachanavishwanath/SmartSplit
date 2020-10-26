import React from 'react';
import Calender from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

export default class Calender1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(date) {
        this.setState({ date: date })
    } 

    render() {
        return (
            <div className="child-modal calender">
                <div className="expense-form-header">
                    <h2>Choose date</h2>
                    <button onClick={this.props.handleClick()}>x</button>
                </div>
                <Calender
                    onChange={this.props.onChange}
                    value={this.props.value}
                />
            </div>
        );
    }
}