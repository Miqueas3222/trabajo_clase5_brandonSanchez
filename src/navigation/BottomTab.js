import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import RegisterUserScreen from '../screens/RegisterUserScreen';
import EditUserScreen from '../screens/EditUserScreen';
import DeleteUserScreen from '../screens/DeleteUserScreen';
import ListUsersScreen from '../screens/ListUsersScreen';

const Tab = createBottomTabNavigator();

export default function BottomTab({ logueado, setLogueado }) {
  const renderHomeScreen = props => (
    <HomeScreen {...props} setLogueado={setLogueado} logueado={logueado} />
  );

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={renderHomeScreen}
        options={{
          title: 'Inicio',
          tabBarActiveTintColor: '#FFC300',
          headerStyle: {
            backgroundColor: '#FFC300',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="RegisterUserScreen"
        component={RegisterUserScreen}
        options={{
          title: 'Register User',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-add" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="EditUserScreen"
        component={EditUserScreen}
        options={{
          title: 'Edit User',
          tabBarIcon: ({ color }) => (
            <Ionicons name="create" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="DeleteUserScreen"
        component={DeleteUserScreen}
        options={{
          title: 'Delete User',
          tabBarIcon: ({ color }) => (
            <Ionicons name="trash" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="ListUsersScreen"
        component={ListUsersScreen}
        options={{
          title: 'List Users',
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
