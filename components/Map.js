import React, { useState, useRef } from 'react';
import { InfoWindow } from './InfoWindow';
import MapView, { Marker, Callout } from 'react-native-maps';
import { usePotties } from '../hooks';
import { useNavigation } from '@react-navigation/native';
import { TargetButton } from './Buttons';
// import styled from '@emotion/native';

const mapStyles = {
  flex: 2,
  padding: 10,
};
export const Map = ({ location, map, ready, setReady }) => {
  const navigation = useNavigation();

  const [currRegion, setRegion] = useState();
  const potties = usePotties(
    location.coords.latitude,
    location.coords.longitude,
  );
  console.log(potties);
  console.log(typeof potties);

  const recenter = () => {
    console.log(map);
    map.current.animateToRegion({
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
        onMapReady={() => setReady(true)}
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
      <TargetButton onPress={recenter} />
    </>
  );
};
