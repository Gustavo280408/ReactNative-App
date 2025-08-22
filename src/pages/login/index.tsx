import React, {useState } from "react";
 
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from "react-native";
 
import { style } from "./styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons } from '@expo/vector-icons'
import { themas } from "../../global/themes";
 
export default function Login() {
  const [email, setEmail] = useState('');
  const [passowrd ,setPassowrd] = useState('');
  const [loading, setLoading] = useState (false);
  async function  getLogin() {
    try{
      setLoading(true)
      if(!email || !passowrd) {
        return Alert.alert('Atenção!', 'informe os campos obrigatórios')
      }
      setTimeout(() => {
        if (email == 'Matheus@gmail.com' && passowrd == '12345678'){
          Alert.alert('Logado com sucesso!');
        } else {
          Alert.alert('Usuário não encontrado!');
        }
        setLoading(false)
      }, 3000)
    }catch (error) {
      console.log(error);
    }
  }
   
  
  return (
    <View style={style.container}>
        <View style={style.boxTop}>
     
      <Image
   source={Logo}
   style={style.logo}
   resizeMode="contain"
      />
      <Text style={style.text}>Bem vindo de volta</Text>
        </View>
        <View style={style.boxMid}>
          <Text style={style.titleInput}>Endereço de e-mail</Text>
          <View style={style.boxInput}>
          <TextInput
          style={style.input}
          value= {email}
          onChangeText={setEmail}
          />
          <MaterialIcons
          name = "email"
          size={20}
          color={themas.colors.gray}/>
          </View>
          <Text style={style.titleInput}>Senha</Text>
          <View style={style.boxInput}></View>
          <TextInput
          style={style.input}
          value={passowrd}
          onChangeText={setPassowrd}
          />
          <MaterialIcons
          name="remove-red-eye"
          size={20}
          color={themas.colors.gray}
           />
        </View>
        <View style={style.boxBotton}>
 
          <TouchableOpacity style={style.button} onPress={() => getLogin()}>
    {
       loading ? <ActivityIndicator color={'#ffff'} size={"small"} /> : <Text style={style.textButton}>Entrar</Text>
    }
          </TouchableOpacity>
         
          </View>
          <Text style={style.textBotton}>não tem conta? <Text style={{color: themas.colors.primary}}>crie agora!</Text></Text>
    </View>
  );
}