import Head from "next/head";

const DESCRIPTION =
  "Property-based testing materials from CIS 1200 at the University of Pennsylvania, accompanying \"Property-Based Testing in Intro CS: A Feasibility Study\".";

const Meta = () => {
  return (
    <Head>
      <meta name="theme-color" content="#000" />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:title" content="Property-Based Testing Materials" />
      <meta property="og:description" content={DESCRIPTION} />
    </Head>
  );
};

export default Meta;
