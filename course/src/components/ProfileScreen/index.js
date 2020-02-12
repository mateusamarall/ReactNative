import React,{Component} from 'react';
import{View, Text,Button} from 'react-native';

 class ProfileScreen extends Component{
   
  render(){
    const name = this.props.navigation.getParam('name', 'anonimo');
    const age = this.props.navigation.getParam('age', 'Não determinado')
    return(
      <View style={{flex:1, justifyContent:'center'}}>
        <View style={{alignItems:'center', paddingBottom:4}}>
        <Text style={{fontSize:50}}>ProfileScreen</Text>
    <Text style={{fontSize:20}}>Nome: {JSON.stringify(name)}</Text>
    <Text style={{fontSize:20}}>Idade: {JSON.stringify(age)}</Text>    
        </View>
        <Button 
        title='Ir para tela detalhes'
        onPress={() => this.props.navigation.navigate('Detail')}
        />
      </View>
    )
  }
}
export default ProfileScreen;