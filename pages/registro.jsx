import FrontLayout from "../components/layouts/front";
import SEO from "../components/seo";
import Head from "next/head";
const Registro = (props)=>{
    return(
        <FrontLayout>
            <Head>
     <SEO title={"Palmares City - Directorio de la Ciudad"} type={"website"} url={""} image={"https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"} description={"Usa el directorio comercial para encontrar los establecimientos en Palmares de una forma mas efectiva."}/>
      </Head>
            <a>Registro</a>
        </FrontLayout>
    );
}
export default Registro;