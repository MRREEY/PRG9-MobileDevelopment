import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

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
          <TabButton tabName="Home" currentTab={currentTab} changeTab={changeTab} />
          <TabButton tabName="Workouts" currentTab={currentTab} changeTab={changeTab} />
          <TabButton tabName="Progress" currentTab={currentTab} changeTab={changeTab} />
          <TabButton tabName="Settings" currentTab={currentTab} changeTab={changeTab} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

// Component voor het maken van tabknoppen
const TabButton = ({ tabName, currentTab, changeTab }) => {
  return (
    <TouchableOpacity
      style={[styles.tabButton, { backgroundColor: tabName === currentTab ? '#555' : '#333' }]}
      onPress={() => changeTab(tabName)}
    >
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
