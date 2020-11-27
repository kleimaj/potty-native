import React from 'react';
import MapView from 'react-native-maps';
import { usePotties } from '../hooks';
// import styled from '@emotion/native';

// how to calculate delta values:
// https://stackoverflow.com/questions/50882700/react-native-mapview-what-is-latitudedelta-longitudedelta
// const { width, height } = Dimensions.get('window');
// const ASPECT_RATIO = width / height;

// getRegionForCoordinates
// https://github.com/react-native-maps/react-native-maps/issues/505#issuecomment-243423775
function regionFrom(lat, lon, distance) {
  distance = distance / 2;
  const circumference = 40075;
  const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
  const angularDistance = distance / circumference;

  const latitudeDelta = distance / oneDegreeOfLatitudeInMeters;
  const longitudeDelta = Math.abs(
    Math.atan2(
      Math.sin(angularDistance) * Math.cos(lat),
      Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat),
    ),
  );

  return {
    latitude: lat,
    longitude: lon,
    latitudeDelta,
    longitudeDelta,
  };
}

const mapStyles = {
  flex: 2,
  padding: 10,
};

export const Map = ({ location }) => {
  const [potties] = usePotties();
  console.log(potties);
  return (
    <MapView
      style={mapStyles}
      showsUserLocation
      initialRegion={regionFrom(
        location.coords.latitude,
        location.coords.longitude,
        location.coords.accuracy,
      )}
    />
  );
};
