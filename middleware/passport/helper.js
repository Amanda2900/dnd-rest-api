import bcrypt from "bcryptjs";

const matchPassword = async (password, hashPassword) => {
  const match = await bcrypt.compare(password, hashPassword);
  return match;
};

export {
  matchPassword
}