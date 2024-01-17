import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation';
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { useEffect } from 'react';
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';
import SignInScreen from './src/screens/Authentication/SignInScreen';

Amplify.configure(awsconfig);

function App() {
  // useEffect(() => {
  //   const syncUser = async () => {
  //     // get Auth user 
  //     const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });

  //     // query the database using Auth user id (sub id)
  //     const userData = await API.graphql(
  //       graphqlOperation(getUser, { id: authUser.attributes.sub })
  //     );

  //     // if user not in database, create user in database
  //     if (!userData.data.getUser) {
  //       const newUser = {
  //         id: authUser.attributes.sub,
  //         name: authUser.attributes.phone_number,
  //         status: 'Hey, I am using ConnectChat',
  //       };
  
  //       await API.graphql(
  //         graphqlOperation(createUser, { input: newUser })
  //       );
  //     }
  //   };

  //   syncUser();
  // }, []);
   
  return (
    <View style={styles.container}>
      <Navigator />
      {/* <SignInScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    // temporary fix
    // paddingVertical: 50,
  },
});

export default App;