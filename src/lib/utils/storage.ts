export const getToken = (): string | null => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  }
  return null;
};

export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const isTokenExpired = (token: string) => {
  const payload = JSON.parse(atob(token.split(".")[1])) as { exp: number };
  const expirationTime = payload.exp * 1000;
  return Date.now() > expirationTime;
};
