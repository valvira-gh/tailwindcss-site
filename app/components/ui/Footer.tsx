import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-screen flex flex-col items-center mb-0 border-t border-cyan-600 bg-cyan-900 pt-2">
      <div className="flex items-center">
        <Link href="https://github.com/valvira-gh/tailwindcss-site">
          <Image src="/gh_icon.png" alt="GitHub logo" width={50} height={50} />
        </Link>
      </div>
      <div className="all-rights-reserver mt-2 flex flex-col items-center ">
        <p className="text-slate-300">Pet Care Data &copy; 2024</p>
        <p className="text-slate-300">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
