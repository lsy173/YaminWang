import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Scene, Router, Actions, Modal } from 'react-native-router-flux';
import Wordlist from './Wordlist';
import Worddetail from './Worddetail';
import Update from './Update';
import { Entypo } from '@expo/vector-icons';

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
        <Scene key="root" hideTabBar>
          <Scene tabs={true} hideNavBar>
            <Scene key="Wordlist" initial={true} title='야민정음 용어' component={Wordlist} icon={TabIcon} iconName={"book"} />
            <Scene key="Update" title='야민정음 등록' component={Update} icon={TabIcon} iconName={"add-to-list"} />
          </Scene>
          <Scene key="Worddetail" title='용어 설명' component={Worddetail} />
        </Scene> 
      </Router>
    );
  }
}

class TabIcon extends React.Component {
  render() {
    var color = this.props.selected ? '#00f240' : '#301c2a';

    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Entypo style={{color: color}} name={this.props.iconName || "circle"} size={18}/>
      </View>
    );
  }
}