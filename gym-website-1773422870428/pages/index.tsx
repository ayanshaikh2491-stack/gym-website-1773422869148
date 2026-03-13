import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Gym Website</title>
        <meta name="description" content="Gym Website" />
        <meta name="keywords" content="gym, fitness" />
      </Head>
      <h1>Welcome to our Gym Website</h1>
      <Image
        src="/hero-image.jpg"
        alt="Hero Image"
        width={800}
        height={400}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
        nulla auctor, vestibulum magna sed, convallis ex.
      </p>
    </div>
  );
};

export default Home;