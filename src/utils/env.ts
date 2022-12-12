export function isProduction() {
  return !__DEV__;
}

export const API_URL = process.env.API_URL || 'https://6335724eea0de5318a13ad6d.mockapi.io/api/v1/';
