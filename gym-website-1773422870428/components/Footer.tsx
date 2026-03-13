import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <p>&copy; {new Date().getFullYear()} Gym Website</p>
        </div>
        <div>
          <Link href="/privacy-policy">
            <a>Privacy Policy</a>
          </Link>
          <Link href="/terms-and-conditions">
            <a>Terms and Conditions</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;