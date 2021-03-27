import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Context from "../components/context";
const app = ({ Component, pageProps }) => {
  const [state, setState] = useState({
    jwt: null,
    isAuthenticated: false,
  });
  const login = (username, password) => {
    if (username !== "" && password !== "") {
        axios
        .post("http://51.222.106.147:1337/auth/local", {
          identifier: username,
          password,
        })
        .then((result) => {
          let handler = { ...state };
          handler.jwt = result.data.jwt;
          handler.isAuthenticated = true;
          localStorage.setItem("jwt", result.data.jwt);
          setState(handler);
        })
        .catch((error) => {
            if (error.response.status===400) {
                alert("Usuario o Contrasena invalidos")
            }
        });
    }
  };
  const logout = () => {
    localStorage.removeItem("jwt");
    let handler = { ...state };
    handler.isAuthenticated = false;
    handler.jwt = null;
    setState(handler);
  };
  useEffect(() => {
    if (localStorage.getItem("jwt") !== (undefined || null)) {
      let handler = { ...state };
      handler.isAuthenticated = true;
      handler.jwt = localStorage.getItem("jwt");
      setState(handler);
    }
  }, []);
  return (
    <Context.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        login: login,
        logout: logout,
        jwt: state.jwt,
      }}
    >
      <Component {...pageProps} />
    </Context.Provider>
  );
};
export default app;
