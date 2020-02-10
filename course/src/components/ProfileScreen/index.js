import React,{Component} from 'react';
import{View, Text,Button} from 'react-native';

 class ProfileScreen extends Component{
  render(){
    return(
      <View style={{flex:1, justifyContent:'center'}}>
        <View style={{alignItems:'center'}}>
        <Text style={{fontSize:50}}>ProfileScreen</Text>
        
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