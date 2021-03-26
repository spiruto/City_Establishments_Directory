import FrontLayout from "../../components/layouts/front";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import SEO from "../../components/seo";
const Establecimiento = (props) => {
  const router = useRouter();
  const { establecimiento } = router.query;
  const [state, setState] = useState(null);
  useEffect(async () => {
    if (establecimiento !== undefined) {
      let datos = await (
        await axios.get(
          `http://51.222.106.147:1337/establishments?slug=${establecimiento}`
        )
      ).data[0];
      setState(datos);
    }
  }, [router]);
  return (
    <FrontLayout>
     <Head>
     <SEO title={"Palmares City - Directorio de la Ciudad"} type={"website"} url={""} image={"https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"} description={"Usa el directorio comercial para encontrar los establecimientos en Palmares de una forma mas efectiva."}/>
      </Head>
      <div className="row m-0 p-0">
        {state != null ? (
          <>
            <div className="col-12 p-0">
              <h1>{state.name}</h1>
            </div>
            <div className="col-12  col-md-10 offset-md-1">
              <p className="rounded p-2 shadow-sm border">
                {state.description}
              </p>
            </div>
            <div className="col-12 justify-content-start d-flex rounded p-1">
              <a
                href={state.url}
                className={`mr-1 btn btn-primary btn-sm ${
                  state.url === "" ? "disabled" : null
                }`}
                target="_new"
              >
                Sitio Web
              </a>
              <a
                href={`tel:${state.telephone}`}
                className={`mr-1 btn btn-warning btn-sm ${
                  state.telephone === "" ? "disabled" : null
                }`}
              >
                Telefono
              </a>
              <a
                href={`tel:${state.telephone2}`}
                className={`mr-1 btn btn-warning btn-sm ${
                  state.telephone2 === "" ? "disabled" : null
                }`}
              >
                Telefono 2
              </a>
            </div>
          </>
        ) : null}
      </div>
    </FrontLayout>
  );
};
export default Establecimiento;
