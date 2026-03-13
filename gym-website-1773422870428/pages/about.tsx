import Head from 'next/head';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>About Us</title>
        <meta name="description" content="About Us" />
        <meta name="keywords" content="about, us" />
      </Head>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
        nulla auctor, vestibulum magna sed, convallis ex.
      </p>
    </div>
  );
};

export default About;