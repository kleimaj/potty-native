import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Constants from 'expo-constants';

const { manifest } = Constants;

// const REACT_APP_API_URL = 'http://localhost:3000';
const REACT_APP_API_URL = `http://${manifest.debuggerHost
  .split(':')
  .shift()}:3000`;

//   id: number
export const useComments = (id) => {
  const [comments, setComments] = useState([]);
  const addComment = async (data) => {
    if (!data.body || !data.title) {
      // Alert
      Alert.alert(
        'Cannot Add Comment',
        'Please include Title and Body content.',
      );
    }
    try {
      const res = await fetch(`${REACT_APP_API_URL}/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const newComment = await res.json();
      setComments((currComments) => [...currComments, newComment]);
    } catch (error) {
      console.log('something happened');
      console.error(error);
    }
  };
  useEffect(() => {
    async function getComments(pottyId) {
      const res = await fetch(`${REACT_APP_API_URL}/comment/${pottyId}`);
      const returnedComments = await res.json();
      setComments(returnedComments);
    }
    getComments(id);
  }, [id]);

  return { comments, addComment };
};
