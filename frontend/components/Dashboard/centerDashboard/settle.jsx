import React from 'react';

export default class Settle extends React.Component {
    render() {
        return (
            <div>
                <div className="settle expense-form">
                    <div className="expense-form-header settleup">
                        <h2>Settle up</h2>
                        <button onClick={e => {
                            e.preventDefault();
                            this.props.closeModal();
                        }}>x</button>
                    </div>
                    <div>
                        <h3 className="economy">Settle up? In this economy?</h3>
                    </div>
                    <div className="footer-buttons">
                        <button onClick={e => {
                            e.preventDefault();
                            this.props.closeModal();
                        }}>Cancel</button>
                        {/* <button>save</button> */}
                    </div>
                </div>
            </div>
        )
    }
}