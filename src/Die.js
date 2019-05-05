import React from 'react';
import './Die.css'



const Dice = [4, 6, 8, 10, 12];


class Die extends React.Component {
    constructor(props) {
        super(props);
  this.state = {
            count: 0,
            roll: null,
            status: null
        }
        this.handleClick = this.handleClick.bind(this);
        this.roll = this.roll.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.clear = this.clear.bind(this);
    }


    increment(e) {
        if (this.state.count >= 0  && this.state.count < 4) {
        this.setState({ count: this.state.count + 1 });
        }
        else {
        }
    }

    decrement(e) {
        if (this.state.count > 0  && this.state.count < 5) {
        this.setState({ count: this.state.count - 1 });
        }
        else {
        }
    }

    roll(e){
        this.setState({ roll: Math.floor(Math.random() * Dice[this.state.count] + 1)});
    }

    clear(e) {
        this.setState({ status: "Done"});
    }


    handleClick(e) {
        var die = document.getElementById("die");
        die.classList.add("rolling");
        this.roll();
        this.setState({status: "ROLLING"});
    
        setTimeout(function () {
            die.classList.remove("rolling"); 
        }, 750);

        setTimeout(function () {
            this.setState({ status: null});
        }.bind(this), 750);
    }

    render() {

        return (
            <die>
            <div className='die-container'  onClick={ this.handleClick }>
                <div id="die" className={'d' + Dice[this.state.count]}>
                </div>
            </div>
            <button id='deforge' onClick={this.decrement}>DEFORGE</button>
            <button onClick={this.increment}>REFORGE</button>         
            <p>{this.state.roll}</p>
            <p>{this.state.status}</p>
            </die>
        );
    }
}

export default Die;
