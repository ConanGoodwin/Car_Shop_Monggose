const statusHttp = {
  INVALID: 422,
  NOT_FOUND: 404,
  CREATED: 201,
  OK: 200,
};

export type StatusType = 'INVALID' | 'NOT_FOUND' | 'CREATED' | 'OK';

export default statusHttp;