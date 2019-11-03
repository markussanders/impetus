import React from 'react';


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser,
            greeting: '',
            time: '',
            renderDropdown: false,
        }
    }

    componentDidMount() {
        this.getTime();
        setInterval(() => {
            this.getTime();
        }, 1000);
    }

    getTime = () => {
        let dateTime = new Date();
        let minutes = dateTime.getMinutes();
        minutes = String(minutes).length === 1 ? `0${minutes}` : minutes;
        let time = `${dateTime.getHours()}:${minutes}`;
        this.setState({time});
        this.greet(time);
    }

    greet = time => {
        let newTime = parseInt(time.replace(':', ''));
        let greeting =  newTime < 1200 ? 'Good Morning': newTime > 1700 ? 'Good Evening' : 'Good Afternoon';
        this.state.currentUser.name ? this.setState({greeting: `${greeting}, ${this.state.currentUser.name}.`}) : this.setState({ greeting });
    }

    renderDropdown = () => {
        return (
            <ul id="more-options-list">
                <li className="more-options-item" onClick={() => this.setMantra()}>Show today's mantra</li>
                <li className="more-options-item" onClick={() => console.log('update currentUser name using prop function')}>Edit your name</li>
            </ul>
        )
    }
    
    setMantra = () => {
        this.setState({greeting: 'You are enough.'});
    }

    render() {
        return (
            <div id="greeting-clock-div">
                <h2 id="clock">{this.state.time}</h2>
                <h3 id="greeting">{this.state.greeting}<button id="more-options" onClick={() => this.setState({renderDropdown: !this.state.renderDropdown})}>•••</button></h3>
                {this.state.renderDropdown ?
                  <ul id="more-options-list">
                    <li className="more-options-item" onClick={() => this.setMantra()}>Show today's mantra</li>
                    <li className="more-options-item" onClick={() => console.log('update currentUser name using prop function')}>Edit your name</li>
                  </ul>
                : null}
            </div>
        )
    }

}

export default Clock;