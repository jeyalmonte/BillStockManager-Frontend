const env: {
  API_BASE_URL: string;
  APP_ENV: string;
} = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL as string,
  APP_ENV: import.meta.env.VITE_APP_ENV as string,
};

export default env;
