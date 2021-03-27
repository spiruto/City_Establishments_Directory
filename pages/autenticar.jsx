import FrontLayout from "../components/layouts/front";
import SEO from "../components/seo";
import Head from "next/head";
import Context from "../components/context";
import Link from "next/link";
import {useRouter} from "next/router";
import { useState } from "react";
const Autenticar = (props) => {
  const router = useRouter();
  const [state, setState] = useState({ username: "", password: "" });
  
  return (
    <Context.Consumer>{value=>
      value.isAuthenticated?"Autenticado":
    <FrontLayout>
      <Head>
        <SEO
          title={"Palmares City - Directorio de la Ciudad"}
          type={"website"}
          url={""}
          image={
            "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
          }
          description={
            "Usa el directorio comercial para encontrar los establecimientos en Palmares de una forma mas efectiva."
          }
        />
      </Head>
      <div className="row">
        <div className="col-10 offset-1 col-md-8 offset-md-2">
          <div className="d-flex justify-content-center mt-auto">
            <form>
              <div className="form-group">
                <label htmlFor="username">Usuario</label>
                <input
                  onChange={(event) => {
                    let handler = { ...state };
                    handler.username = event.currentTarget.value;
                    setState(handler);
                  }}
                  id="username"
                  type="text"
                  name="username"
                  className="form-control"
                />
                <small id="usernameHelp" className="form-text text-muted">
                  Nunca compartiremos tus datos con nadie.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Contrasena</label>
                <input
                  onChange={(event) => {
                    let handler = { ...state };
                    handler.password = event.currentTarget.value;
                    setState(handler);
                  }}
                  id="password"
                  type="password"
                  name="password"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <p className="text-right">
                  <Link href="/restablecer-contrasena" passHref={true}>
                    <a>Olvide mi contrasena</a>
                  </Link>
                </p>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={()=>{value.login(state.username,state.password)}}
                    className="btn btn-sm btn-outline-dark"
                  >
                    Autenticar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </FrontLayout>
    }</Context.Consumer>
  );
};
export default Autenticar;
