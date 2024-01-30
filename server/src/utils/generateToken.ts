import jwt from "jsonwebtoken";

const generateToken = (id: string, email: string, role: string,username:string) => {
  const token = jwt.sign(
    { id, email, role },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "30d",
    }
  );
  return token;
};

export default generateToken;
