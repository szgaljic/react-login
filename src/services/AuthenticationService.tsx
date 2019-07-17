import {Redirect} from 'react-router';
import {Credentials} from '../models/classes/Credentials';
import {TokenDetails} from '../models/interfaces/TokenDetails';
import {UserDetails} from '../models/interfaces/UserDetails';


export const AuthenticationService = {
  registerUser,
  login,
  getUser,
};

const LOCAL_STORAGE_TOKEN_KEY = 'accessToken';
const ROOT_URL = 'http://localhost:5000/api/';

function saveToken(accessToken: string) {
  localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, accessToken)
}

function getToken(): string | null {
  return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
}

function login(credentials: Credentials) {
  const requestOptions = {
    method: 'GET',
    headers: {Authorization: credentials.basicAuth},
  };

  return fetch(ROOT_URL + 'auth/token', requestOptions).then(res => {
    res.json().then((tokenDetails: TokenDetails) => {
      saveToken(tokenDetails.token)
    });
  });
}

function registerUser(email: string, username: string, password: string) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, username, password})
  };

  return fetch(ROOT_URL + 'registerUser', requestOptions).then(resp => {
    debugger;
  });
}

function loggedInUser(token: string): Promise<UserDetails> {
  const requestOptions = {
    method: 'GET',
    headers: {Authorization: btoa(token + ':')}
  };
  return fetch(ROOT_URL + 'users/me', requestOptions).then(res => {
    return res.json().then((userDetails: UserDetails) => userDetails)
  });
}

function getUser(): Promise<UserDetails> | null {
  const token = getToken();
  if (token) {
    return loggedInUser(token);
  }
  return null;
}
