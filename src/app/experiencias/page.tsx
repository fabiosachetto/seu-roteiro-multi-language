import Image from "next/image";
import Link from "next/link";
import infosExperiencias from "@/data/infosExperiencias.json";

export default function Experiencias() {
  return (
    <section id="expericeias" className="mt-7 p-7 text-center">
      <h2 className="text-4xl uppercase">Experiências</h2>
      {infosExperiencias.map((infoExperiencia, index) => {
        return (
          <div
            key={infoExperiencia.titulo}
            className={`pt-7 ${
              index !== infosExperiencias.length - 1
                ? "py-7 border-b border-double border-b-amber-900"
                : ""
            }`}>
            {infoExperiencia.titulo && (
              <h3 className="text-2xl mb-5 uppercase font-bold">
                {infoExperiencia.titulo}
              </h3>
            )}

            {infoExperiencia.imagem && (
              <div className="inline-block">
                <Image
                  src={`/assets/images/${infoExperiencia.imagem}`}
                  alt={infoExperiencia.alt_title}
                  title={infoExperiencia.alt_title}
                  width={500}
                  height={332}
                  className="hidden md:block mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
                />
                <Image
                  src={`/assets/images/${infoExperiencia.imagem}`}
                  alt={infoExperiencia.alt_title}
                  title={infoExperiencia.alt_title}
                  width={300}
                  height={199}
                  className="block md:hidden mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
                />
              </div>
            )}

            {infoExperiencia.sub_titulo && (
              <h4 className="text-1xl mb-5 uppercase font-bold">
                {infoExperiencia.sub_titulo}
              </h4>
            )}

            {infoExperiencia.roteiro && (
              <p className="mb-5">
                <strong>Roteiro:</strong> {infoExperiencia.roteiro}
              </p>
            )}

            {infoExperiencia.servicos && (
              <p className="mb-5">
                <strong>Serviços:</strong> {infoExperiencia.servicos}
              </p>
            )}

            {infoExperiencia.inicio && (
              <p className="mb-5">
                <strong>Início:</strong> {infoExperiencia.inicio}
              </p>
            )}

            {infoExperiencia.horario && (
              <p className="mb-5">
                <strong>Horário:</strong> {infoExperiencia.horario}
              </p>
            )}

            {infoExperiencia.duracao && (
              <p className="mb-5">
                <strong>Duração:</strong> {infoExperiencia.duracao}
              </p>
            )}

            {infoExperiencia.oferecemos && (
              <p className="mb-5">
                <strong>Oferecemos:</strong> {infoExperiencia.oferecemos}
              </p>
            )}

            {infoExperiencia.valor && (
              <p>
                <strong>Valor:</strong> {infoExperiencia.valor}
              </p>
            )}

            {infoExperiencia.consultar_disponibilidade && (
              <p className="mb-5">
                {infoExperiencia.consultar_disponibilidade}.
              </p>
            )}

            {infoExperiencia.contato && (
              <div className="mt-5">
                <Link
                  href={infoExperiencia.contato}
                  target="_blank"
                  className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
                  Reserve já!
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
