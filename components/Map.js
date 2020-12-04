import React, { useState, useEffect, useRef } from 'react';
import { InfoWindow } from './InfoWindow';
import MapView, { Callout } from 'react-native-maps';
import { usePotties } from '../hooks';
import { useNavigation } from '@react-navigation/native';
import {
  TargetButton,
  AddButton,
  CancelButton,
  PrimaryButton,
} from './Buttons';
import { AddPottyModal } from './Modals';
// import styled from '@emotion/native';

const mapStyles = {
  flex: 2,
  padding: 10,
};
export const Map = ({ location, map, ready, setReady }) => {
  const navigation = useNavigation();
  const markerRef = useRef([]);
  const [markers, setMarkers] = useState([]);
  const [tempMarkers, setTempMarkers] = useState([]);
  const [toggleAdd, setToggleAdd] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [, setRegion] = useState();
  const potties = usePotties(
    location.coords.latitude,
    location.coords.longitude,
  );

  // For adding markers
  const mapPress = (event) => {
    const { nativeEvent } = event;
    if (
      // it's not a marker
      !nativeEvent.hasOwnProperty('action') &&
      // there are coordinates (it's a map click)
      nativeEvent.coordinate &&
      // toggleAdd state is on
      toggleAdd
    ) {
      setTempMarkers((currMarkers) => [
        ...currMarkers,
        <MapView.Marker
          key={tempMarkers.length}
          pinColor={'#f9d117'}
          draggable
          coordinate={{
            latitude: nativeEvent.coordinate.latitude,
            longitude: nativeEvent.coordinate.longitude,
          }}
        />,
      ]);
      setShowModal(true);
    }
  };

  useEffect(() => {
    if (potties.length) {
      setMarkers(
        potties.map((marker, idx) => (
          <MapView.Marker
            key={idx}
            ref={(ref) => markerRef.current.push(ref)}
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
        // removes user callout
        userLocationAnnotationTitle={null}
        onPress={mapPress}
        onMapReady={() => setReady(true)}
        onRegionChangeComplete={(region) => setRegion(region)}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.015 * 5,
          longitudeDelta: 0.0121 * 5,
        }}
      >
        {markers}
        {tempMarkers}
      </MapView>
      <AddPottyModal showModal={showModal} setShowModal={setShowModal} />
      <TargetButton onPress={recenter} />
      {toggleAdd ? (
        <CancelButton
          onPress={() => {
            setTempMarkers();
            setToggleAdd(!toggleAdd);
          }}
        />
      ) : (
        <AddButton onPress={() => setToggleAdd(!toggleAdd)} />
      )}
      <PrimaryButton
        onPress={() => {
          if (potties.length) {
            map.current.animateToRegion({
              latitude: potties[0].latitude,
              longitude: potties[0].longitude,
              latitudeDelta: 0.015 * 0.5,
              longitudeDelta: 0.0121 * 0.5,
            });

            markerRef.current[0].showCallout();
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
