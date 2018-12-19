const ROUTING = {
  LOGIN: 'login',
  SIGNUP: 'signup',
  HOME: 'home',
  PROFILE: 'profile',
  WORKSHOPS_OFFER: 'workshopsOffer',
  MY_WORKSHOPS: 'myworkshops'
};

const HTTP_STATUS: any = {
  FORBIDDEN: 403,
  ACCEPTED: 202,
  OK: 200,
  InternalServerError: 500,
  NOT_FOUND: 404,
  CONFLICT: 409,
  NO_CONTENT: 204,
  UNAUTHORIZED: 401
};

const ENVIRONMENT = {
  development : 'http://localhost:8080',
  QA: '',
  production: 'https://ep-api.fiestadellibroylacultura.com',
  imageBaseUrl: 'https://ep-multimedia.fiestadellibroylacultura.com/'
};

const MESSAGE: any = {
  LOGIN_INCORRECT: 'Usuario o contraseña incorrectos. ¿Recibiste el email de aceptación?'
};

const LOCAL_STORAGE: any = {
  TOKEN: 'jwttoken'
};

export {
  ROUTING,
  HTTP_STATUS,
  ENVIRONMENT,
  MESSAGE,
  LOCAL_STORAGE
};
