import { Text, View, Image } from 'react-native';

const ChatListItem = () => {
    return (
        <View>
            <Image source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg'}} 
             style={{width: 50, height: 50}}
            />
        </View>
    )
}

export default ChatListItem;