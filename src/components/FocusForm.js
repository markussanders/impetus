import React from 'react';

class FocusForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: '',
        }
    }

    render() {
        return (
            <div id="focus-form-div">
                {this.state.tasks ? <p>True</p> : <h3 className="form-text-header">What's your main focus for today?</h3>}
                <form id="underlined-form" onSubmit={(e) => {
                    e.preventDefault();
                    this.props.setMainFocus(this.state.focus);
                }}>
                    <input id="form-input" onChange={(e) => this.setState({focus: e.target.value})}></input>
                </form>
            </div>
        )
    }
}

export default FocusForm;