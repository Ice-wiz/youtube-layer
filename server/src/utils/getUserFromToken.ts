import jwt, { JwtPayload } from "jsonwebtoken";

interface TokenPayload extends JwtPayload {
  id: string;
  username: string;
  role: string;
  email: string;
}

const getTokenFromLocalStorage = (): string | null => {
  return localStorage.getItem("token");
};

const getUserFromToken = (): null | TokenPayload => {
  const token = getTokenFromLocalStorage();

  if (token) {
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as TokenPayload;
      return decodedToken;
    } catch (error) {
      // Handle token verification errors (e.g., expired or invalid token)
      console.error("Error decoding token:", error);
    }
  }

  return null;
};

export default getUserFromToken;
