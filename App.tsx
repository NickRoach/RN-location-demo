import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { LocationAccuracy, LocationObject } from "expo-location";
import React, { useState } from "react";

export default function App() {
  const [status, requestPermission] = Location.useForegroundPermissions();
  const [location, setLocation] = useState<LocationObject>();

  requestPermission();

  const handleGetLocation = async () => {
    console.log(status);
    const newLocation = await Location.getCurrentPositionAsync({
      accuracy: LocationAccuracy.High,
    });
    setLocation(newLocation);
  };
  return (
    <View style={styles.container}>
      <Button title="Get location" onPress={handleGetLocation} />
      <View style={styles.latLong}>
        <Text>Latitude: {location?.coords.latitude}</Text>
        <Text>Longitude: {location?.coords.longitude}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  latLong: {
    marginTop: 30,
  },
});
