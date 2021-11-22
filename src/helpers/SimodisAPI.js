import {myToken} from './AuthHandler';

export const signin = async (email, password) => {
  const req = await fetch('https://backend-simodis.herokuapp.com/user/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const json = await req.json();
  return json;
};

export const signup = async (name, email, password) => {
  const req = await fetch('https://backend-simodis.herokuapp.com/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });

  const json = await req.json();
  return json;
};

export const listcourse = async () => {
  const req = await fetch('https://backend-simodis.herokuapp.com/course/list');
  const json = await req.json();

  return json.coursers;
};

export const infoUser = async () => {
  const token = await myToken();
  const req = await fetch(
    'https://backend-simodis.herokuapp.com/user/info?token=' + `${token}`,
  );

  const json = await req.json();
  return json;
};

export const myCourse = async () => {
  const token = await myToken();
  const req = await fetch(
    'https://backend-simodis.herokuapp.com/course/mycourse?token=' + `${token}`,
  );

  const json = await req.json();
  return json.mycourse;
};
