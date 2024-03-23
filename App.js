import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

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
        <ScrollView horizontal={true}>
          <TabButton tabName="Home" iconName="home" currentTab={currentTab} changeTab={changeTab} />
          <TabButton tabName="Workouts" iconName="barbell" currentTab={currentTab} changeTab={changeTab} />
          <TabButton tabName="Progress" iconName="stats-chart" currentTab={currentTab} changeTab={changeTab} />
          <TabButton tabName="Settings" iconName="settings" currentTab={currentTab} changeTab={changeTab} />
        </ScrollView>
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
    paddingVertical: 20, 
    backgroundColor: '#222',
  },
  tabButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  tabButtonText: {
    color: '#fff',
  },
});
