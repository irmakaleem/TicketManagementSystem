import { jwtDecode } from "jwt-decode";

export const verifyTokenExpiry = (token) => {
  if (token) {
    try {
      // Decode the token
      const decodedToken = jwtDecode(token);

      // Check if the token expiry time is greater than the current time
      const isTokenValid = decodedToken.exp > Date.now() / 1000;
      // Return true if the token is not expired, false otherwise
      return isTokenValid;
    } catch (error) {
      // If there's an error decoding the token, consider it as expired
      return false;
    }
  } else {
    return false;
  }
};
