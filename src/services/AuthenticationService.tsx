import {Credentials} from '../models/classes/Credentials';
import {RegisterDetails} from '../models/classes/RegisterDetails';
import {TokenDetails} from '../models/interfaces/TokenDetails';
import {UserDetails} from '../models/interfaces/UserDetails';

export const AuthenticationService = {
  registerUser,
  login,
  getUser,
};

const SUCESSFUL_STATUSES = [201, 200];
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
    if (SUCESSFUL_STATUSES.includes(res.status)) {
      res.json().then((tokenDetails: TokenDetails) => {
        saveToken(tokenDetails.token)
      });
    }
  });
}

function registerUser(registrationDetails: RegisterDetails) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(registrationDetails)
  };

  return fetch(ROOT_URL + 'registerUser', requestOptions).then(res => {});
}

function loggedInUser(token: string): Promise<UserDetails | null> {
  const requestOptions = {
    method: 'GET',
    headers: {Authorization: 'Basic ' + btoa(token + ':')}
  };
  return fetch(ROOT_URL + 'users/me', requestOptions).then(res => {
    if (SUCESSFUL_STATUSES.includes(res.status)) {
      return res.json().then((userDetails: UserDetails) => userDetails)
    }
    return Promise.resolve(null)
  });
}

function getUser(): Promise<UserDetails | null> | null {
  const token = getToken();
  if (token) {
    return loggedInUser(token);
  }
  return null;
}
