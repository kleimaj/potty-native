import Constants from 'expo-constants';

const { manifest } = Constants;

// const REACT_APP_API_URL = 'http://localhost:3000';
const REACT_APP_API_URL = `http://${manifest.debuggerHost
  .split(':')
  .shift()}:3000`;
export default class UserModel {
  static async create(data) {
    try {
      const res = await fetch(`${REACT_APP_API_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return await res.json();
    } catch (error) {
      console.error(error);
    }

    // UserModel.create(someData).then(data => console.log(data))
  }
  static async login(credentials) {
    const res = await fetch(`${REACT_APP_API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(credentials),
    });
    return await res.json();
  }

  static async logout() {
    const res = await fetch(`${REACT_APP_API_URL}/auth/logout`, {
      method: 'DELETE',
      credentials: 'include',
    });
    return await res.json();
  }
}
