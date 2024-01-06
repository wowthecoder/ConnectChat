import { FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import ContactListItem from '../components/ContactListItem';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../graphql/queries';

const ContactsScreens = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.graphql(graphqlOperation(listUsers)).then((response) => {
      setUsers(response.data?.listUsers?.items);
    })
  });

  return (
    <FlatList 
      data={users}
      renderItem={({item}) => <ContactListItem user={item} />}
      style={{ backgroundColor: 'white' }}
    />
  );
};

export default ContactsScreens