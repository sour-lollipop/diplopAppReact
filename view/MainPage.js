import React from "react";
import { StyleSheet, View, TextInput, FlatList, ImageBackground, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";


const MainScreen = ({ navigation }) => {
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
               
      </View>
    );
  };

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
  // ********************************* 
  const data = [
    { id: 1, name: 'John Doe', image: require('../assets/Kanych_Satpaev.jpg') },
    { id: 2, name: 'Jane Smith', image: require('../assets/Memorial_of_glory.jpg') },
    { id: 3, name: 'Bob Johnson', image: require('../assets/defoult_image.jpg') },
    { id: 4, name: 'John Doe', image: require('../assets/Kanych_Satpaev.jpg') },
    { id: 5, name: 'Jane Smith', image: require('../assets/Memorial_of_glory.jpg') },
    { id: 6, name: 'Bob Johnson', image: require('../assets/defoult_image.jpg') },
  ];

export default MainScreen;

const styles = StyleSheet.create({
   
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