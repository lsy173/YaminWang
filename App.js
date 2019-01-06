import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Scene, Router, Actions, Modal } from 'react-native-router-flux';
import Wordlist from './Wordlist';
import Worddetail from './Worddetail';

export default class App extends React.Component {

  _onBackPress = () => {
    if(Actions.state.index === 0){
      return false;
    } else {
      Actions.pop();
      return true;
    }
  }


  render() {
    return (
      <Router backAndroidHandler={this._onBackPress}>
          <Scene key="root" >
            <Scene key="Wordlist" initial={true} title='야민정음 용어' component={Wordlist}/>
            {/* <Scene key="Addword" title='야민정음 등록'/> */}
            <Scene key="Worddetail" title='용어 설명' component={Worddetail} />
          </Scene>
        
      </Router>
    );
  }
}
