import React from 'react';
//import './App.css';
import './HealthBar.css';


const Lives = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];

class HealthBar extends React.Component {
    constructor(props) {
        super(props)

  		this.state = {
            count: 20
        }
        	this.increment = this.increment.bind(this);
        	this.decrement = this.decrement.bind(this);
       }
           increment(e) {
        if (this.state.count >= 0  && this.state.count < 20) {
        this.setState({ count: this.state.count + 1 });
        }
        else {
        }
    }

    decrement(e) {
        if (this.state.count > 0  && this.state.count <= 20) {
        this.setState({ count: this.state.count - 1 });
        }
        else {
        }
    }

    render() {

        return (
        	<health>
        	<p id='hp'>HIT POINTS</p>
            <div className='health-bar'>
            <div className='filler' style={{ 'width': Lives[this.state.count] + '%' }}>{this.state.count}</div>
            </div>
            <button id='life' onClick={this.decrement}>-</button>
            <button id='life' onClick={this.increment}>+</button>
            </health>
        );
    }
}



export default HealthBar;