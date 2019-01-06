import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, WebView } from 'react-native';

const { height, width } = Dimensions.get("window");

export default class Worddetail extends React.Component {
    render() {
        const { word, url, content } = this.props;

        if(url!=""){
            return (
                <WebView
                    source={{uri: url}}
                    style={styles.webView}
                />
            );
        } else {
            return (
                <View>
                    <Text style={{fontSize: 20, textAlign: "center", marginTop: 15}}>{word}</Text>
                    <Text style={{marginTop: 20, padding: 20}}>{content}</Text>
                </View>
            )
        }
        
    }

}

const styles = StyleSheet.create({
    webView: {
        width: width,
        height: height
    }
})