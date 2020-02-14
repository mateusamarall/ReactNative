import React,{Component} from 'react';
import{View, Text, Button} from 'react-native';

export default class DetailScreen extends Component{
  render(){
    return(
      <View style={{flex:1, justifyContent:'center'}}>
        <View style={{alignItems:'center'}}>
        <Text style={{fontSize:50}}>DetailScreen</Text>
        </View>
        <Button 
        title='Ir para tela homeScreen'
        onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}
