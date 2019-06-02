import React from 'react'
import './Die.css'
import './Assets.css'

const Dice = [4, 6, 8, 10, 12];

class Die extends React.Component {
    constructor(props) {
        super(props);
  this.state = {
            count: 0,
            roll: 0,
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
        this.setState({roll: 0})
        }
        else {
        }
    }

    decrement(e) {
        if (this.state.count > 0  && this.state.count < 5) {
        this.setState({ count: this.state.count - 1 });
        this.setState({roll: 0})
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
        this.roll();
    }

    render() {

        return (
            <die className='noselect'>
            <p id='level'>LEVEL {'D' + Dice[this.state.count]}</p>
            <div className='die-container'  onClick={ this.handleClick }>
            <div id='die' className={'d' + Dice[this.state.count] + '_' + this.state.roll}>
            </div>
            </div>
            <forge>
            <div id='deforge' className='button' onClick={this.decrement}></div>
            <div id='roll' className='button' onClick={this.handleClick}>ROLL</div>
            <div id='reforge' className='button' onClick={this.increment}></div>
            </forge>
            </die>
        );
    }
}

export default Die;