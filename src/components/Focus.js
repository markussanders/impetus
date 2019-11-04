import React from 'react';


class Focus extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            completed: false,
            mainFocus: this.props.mainFocus,
        }
    }
    
   render() {
       const mainFocus = this.state.mainFocus;
        return (
        <div id="focus-div">
            <h4 className="focus-text-header">TODAY</h4>
            <div id="main-focus-item-div">
                <button id="main-focus-mark-complete" onClick={() => this.setState({completed: !this.state.completed})}></button>
                <h3 id={this.state.completed ? "main-focus-text-completed": "main-focus-text"}>{mainFocus}</h3>
                <button id="main-focus-delete" onClick={() => this.props.setMainFocus("")}>X</button>
            </div>
        </div>
    )
   }
}

export default Focus;