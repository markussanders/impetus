import React from 'react';

class Time extends React.Component {
   _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            time: '',
        }
    }
    
    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            this.getTime();
            setInterval(() => {
                this.getTime();
            }, 1000);
        }
    }

    getTime = () => {
        let dateTime = new Date();
        let minutes = dateTime.getMinutes();
        minutes = String(minutes).length === 1 ? `0${minutes}` : minutes;
        let time = `${dateTime.getHours()}:${minutes}`;
        this.setState({time});
        if (this.props.greet && this._isMounted) this.props.greet(time);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render(){
        return (
            <h2 id="clock">{this.state.time}</h2>
        )
    }
}


export default Time;