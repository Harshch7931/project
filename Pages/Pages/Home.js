import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Body,
  Card,
  CardItem,
  Text,
  Left,
  Header,
  Container,
  Title,
  Right,
  Icon,
  Button
} from 'native-base';
import firebase from 'react-native-firebase'


class Home extends Component {
  static navigationOptions = {
    header:null
    
  };

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }
  //this is an important function that lets you create new users from their credentials and stores there data on firestore
  componentDidMount = async () => {

    try {
      let collection = await firebase.firestore().collection('Products').get();
      let productArray = collection.docs
      let products = []
      for (let productDoc of productArray) {
        console.warn(productDoc.data()['Caption'])
        products.push(productDoc.data())

      }
      
      this.setState({
        products: products
      })

    }

    catch (e) {
      console.warn(String(e))
      console.log(e)

    }
  }
  render() {
    const { products } = this.state
    const productlisting = products.map((value, Index) => {
      return (
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('DetailScreen',
            { pageData: value })
        }}
          key={Index}>
          <Card style={{ padding: 30, paddingLeft: 30, paddingRight: 30,marginTop:10}}
            key={Index}
          >
            <CardItem>
              <Left>
                <Body>
                  <Text style={{ color: 'black', fontSize: 20, textAlign: 'center' }}>{value.Caption}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{ uri: value.URL }} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
          </Card>
        </TouchableOpacity>

      )
    })
    return (
      <View style={{flex:1}}>
       <Container>
        <Header style={{ backgroundColor: 'orange' }}
          androidStatusBarColor="#ff6f00">
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body style={{flex: 1}}>
            <Title>Home</Title>
          </Body>
          <Right style={{flex: 1}} />
        </Header>
        <ScrollView style={{ padding: 10 }}>
          {
            productlisting
          }
        </ScrollView>
      </Container>
      </View>

    );
  }
}
export default Home;





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  }

});
