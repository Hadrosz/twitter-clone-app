import bcrypt from "bcryptjs";

export const createPassword = (password: string) => {
  const encrypted = bcrypt.hashSync(password, 8);
  return encrypted;
};

export const getPassword = (hashed: string, password: string) => {
  const isMatch = bcrypt.compare(hashed, password);
  return isMatch;
};
