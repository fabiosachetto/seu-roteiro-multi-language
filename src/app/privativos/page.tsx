import infosPrivativos from "@/data/infosPrivativos.json";
import Image from "next/image";
import Link from "next/link";

export default function Privativo() {
  return (
    <section id="privativos" className="mt-7 p-7 text-white text-center">
      <h2 className="text-4xl uppercase">Privativos</h2>
      {infosPrivativos.map((infoPrivativo, index) => {
        return (
          <div
            key={infoPrivativo.titulo}
            className={`pt-7 ${
              index !== infosPrivativos.length - 1
                ? "py-7 border-b border-double border-b-white"
                : ""
            }`}>
            {/* <div className="pb-7"> */}
            <h3 className="text-2xl mb-5 uppercase font-bold">
              {infoPrivativo.titulo}
            </h3>
            <div className="inline-block">
              <Image
                src={`/assets/images/${infoPrivativo.imagem}`}
                alt={infoPrivativo.alt_title}
                title={infoPrivativo.alt_title}
                width={500}
                height={376}
                className="hidden md:block mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
              <Image
                src={`/assets/images/${infoPrivativo.imagem}`}
                alt={infoPrivativo.alt_title}
                title={infoPrivativo.alt_title}
                width={300}
                height={226}
                className="block md:hidden mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
            </div>

            <p className="mb-6">
              <strong>{infoPrivativo.roteiro}</strong>
            </p>

            {infoPrivativo.servicos && (
              <p className="mb-6">
                <strong>Disponibilizamos:</strong> {infoPrivativo.servicos}
              </p>
            )}

            {infoPrivativo.valor && (
              <p>
                <strong>Valores:</strong> À partir de {infoPrivativo.valor}
              </p>
            )}

            <div className="mt-5">
              <Link
                href={infoPrivativo.contato}
                target="_blank"
                className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-6 lg:px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
                Reserve já!
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
