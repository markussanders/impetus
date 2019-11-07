import React from 'react';
import Time from './Time';

const Welcome = props => {
    
    let name = '';
    
    return (
        <div id="welcome-screen">
            <Time />
            <form id="underlined-form" onSubmit={(e) => {
                    e.preventDefault();
                    props.setUser(name);
                }}>
                <label className="form-text-header">Hello, welcome to Impetus. What's your name?</label>
                <br/>
                <input id="form-input" onChange={(e) => name = e.target.value}></input>
            </form>
        </div>
    );
}

export default Welcome;