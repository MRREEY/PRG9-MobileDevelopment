import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

//More info at https://github.com/react-native-async-storage/async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//https://oblador.github.io/react-native-vector-icons/
import {Ionicons} from '@expo/vector-icons'; //Iconen voor de tabs

export default function App() {
  // Stel de huidige tab in
  const [currentTab, setCurrentTab] = useState('Home');

  // Functie om de huidige tab te wijzigen
  const changeTab = (tabName) => {
    setCurrentTab(tabName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Hier komt de inhoud van de huidige tab */}
        <Text style={styles.contentText}>Inhoud van de {currentTab} tab</Text>
      </View>
      <View style={styles.tabsContainer}>
        <TabButton tabName="Home" iconName="home" currentTab={currentTab} changeTab={changeTab} />
        <TabButton tabName="Workouts" iconName="barbell" currentTab={currentTab} changeTab={changeTab} />
        <TabButton tabName="Progress" iconName="stats-chart" currentTab={currentTab} changeTab={changeTab} />
        <TabButton tabName="Settings" iconName="settings" currentTab={currentTab} changeTab={changeTab} />
      </View>
    </SafeAreaView>
  );
}

// Component voor het maken van tabknoppen
const TabButton = ({ tabName, currentTab, changeTab, iconName }) => {
  return (
    <TouchableOpacity
      style={[styles.tabButton, { backgroundColor: tabName === currentTab ? '#555' : '#333' }]}
      onPress={() => changeTab(tabName)}
    >
      <Ionicons name={iconName} size={20} color="#fff"/>

      <Text style={styles.tabButtonText}>{tabName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    color: '#fff',
    fontSize: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#000',
    height: 50,
  },
  tabButton: {
    flex: 1,
    alignItems: "center", //Pictogram en tekst midden
    justifyContent: "center",
    borderRadius: 5,
    marginHorizontal: 5,
    height: 60,
  },
  tabButtonText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
});
