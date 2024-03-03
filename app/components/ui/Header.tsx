import Nav from "./Nav";

const Header = () => {
  return (
    <header className="w-screen flex flex-col items-center font-inter">
      <h1 className="text-6xl font-bold text-cyan-400">Pet Care Data</h1>
      <div className="w-full">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
