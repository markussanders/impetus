import React from 'react';
import Time from './Time';


class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: localStorage.getItem('user'),
            greeting: localStorage.getItem('mantra') || '',
            showMantra: false,
            time: '',
            renderDropdown: false,
            isMounted: false,
            updateCurrentUser: false,
        }
    }

    greet = time => {
        if (!this.state.showMantra) {
            let newTime = parseInt(time.replace(':', ''));
            let greeting =  newTime < 1200 ? 'Good Morning': newTime > 1700 ? 'Good Evening' : 'Good Afternoon';
            // this.state.currentUser ? this.setState({greeting: `${greeting}, ${this.state.currentUser}.`}) : this.setState({ greeting });
            this.setState({ greeting });
        }
    }

    renderDropdown = () => {
        if (!this.state.showMantra) {
            return (
                <ul id="more-options-list">
                    <li className="more-options-item" onClick={() => this.setMantra()}>Show today's mantra</li>
                    <li className="more-options-item" onClick={() => {
                        this.setState({updateCurrentUser: !this.state.updateCurrentUser})
                        }}>Edit your name</li>
                </ul>
            )
        } else {
            return (
                <ul id="more-options-list">
                    <li className="more-options-item" onClick={() => this.setState({showMantra: false, renderDropdown: false})}>Hide today's mantra</li>
                </ul>
            )
        }
    }
    
    setMantra = () => { 
        let mantra = localStorage.getItem('mantra');
        if (mantra) {
            this.setState({
                greeting: mantra,
                showMantra: true,
                renderDropdown: false,
            });
        } else {
            fetch("https://horizonshq.herokuapp.com/api/inspirationalquotes")
                .then(resp => resp.json())
                .then(mantra => {
                    localStorage.setItem('mantra', mantra.message);
                    this.setMantra();
                })
        }
    }

    componentDidMount() {
        this.setState({isMounted: true});
    }

    renderGreeting() {
        const greeting = this.state.greeting;
        return (
            < h3 id = "greeting" > {
                this.state.showMantra ? greeting : `${greeting}, ${this.state.currentUser}.`
            }
                <button id="more-options" onClick={() => this.setState({renderDropdown: !this.state.renderDropdown})}> ••• </button>
            </h3>
        )
    }

    renderGreetingWithForm() {
        const greeting = this.state.greeting;
        return (
            <h3 id="greeting"> {`${greeting}, `}
                <form id = "underlined-form-user" onSubmit = {(e) => {
                        e.preventDefault();
                        this.setState({
                            updateCurrentUser: false,
                            renderDropdown: false,
                        });
                        this.props.setUser(this.state.currentUser);
                    }
                }>
                <input id="form-input-user" placeholder = {this.state.currentUser} onChange={(e) => this.setState({currentUser: e.target.value})}></input>
            </form>
                <button id="more-options" onClick={() => this.setState({renderDropdown: !this.state.renderDropdown})}> ••• </button>
            </h3>
        )       
    }

    render() {
        return (
            <div id="greeting-clock-div">
                {this.state.isMounted ? <Time greet={this.greet}/> : null}
                {this.state.updateCurrentUser ? this.renderGreetingWithForm() : this.renderGreeting() }
                {this.state.renderDropdown ? this.renderDropdown() : null}
            </div>
        )
    }

}

export default Clock;