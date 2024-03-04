import Link from "next/link";

const Nav: React.FC = () => {
    const links: { label: string; href: string }[] = [
      { label: "Home", href: "/" },
      { label: "Pets", href: "/pets" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Info", href: "/info" },
    ];

    return (
      <nav className="w-screen flex justify-center mt-2 mb-2">
        <ul className="flex justify-between items-center">
          {links.map((link) => (
            <li key={link.href} className="mx-4">
              <Link
                className="text-2xl p-0.5 text-sky-300 hover:border-b hover:border-sky-200"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
};

export default Nav;
