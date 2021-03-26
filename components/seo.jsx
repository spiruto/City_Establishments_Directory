const SEO = ({ title, type, url, image, description }) => (
  <>
    <title>{title}</title>
    <meta name="title" content="Palmares City - Directorio de la Ciudad" />
    <meta name="description" content={description} />

    <meta property="og:type" content={type} />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />
  </>
);
export default SEO;
