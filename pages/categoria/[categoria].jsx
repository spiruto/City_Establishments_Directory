import FrontLayout from "../../components/layouts/front";
import Snippet from "../../components/snippet";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import SEO from "../../components/seo";
const Categoria = (props) => {
  const router = useRouter();
  const { categoria } = router.query;
  const [state, setState] = useState({ establecimientos: [] });
  useEffect(async () => {
    if (categoria !== undefined) {
      let { id } = await (
        await axios.get(
          `http://51.222.106.147:1337/categories?slug=${categoria}`
        )
      ).data[0];
      let datos = await (
        await axios.get(
          `http://51.222.106.147:1337/establishments?category=${id}`
        )
      ).data;
      setState({ establecimientos: datos });
    }
  }, [router]);
  return (
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
      {state.establecimientos.length && categoria !== undefined > 0 ? (
        <div className="row mt-5">
          <div className="col-12 col-md-8">
            <div className="row">
              {state.establecimientos.map((e, key) => (
                <div
                  key={key}
                  className="col-12 offset-md-2 col-md-8 border shadow-sm mb-2 p-2 rounded"
                >
                  <Snippet
                    nombre={e.name}
                    descripcion={e.description}
                    slug={e.slug}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="row">
              <div className="col-12">
                <h1>Categoria: {state.name}</h1>
                <p>
                  {state.description}
                  <br />
                  Actualmente posee [] registros.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </FrontLayout>
  );
};
export default Categoria;
