import React,{Component} from 'react';
import{View, Text,Button} from 'react-native';
 class HomeScreen extends Component{
  render(){
    return(
      <View style={{flex:1, justifyContent:'center'}}>
        <View style={{alignItems:'center'}}>
        <Text style={{fontSize:50}}>HomeScreen</Text>
        </View>
        <Button 
        title='Ir para tela perfil'
        onPress={() => this.props.navigation.navigate('Profile',{name: 'Mateus', age:18})}
        />
      </View>
    )
  }
}
export default HomeScreen;