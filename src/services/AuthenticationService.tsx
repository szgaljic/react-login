


export const AuthenticationService = {
  registerUser,
  login
};

function saveToken(accessToken: string) {
  localStorage.setItem('accessToken', accessToken)
}

function login(username: string, password: string) {
  const basicAuth = 'Basic ' + btoa(username + ':' + password);
  const requestOptions = {
    method: 'GET',
    headers: {Authorization: basicAuth},
  };

  return fetch(`http://localhost:5000/api/auth/token`, requestOptions).then(res => {
    // saveToken(res);
    // const test = JSON.parse(res.body.);
    debugger;
  })
}

function registerUser(email: string, username: string, password: string) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, username, password})
  };

  return fetch('http://localhost:5000/api/registerUser', requestOptions).then(resp => {
    debugger;
  })

}
