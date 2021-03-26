import FrontLayout from "../components/layouts/front";
import SEO from "../components/seo";
import Head from "next/head";
const Autenticar = (props) => {
    return (
        <FrontLayout>
            <Head>
     <SEO title={"Palmares City - Directorio de la Ciudad"} type={"website"} url={""} image={"https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"} description={"Usa el directorio comercial para encontrar los establecimientos en Palmares de una forma mas efectiva."}/>
      </Head>
            <h1>Auntenticando</h1>
        </FrontLayout>);
}
export default Autenticar;