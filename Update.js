import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default class Update extends React.Component {
    state={
        inputWord: "",
        inputExplain: ""
    }
    render() {
        return (
            <View>
                <Text>여러분의 요청이 앱을 완성시킵니다!</Text>
                <TextInput
                    placeholder={"단어 입력"}
                    onChangeText={this._controlWord}
                />
                <TextInput
                    placeholder={"뜻 입력"}
                    onChangeText={this._controlExplain}
                />
                
            </View>
        );
    }

    _controlWord = (text) => {
        this.setState({
            inputWord: text
        })
    }

    _controlExplain = (text) => {
        this.setState({
            inputExplain: text
        })
    }
}
