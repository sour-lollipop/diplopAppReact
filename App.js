import React from "react";
import { View, StyleSheet, TextInput, FlatList, ImageBackground, Text } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const ScanScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.filtrTitle}>Scann</Text>
    </View>
  );
};


const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.searcLine}>
        <View style={styles.searchContainer}>
              <MaterialCommunityIcons name="magnify" size={20} color="#000" style={styles.searchIcon} />
              <TextInput style={styles.input} />
        </View>
        <Text style={styles.Filtr}>Filter</Text>
      </View>
      <Text style={styles.filtrTitle}>Popular</Text>
      <FlatList
      data={data}
      renderItem={({ item }) => <CardItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity style={styles.scanButton} onPress={() => navigation.navigate('Scan')}>
            <MaterialCommunityIcons
              name="qrcode-scan"
              color="white"
              size={30}
            />
          </TouchableOpacity>
    </View>
  );
};
// ********************************* 
const data = [
  { id: 1, name: 'John Doe', image: require('./assets/Kanych_Satpaev.jpg') },
  { id: 2, name: 'Jane Smith', image: require('./assets/Memorial_of_glory.jpg') },
  { id: 3, name: 'Bob Johnson', image: require('./assets/defoult_image.jpg') },
  { id: 4, name: 'John Doe', image: require('./assets/Kanych_Satpaev.jpg') },
  { id: 5, name: 'Jane Smith', image: require('./assets/Memorial_of_glory.jpg') },
  { id: 6, name: 'Bob Johnson', image: require('./assets/defoult_image.jpg') },
];
// ****************
const CardItem = ({ item }) => (
  <View style={styles.card}>
    <ImageBackground  source={item.image} style={styles.image}>
        <View style={styles.overlay}>
          
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </ImageBackground>
    </View>
  );
const Tab = createBottomTabNavigator();

const App =  () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  
          style={styles.tabBar}
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'main') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'scan') {
            iconName = focused ? 'qrcode-scan' : 'qrcode-scan';
          }
          else if (route.name === 'profile') {
            iconName = focused ? 'account' : 'account';
          }

          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: '',
        tabBarActiveTintColor: '#1573FE',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Stack.Screen name="main" component={SearchScreen} options={{ headerShown: true }} /> 
        <Stack.Screen name="profile" component={SearchScreen} options={{ headerShown: true }} />

      </Stack.Navigator>
      
       
    </NavigationContainer>
  );
};
 


const styles = StyleSheet.create({
  scanButton: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderColor:"#D0E3FF",
    borderStyle: "solid",
    borderWidth: 5,
    backgroundColor: "#1573FE",
    justifyContent: "center",
    alignItems: "center", 
    position: 'absolute',
    top: "90%",
    right: "40%",
  },
  tabBar: {
    borderTopLeftRadius: 20,  
    borderTopRightRadius: 20,  
    elevation: 10,  
  },
  screen: {
    display: "flex",
    paddingHorizontal: 16,
    paddingTop: 24,
    margin: 8,
  },
  searcLine:{
    flexDirection: 'row',
    alignItems: "center",
    marginTop: 24,
  },
  Filtr:{
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 20,

  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    height:'100%',
    width: '80%',
    paddingHorizontal: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
  },
  searchIcon: {
    marginRight: 10,
    color: 'grey',
  },
  filtrTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: 50,
    marginBottom: 10,
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  }, 
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 50,
  }, 
});

export default App;
