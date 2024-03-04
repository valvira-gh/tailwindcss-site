import Nav from "./Nav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-screen flex">
      {" "}
      <div className="flex flex-col items-center w-screen">
        <div
          className="flex flex-col  justify-center items-center border-b
         border-cyan-400 p-2"
        >
          {" "}
          <Image
            src="/pawn-logo.svg"
            alt="Graphic pawn of a dog or cat"
            width={75}
            height={75}
          />
          <h1 className="text-6xl font-bold text-sky-400 w-full">
            Pet Care Data
          </h1>{" "}
        </div>
        <div className="w-full">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
