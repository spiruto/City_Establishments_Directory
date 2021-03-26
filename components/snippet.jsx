import Link from "next/link";
const Snippet = ({ nombre, descripcion, slug }) => {
  return (
    <>
      <h3>{nombre}</h3>
      <p className="bg-light p-1 rounded border-dark">{descripcion}</p>
      <Link href={`/establecimiento/${slug}`}>{nombre}</Link>
    </>
  );
};
export default Snippet;