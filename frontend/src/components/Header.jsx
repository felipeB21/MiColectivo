import Link from "next/link";

const links = [
  { name: "Todas las lineas", path: "lineas-colectivo" },
  { name: "Direcciones", path: "direccion-colectivo" },
];

export default function Header() {
  return (
    <header className="border-b border-neutral-700 py-3">
      <div className="xl:w-[1200px] xl:px-0 px-6 mx-auto flex justify-between items-center font-medium">
        <Link className="text-lg" href="/">
          MiColectivo
        </Link>
        <nav>
          <ul className="flex gap-5">
            {links.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>
                  {" "}
                  <p>{link.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
