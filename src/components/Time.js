import React from 'react';

class Time extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: '',
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
        if (this.props.greet) this.props.greet(time);
    }

    render(){
        return (
            <h2 id="clock">{this.state.time}</h2>
        )
    }
}


export default Time;