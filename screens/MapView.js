import React, { useState, useEffect, useContext, useRef } from 'react';
import { UserContext } from '../hooks';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { PrimaryButton, Map } from '../components';
import styled from '@emotion/native';
import { Container } from '../utils';
import { ActivityIndicator } from 'react-native';

const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: palevioletred;
`;

export const MapView = ({ route, navigation }) => {
  const [currentUser] = useContext(UserContext);
  const map = useRef();

  const [ready, setReady] = useState(false);
  const [location, setLocation] = useState(false);

  const getLocation = async () => {
    try {
      const userLocation = await Location.getCurrentPositionAsync();
      setLocation(userLocation);
    } catch (error) {
      console.error(error);
    }
  };
  const queryLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      console.log('PERMISSION NOT GRANTED!');
    }
    const userLocation = await Location.getCurrentPositionAsync();
    console.log(userLocation);
    /*
    Object {
    "coords": Object {
      "accuracy": 10,
      "altitude": 375.0130920410156,
      "altitudeAccuracy": 12,
      "heading": 170.15625,
      "latitude": 69.2313234324,
      "longitude": -100.3213908242,
      "speed": 2.3499999046325684,
    },
    "timestamp": 1606344066879.889,
    }
  */
    setLocation(userLocation);
  };

  useEffect(() => {
    getLocation();
  }, []);
  return (
    <>
      {/* {currentUser && currentUser.name ? currentUser.name : 'Map!'} */}

      {location ? (
        // <Title>Location available</Title>
        <>
          {ready ? (
            <></>
          ) : (
            <Container>
              <ActivityIndicator size="large" color="#000" />
            </Container>
          )}

          <Map
            location={location}
            map={map}
            ready={ready}
            setReady={setReady}
          />
        </>
      ) : (
        <Container>
          <Title>Location must be enabled to find Potties!</Title>
          <PrimaryButton onPress={() => queryLocation()}>
            Enable my location
          </PrimaryButton>
        </Container>
      )}
    </>
  );
};
