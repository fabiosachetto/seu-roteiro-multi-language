import { AlertIcon, ClockIcon } from "@/components/Icons/Icons";
import infosJeeps from "@/data/infosJeep.json";
import Image from "next/image";
import Link from "next/link";

export default function Jeep() {
  return (
    <section id="jeep" className="mt-7 p-7 text-white text-center">
      <h2 className="text-4xl uppercase">Jeep</h2>
      {infosJeeps.map((infoJeep, index) => {
        return (
          <div key={infoJeep.titulo} className={`pt-7 ${index !== infosJeeps.length - 1 ? "py-7 border-b border-double border-b-white" : ''}`}>
            <h3 className="text-2xl mb-5 uppercase font-bold">
              {infoJeep.titulo}
            </h3>

            <div className="inline-block">
              <Image
                src={`/assets/images/${infoJeep.imagem}`}
                alt={infoJeep.alt_title}
                title={infoJeep.alt_title}
                width={500}
                height={334}
                className="hidden md:block mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
              <Image
                src={`/assets/images/${infoJeep.imagem}`}
                alt={infoJeep.alt_title}
                title={infoJeep.alt_title}
                width={300}
                height={200}
                className="block md:hidden mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
            </div>

            <p className="mb-5"><strong>Roteiro:</strong> {infoJeep.roteiro}</p>

            {infoJeep.horario_inicio && (
              <p className="table mb-5 m-auto">
                <strong><ClockIcon className="w-5 h-5 mr-2 float-left" /> Início: </strong> {infoJeep.horario_inicio} | <strong>Retorno: </strong> {infoJeep.horario_retorno}
              </p>
            )}

            {infoJeep.alerta && (
              <p className="table mb-5 m-auto">
                <strong className="text-center block"><AlertIcon className="w-6 h-6 mr-2 float-left" /> {infoJeep.alerta}</strong>
              </p>
            )}

            <p className="mb-5">
              <strong>Valor:</strong> {infoJeep.valor} por pessoa.
            </p>

            {infoJeep.alerta_dois && (
              <p className="table mb-5 m-auto">
                <strong className="text-center block"><AlertIcon className="w-6 h-6 mr-2 float-left" /> {infoJeep.alerta_dois}</strong>
              </p>
            )}

            <div className="mt-5">
              <Link href={infoJeep.contato} target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
                Reserve já!
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};