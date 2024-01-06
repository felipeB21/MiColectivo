import Image from "next/image";
import hero from "../../public/heroo.png";
import bsas from "../../public/bsas.png";
import bus from "../../public/bus.png";
import Link from "next/link";

export default function HeroPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-6xl uppercase font-bold">
            Encontra tu{" "}
            <span className="bg-gradient-to-r from-purple-400 to-yellow-400 text-transparent bg-clip-text">
              colectivo
            </span>{" "}
            en tiempo real
          </h1>
        </div>
        <div className="h-auto w-auto">
          <Image
            className="w-auto h-auto"
            src={hero}
            alt="Hero Photo"
            width={2000}
            height={2000}
          />
        </div>
      </div>
      <div className="grid grid-cols-[500px_minmax(600px,_1fr)] gap-3">
        <div className="bg-neutral-700 inline-block p-12 rounded-xl shadow-xl">
          <h2 className="uppercase text-2xl font-bold">
            Seguimiento en vivo de todas las lineas de colectivos
          </h2>
          <Link href="lineas-colectivo">
            <button className="bg-gradient-to-r from-zinc-800 via-zinc-900 to-black border border-neutral-800 px-6 py-2 text-lg rounded-xl mt-6 hover:bg-gradient-to-r hover:from-zinc-900 hover:via-zinc-950 hover:to-black duration-200">
              Ir al seguimiento
            </button>
          </Link>
        </div>
        <div className="flex justify-between items-center bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 rounded-xl shadow-xl p-12 text-2xl uppercase font-bold">
          <div className="flex flex-grow basis-0">
            <div className="text-black">
              <h3>Nombre de la Agencia</h3>
              <h3>Trayectorias</h3>
              <h3>Direccion</h3>
              <h3>Velocidad</h3>
            </div>
          </div>
          <div className="flex flex-grow basis-0 flex-row-reverse w-[500px] h-[90px]">
            <Image
              className="object-fill"
              src={bsas}
              alt="Gobierno de Buenos Aires"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="flex justify-between text-3xl shadow-xl uppercase font-medium col-span-2 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-xl p-12">
          <div>
            <h2>¿No sabes que colectivo tomarte?</h2>
            <span>¡Nosotros te decimos!</span>
            <p className="text-lg mt-12 max-w-[500px]">
              Contamos con mas de +8000 colectivos monitoreados las 24 horas del
              dia.
            </p>
          </div>
          <div className="mr-10">
            <Image src={bus} alt="Colectivo" width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
}
