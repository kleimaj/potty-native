import React, { useState, useEffect } from 'react';
import { InfoWindow } from './InfoWindow';
import MapView, { Callout } from 'react-native-maps';
import { usePotties } from '../hooks';
import { useNavigation } from '@react-navigation/native';
import { TargetButton, PrimaryButton } from './Buttons';
// import styled from '@emotion/native';

const mapStyles = {
  flex: 2,
  padding: 10,
};
export const Map = ({ location, map, ready, setReady }) => {
  const navigation = useNavigation();
  const [markers, setMarkers] = useState([]);
  const [currRegion, setRegion] = useState();
  const potties = usePotties(
    location.coords.latitude,
    location.coords.longitude,
  );

  useEffect(() => {
    if (potties.length) {
      setMarkers(
        potties.map((marker, idx) => (
          <MapView.Marker
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
          </MapView.Marker>
        )),
      );
    }
  }, [potties, navigation]);

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
        {
          markers
          // potties.map((marker, idx) => (
          //   <Marker
          //     key={idx}
          //     coordinate={{
          //       latitude: parseFloat(marker.latitude),
          //       longitude: parseFloat(marker.longitude),
          //     }}
          //     // title={marker.name}
          //     // description={`Rating: ${marker.rating}`}
          //     onCalloutPress={() => navigation.navigate('Potty', marker)}
          //   >
          //     <Callout tooltip>
          //       <InfoWindow
          //         name={marker.name}
          //         address={marker.address}
          //         rating={marker.rating}
          //       />
          //     </Callout>
          //   </Marker>
          // ))
        }
      </MapView>
      <TargetButton onPress={recenter} />
      <PrimaryButton
        onPress={() => {
          if (potties.length) {
            map.current.animateToRegion({
              latitude: potties[0].latitude,
              longitude: potties[0].longitude,
              latitudeDelta: 0.015 * 0.5,
              longitudeDelta: 0.0121 * 0.5,
            });
          } else {
            console.log('no potties in the area');
          }
        }}
      >
        Emergency
      </PrimaryButton>
    </>
  );
};
