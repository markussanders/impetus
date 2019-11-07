import React from 'react';
import Time from './Time';


class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: localStorage.getItem('user') || this.props.currentUser,
            greeting: '',
            time: '',
            renderDropdown: false,
            isMounted: false
        }
    }

    greet = time => {
        let newTime = parseInt(time.replace(':', ''));
        let greeting =  newTime < 1200 ? 'Good Morning': newTime > 1700 ? 'Good Evening' : 'Good Afternoon';
        this.state.currentUser ? this.setState({greeting: `${greeting}, ${this.state.currentUser}.`}) : this.setState({ greeting });
    }

    renderDropdown = () => {
        return (
            <ul id="more-options-list">
                <li className="more-options-item" onClick={() => this.setMantra()}>Show today's mantra</li>
                <li className="more-options-item" onClick={() => this.props.updateName()}>Edit your name</li>
            </ul>
        )
    }
    
    setMantra = () => {
        this.setState({greeting: 'You are enough.'});
    }

    componentDidMount() {
        this.setState({isMounted: true});
    }
    

    render() {
        return (
            <div id="greeting-clock-div">
                {this.state.isMounted ? <Time greet={this.greet}/> : null}
                <h3 id="greeting">{this.state.greeting}<button id="more-options" onClick={() => this.setState({renderDropdown: !this.state.renderDropdown})}>•••</button></h3>
                {this.state.renderDropdown ? this.renderDropdown() : null}
            </div>
        )
    }

}

export default Clock;