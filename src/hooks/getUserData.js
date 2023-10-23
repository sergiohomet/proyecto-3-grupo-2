import jwtDecode from "jwt-decode";

export const getUserData = () => {
  const token = localStorage.getItem("token");

  if (token) {
    const decode = jwtDecode(token);
    return decode;
  }
};
