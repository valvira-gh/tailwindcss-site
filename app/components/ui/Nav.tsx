import { NavLink } from "@/app/components/ui/NavLink";

const Nav: React.FC = () => {
  return (
    <nav className="w-screen flex justify-center mt-2 mb-2">
      <ul className="flex justify-between items-center">
        <NavLink />
      </ul>
    </nav>
  );
};

export default Nav;
