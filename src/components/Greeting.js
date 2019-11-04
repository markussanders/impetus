import React from 'react';


class Greeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser,
            greeting: '',
            time: '',
            renderDropdown: false,
        }
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
            <div>
                
            </div>
        )
    }
}


export default Greeting;