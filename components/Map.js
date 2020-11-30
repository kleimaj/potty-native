import React, { useState, useRef } from 'react';
import { css } from '@emotion/native';
import { InfoWindow } from './InfoWindow';
import MapView, { Marker, Callout } from 'react-native-maps';
import { usePotties } from '../hooks';
import { useNavigation } from '@react-navigation/native';
import { TargetButton } from './Buttons';
// import styled from '@emotion/native';

// how to calculate delta values:
// https://stackoverflow.com/questions/50882700/react-native-mapview-what-is-latitudedelta-longitudedelta
// const { width, height } = Dimensions.get('window');
// const ASPECT_RATIO = width / height;

// getRegionForCoordinates
// https://github.com/react-native-maps/react-native-maps/issues/505#issuecomment-243423775
// function regionFrom(lat, lon, distance) {
//   distance = distance / 2;
//   const circumference = 40075;
//   const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
//   const angularDistance = distance / circumference;

//   const latitudeDelta = distance / oneDegreeOfLatitudeInMeters;
//   const longitudeDelta = Math.abs(
//     Math.atan2(
//       Math.sin(angularDistance) * Math.cos(lat),
//       Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat),
//     ),
//   );

//   return {
//     latitude: lat,
//     longitude: lon,
//     latitudeDelta,
//     longitudeDelta,
//   };
// }

const mapStyles = {
  flex: 2,
  padding: 10,
};

export const Map = ({ location }) => {
  const navigation = useNavigation();
  const map = useRef();

  const [currRegion, setRegion] = useState();
  const potties = usePotties();
  console.log(potties);
  console.log(typeof potties);

  const recenter = () => {
    map.animateToRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.015 * 5,
      longitudeDelta: 0.0121 * 5,
    });
  };
  return (
    <>
      <MapView
        style={mapStyles}
        ref={map}
        showsUserLocation
        onRegionChangeComplete={(region) => setRegion(region)}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.015 * 5,
          longitudeDelta: 0.0121 * 5,
        }}
      >
        {potties &&
          potties.map((marker, idx) => (
            <Marker
              key={idx}
              coordinate={{
                latitude: parseFloat(marker.latitude),
                longitude: parseFloat(marker.longitude),
              }}
              // title={marker.name}
              // description={`Rating: ${marker.rating}`}
              onCalloutPress={() => navigation.navigate('Potty', marker)}
            >
              <Callout tooltip>
                <InfoWindow
                  name={marker.name}
                  address={marker.address}
                  rating={marker.rating}
                />
              </Callout>
            </Marker>
          ))}
      </MapView>
      <TargetButton
        style={css`
          position: absolute;
        `}
        onPress={recenter}
      />
    </>
  );
};
