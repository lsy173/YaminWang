import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Platform, Keyboard, Alert } from 'react-native';
import axios from 'axios';
import config from './config.json';

const { height, width } = Dimensions.get("window");
const { api, token, channel, username } = config;

export default class Update extends React.Component {
    state={
        inputWord: "",
        inputExplain: ""
    }
    render() {
        return (
            <View>
                <Text style={{textAlign: "center", fontSize: 17, marginTop: 5, fontWeight: "700"}}>여러분의 요청이 앱을 완성시킵니다!</Text>
                <TextInput
                    style={styles.search}
                    underlineColorAndroid={"transparent"}
                    placeholder={"새 단어 입력"}
                    onChangeText={this._controlWord}
                    autoCorrect={false}
                    placeholderTextColor={"#55595C"}
                />
                <TextInput
                    style={styles.search2}
                    placeholder={"뜻 입력"}
                    onChangeText={this._controlExplain}
                    underlineColorAndroid={"transparent"}
                    autoCorrect={false}
                    multiline={true}
                    placeholderTextColor={"#55595C"}
                />

                <TouchableOpacity style={{alignItems: "center"}} onPress={this._submit} TouchableOpacity={0.7}>
                    <View style={styles.button}>
                        <Text style={{color: "white", fontSize: 17, fontWeight: "700"}}>등록 요청</Text>
                    </View>
                </TouchableOpacity>
                
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

    _submit = async() => {
        var { inputWord, inputExplain } = this.state;
        Keyboard.dismiss();

        var text = "새 요청\n" + inputWord + "\n\n" + inputExplain;
        console.warn(api);
        await axios.get(api, {
            params: {
                token: token,
                channel: channel,
                username: username,
                text: text
            }
        });

        this.setState({
            inputWord: "",
            inputExplain: ""
        });


        Alert.alert("등록 요청 성공", "감사합니다. 성공적으로 등록 요청 되었습니다.");
    }
}

const styles = StyleSheet.create({
    search: {
        width: width,
        height: 50,
        paddingLeft: 17,
        backgroundColor: "white",
        color: "black",
        marginTop: 15
    },
    search2: {
        width: width,
        paddingLeft: 17,
        backgroundColor: "white",
        color: "black",
        marginTop: 15,
        paddingBottom: 17,
        paddingTop: 15
    },
    button: {
        width: width-120,
        height: 50,
        backgroundColor: "#55595C",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        borderRadius: 10,
        ...Platform.select({
            ios: {
                shadowColor: "rgb(50, 50, 50)",
                shadowOpacity: 0.5,
                shadowRadius: 5,
                shadowOffset: {
                    height: 1,
                    width: 1
                }
            },
            android: {
                elevation: 5
            }
        })
    }
})