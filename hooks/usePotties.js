import React, { useState, useEffect } from 'react';
import Constants from 'expo-constants';

const { manifest } = Constants;

// const REACT_APP_API_URL = 'http://localhost:3000';
const REACT_APP_API_URL = `http://${manifest.debuggerHost
  .split(':')
  .shift()}:3000`;

export const usePotties = () => {
  const [potties, setPotties] = useState([]);

  useEffect(() => {
    async function getPotties() {
      const res = await fetch(`${REACT_APP_API_URL}/potty`);
      const returnedPotties = await res.json();
      console.log(returnedPotties);
      setPotties(returnedPotties);
    }
    getPotties();
  }, []);

  return potties;
};
