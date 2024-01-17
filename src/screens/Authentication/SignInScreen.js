import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../../../assets/images/Red_Angry_bird.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { Auth } from 'aws-amplify'
import {useNavigation} from '@react-navigation/native';
import { useState } from 'react';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('Home');
  }

  const onSignUpPressed = () => {
    navigation.navigate('Sign Up');
  }

  const onForgotPasswordPressed = () => {
    navigation.navigate('Forgot Password');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}> 
      <View style={styles.root}>
        <Image 
          source={Logo} 
          style={[styles.logo, {height: height * 0.3}]} 
          dresizeMode="contain" />
        
        <CustomInput placeholder="Username" value={username} setValue={setUsername} />

        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
        
        <CustomButton text="Sign In" onPress={onSignInPressed} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 250,
    maxHeight: 250,
    marginBottom: 20,
  },
});

export default SignInScreen