import React, { Component } from "react";
import { View, Text, Button, Image } from "react-native";
export default class ProfileScreen extends Component {
  render() {
    const name = this.props.navigation.getParam("name", "anonimo");
    const age = this.props.navigation.getParam("age", "Não determinado");
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ margin: 20, alignItems: "center" }}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../../assets/imageprofile.png")}
          />
        </View>
        <View style={{ alignItems: "center", paddingBottom: 4 }}>
          <Text style={{ fontSize: 20 }}>Nome: {JSON.stringify(name)}</Text>
          <Text style={{ fontSize: 20 }}>Idade: {JSON.stringify(age)}</Text>
        </View>
        <Button
          title="Ir para tela detalhes"
          onPress={() => this.props.navigation.navigate("Detail")}
        />
      </View>
    );
  }
}
