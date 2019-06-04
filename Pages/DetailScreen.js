import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';


class DetailScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('pageData').Caption,
            headerStyle: {
                   backgroundColor: 'red',
                 },
                 headerTintColor: '#fff',
                 headerTitleStyle: {
                   fontWeight: 'bold',
                   textAlign: 'center',
                   fontSize: 24
                 },
        }
    }
    constructor(props) {
        super(props)
        let pageData = props.navigation.getParam('pageData')
        this.state = {
            details: pageData.pageData,
            URL: pageData.URL,
            Caption: pageData.Caption
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image source={{ uri: this.state.URL }} style={{ height: 200, width: '100%' }} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>
                    {this.state.Caption}
                </Text>
                <Text style={{ fontSize: 16, marginTop: 10 }}>
                    {this.state.details}
                </Text>

            </View>
        );
    }
}
export default DetailScreen;

