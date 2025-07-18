export const LoginStart = () => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginError = () => ({
  type: "LOGIN_ERROR",
});

export const Logout = () => ({
  type: "LOGOUT",
});

export const UpdateSuccess = (user) => ({
  type: "UPDATE_SUCCESS",
  payload: user,
});