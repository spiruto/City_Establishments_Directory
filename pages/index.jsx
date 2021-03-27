import FrontLayout from "../components/layouts/front";
import Link from "next/link";
import axios from "axios";
import Head from "next/head";
import SEO from "../components/seo";
const Inicio = ({ establecimientos, categorias }) => {
  return (
    <FrontLayout>
      <Head>
        <SEO
          title="Palmares City - Directorio de la Ciudad"
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
      <div className="row mt-4 mb-5 justify-content-around">
        <div className="col-12 mb-4 text-center">
          <h1>Establecimientos</h1>
        </div>
        <div className="col-12 p-0">
          <div className="row m-0">
            <div className="col-12 col-md-8 offset-md-2">
              <div className="row">
                {categorias.map((categoria, key) => (
                  <div key={key} className="col-12 col-md-4 p-2">
                    <div className="card">
                      <div className="card-header justify-content-between d-flex">
                        <Link
                          passHref={true}
                          href={`/categoria/${categoria.slug}`}
                          className="card-link"
                        >
                          <a>{categoria.name}</a>
                        </Link>
                      </div>
                      <div className="card-body">
                        <div className="card-text">
                          ({categoria.description})
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <h1>Ultimos Establecimientos Agregados</h1>
          <div className="col-12 col-md-10 offset-md-1">
            <p>
              {establecimientos.map((establecimiento, key) => (
                <Link
                  key={key}
                  passHref={true}
                  href={`establecimiento/${establecimiento.slug}`}
                ><>
                  <a>{establecimiento.name}</a>
                  {key !== establecimientos.length - 1 ? <>, &nbsp;</> : null}</>
                </Link>
              ))}
              .
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <h1>Registra tu Establecimiento</h1>
          <small>(Solo Palmares, Alajuela)</small>
        </div>
      </div>
    </FrontLayout>
  );
};
export const getStaticProps = async (context) => {
  let categorias = await (
    await axios.get("http://51.222.106.147:1337/categories?_sort=name:asc")
  ).data;
  let establecimientos = await (
    await axios.get(
      "http://51.222.106.147:1337/establishments?_sort=published_at:desc&_limit=3"
    )
  ).data;
  return {
    props: {
      establecimientos,
      categorias,
    },
  };
};
export default Inicio;
