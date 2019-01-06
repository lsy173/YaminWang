import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, WebView } from 'react-native';
import { AdMobBanner } from 'expo';

const { height, width } = Dimensions.get("window");

export default class Worddetail extends React.Component {
    render() {
        const { word, url, content } = this.props;

        if(url!=""){
            return (
                <View style={{width: width, height: height-70, alignItems: "center"}}>
                    <WebView
                        source={{uri: url}}
                        style={styles.webView}
                    />
                    <AdMobBanner
                        bannerSize="banner"
                        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                        testDeviceID="EMULATOR"
                        onDidFailToReceiveAdWithError={this.bannerError}
                    />
                </View>
            );
        } else {
            return (
                <View>
                    <Text style={{fontSize: 20, textAlign: "center", marginTop: 15, fontWeight: "700"}}>{word}</Text>
                    <ScrollView style={{height: 300}}>
                        <Text style={{marginTop: 10, paddingLeft: 20, paddingRight: 20}}>{content}</Text>
                    </ScrollView>
                    <View style={{alignItems: "center"}}>
                        <AdMobBanner
                            bannerSize="mediumRectangle"
                            adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                            testDeviceID="EMULATOR"
                            onDidFailToReceiveAdWithError={this.bannerError}
                        />
                    </View>
                </View>
            )
        }
        
    }

}

const styles = StyleSheet.create({
    webView: {
        width: width
    }
})