import React from 'react';
//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Navbar from './Navbar'
import Die from './Die'
import HealthBar from './HealthBar'
import './App.css'

class App extends React.Component {
  render() {
    return (
        <main>
            <Navbar />
            <HealthBar /> 
            <Die />  
        </main>
    );
  }
}

export default App;
