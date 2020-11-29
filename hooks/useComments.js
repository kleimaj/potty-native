import { useState, useEffect } from 'react';
import Constants from 'expo-constants';

const { manifest } = Constants;

// const REACT_APP_API_URL = 'http://localhost:3000';
const REACT_APP_API_URL = `http://${manifest.debuggerHost
  .split(':')
  .shift()}:3000`;

//   id: number
export const useComments = (id) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    async function getComments(pottyId) {
      const res = await fetch(`${REACT_APP_API_URL}/comment/${pottyId}`);
      const returnedComments = await res.json();
      console.log(returnedComments, 'the returned comments');
      setComments(returnedComments);
    }
    getComments(id);
  }, [id]);

  return comments;
};
