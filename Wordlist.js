import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import data from './data.json';
import { SearchableFlatList } from "react-native-searchable-list";
import { Actions } from 'react-native-router-flux';
import { Entypo } from '@expo/vector-icons';

const { height, width } = Dimensions.get("window");

export default class Wordlist extends React.Component {
    state = {
        wordList: [],
        searchTerm: "",
        searchAttribute: "word",
        ignoreCase: true
    }

    componentDidMount = () => {
        this._loadData();
    }

    render() {
        const { wordList, searchTerm, searchAttribute, ignoreCase } = this.state;

        return (
            <View>
                <TextInput
                    style={styles.search} placeholder={"야민정음 검색"}
                    onChangeText={searchTerm => this.setState({ searchTerm })}
                    autoCorrect={false}
                    underlineColorAndroid={"transparent"}
                />
        
                <SearchableFlatList
                    style={styles.list} data={wordList} 
                    searchTerm={searchTerm} searchAttribute={searchAttribute} 
                    ignoreCase={ignoreCase}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                Actions.Worddetail({word: item.word, url: item.url, content: item.content})
                            }}
                            TouchableOpacity={0.7}
                        >
                            <View style={styles.wordlistView}>
                                <View style={{flex: 7, marginLeft: 20}}>
                                    <Text style={styles.listItem}>{item.word}</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Entypo name="chevron-thin-right" size={18} color={"gray"} />
                                </View>
                            </View>
                            
                        </TouchableOpacity>
                        
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }

    _loadData = () => {
        this.setState({
            wordList: data
        });
    }

}

const styles = StyleSheet.create({
    search: {
        width: width,
        height: 50,
        paddingLeft: 17,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "gray"
    },
    list: {
        width: width,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "gray"
    },
    wordlistView: {
        flex: 1,
        width: width,
        height: 60,
        flexDirection: "row",
        borderTopColor: "gray",
        borderTopWidth: StyleSheet.hairlineWidth,
        alignItems: "center",
        justifyContent: "center"
    }
})