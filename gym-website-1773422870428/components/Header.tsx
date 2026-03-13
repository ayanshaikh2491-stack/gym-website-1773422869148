import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <Link href="/">
            <a>
              <Image
                src="/logo.png"
                alt="Gym Logo"
                width={50}
                height={50}
              />
            </a>
          </Link>
        </div>
        <nav className="flex items-center">
          <Link href="/about">
            <a className="mr-4">About</a>
          </Link>
          <Link href="/classes">
            <a className="mr-4">Classes</a>
          </Link>
          <Link href="/contact">
            <a className="mr-4">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;