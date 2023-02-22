import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext); //custom hook

const API = "http://35.239.251.89/";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  const register = async (username, password) => {
    let formData = new FormData(); //create obj ot classa
    formData.append("username", username); //"username"- key, username-value
    formData.append("password", password);

    try {
      const res = await axios.post(`${API}register/`, formData, config);
      //formData-что отправить, config-сопроводительные доки
      console.log(res);

      setError("");
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError("Error occured!");
    }
  };

  const login = async (username, password) => {
    let formData = new FormData(); //create obj ot classa
    formData.append("username", username); //"username"- key, username-value
    formData.append("password", password);

    try {
      const res = await axios.post(`${API}api/token/`, formData, config);
      //formData-что отправить, config-сопроводительные доки
      console.log(res.data);

      navigate("/");
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", username);
      setUser(username);
      setError("");
    } catch (error) {
      console.lof(error);
      setError("Wrong username or password!");
    }
  };

  return (
    <authContext.Provider
      value={{
        user,
        error,

        register,
        login,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
