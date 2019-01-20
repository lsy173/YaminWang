import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, WebView, Platform } from 'react-native';
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
                    {Platform.ios? (
                        <AdMobBanner
                            bannerSize="banner"
                            adUnitID="ca-app-pub-1263632577876314~7013604910"
                            onDidFailToReceiveAdWithError={this.bannerError}
                        />
                    ) : (
                        <AdMobBanner
                            bannerSize="banner"
                            adUnitID="ca-app-pub-1263632577876314/4712308420"
                            onDidFailToReceiveAdWithError={this.bannerError}
                        />
                    )}
                    
                </View>
            );
        } else {
            return (
                <View>
                    <ScrollView style={{height: height}}>
                        <Text style={{fontSize: 20, textAlign: "center", marginTop: 15, fontWeight: "700"}}>{word}</Text>
                        <Text style={{marginTop: 10, paddingLeft: 20, paddingRight: 20}}>{content}</Text>
                        <View style={{alignItems: "center", marginTop: 20}}>
                        {Platform.ios? (
                            <AdMobBanner
                                bannerSize="mediumRectangle"
                                adUnitID="ca-app-pub-1263632577876314~7013604910"
                                onDidFailToReceiveAdWithError={this.bannerError}
                            />
                        ) : (
                            <AdMobBanner
                                bannerSize="mediumRectangle"
                                adUnitID="ca-app-pub-1263632577876314/4712308420"
                                onDidFailToReceiveAdWithError={this.bannerError}
                            />
                        )}
                            
                        </View>
                    </ScrollView>
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