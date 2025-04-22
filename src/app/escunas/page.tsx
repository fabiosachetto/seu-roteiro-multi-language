import { AlertIcon, ClockIcon, WifiIcon } from "@/components/Icons/Icons";
import infosEscunas from "@/data/infosEscunas.json";
import Image from "next/image";
import Link from "next/link";

export default function Escunas() {
  return (
    <section id="escuna" className="mt-7 p-7 text-center">
      <h2 className="text-4xl uppercase">Escunas</h2>
      {infosEscunas.map((infoEscuna, index) => {
        return (
          <div
            key={infoEscuna.titulo}
            className={`pt-7 ${
              index !== infosEscunas.length - 1
                ? "py-7 border-b border-double border-b-amber-900"
                : ""
            }`}>
            <h3 className="text-2xl mb-5 uppercase font-bold">
              {infoEscuna.titulo}
            </h3>

            {infoEscuna.manutencao && (
              <div className="w-fit m-auto">
                <h4 className="mb-5 uppercase font-bold">
                  <Image
                    src={`/assets/images/${infoEscuna.manutencao}`}
                    alt="Em manutenção"
                    title="Em manutenção"
                    width={25}
                    height={25}
                    className="float-left mr-2 mb-2"
                  />
                  EM MANUTENÇÃO
                </h4>
              </div>
            )}

            <div className="inline-block">
              <Image
                src={`/assets/images/${infoEscuna.imagem}`}
                alt={infoEscuna.alt_title}
                title={infoEscuna.alt_title}
                width={500}
                height={332}
                className="hidden md:block mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
              <Image
                src={`/assets/images/${infoEscuna.imagem}`}
                alt={infoEscuna.alt_title}
                title={infoEscuna.alt_title}
                width={300}
                height={199}
                className="block md:hidden mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
            </div>

            <p className="mb-5">
              <strong>Roteiro:</strong> {infoEscuna.roteiro}
            </p>

            <p className="table mb-5 m-auto">
              <strong>
                <ClockIcon className="w-5 h-5 mr-2 float-left" /> Início:
              </strong>
              {infoEscuna.horario_inicio} | <strong>Retorno: </strong>
              {infoEscuna.horario_retorno}
            </p>

            <p className="mb-5">
              <strong>Serviços:</strong> {infoEscuna.servicos}
            </p>

            {infoEscuna.wifi && (
              <p className="table mb-5 m-auto">
                <strong>
                  <WifiIcon className="w-5 h-5 mr-2 float-left" />
                  {infoEscuna.wifi}
                </strong>
              </p>
            )}

            <p className="table mb-5 m-auto">
              <strong>
                <AlertIcon className="w-6 h-6 mr-2 float-left" />
                {infoEscuna.alerta}
              </strong>
            </p>

            <p className="mb-5">
              <strong>Valor:</strong> {infoEscuna.valor} por pessoa.
            </p>

            {infoEscuna.pascoa && (
              <p className="table mb-5 m-auto">
                <Image
                  src="/assets/images/pascoa.png"
                  alt={infoEscuna.alt_title}
                  title={infoEscuna.alt_title}
                  width={30}
                  height={30}
                  className="float-left mr-2"
                />
                <strong className="mt-1 sm:inline-block">
                  {infoEscuna.pascoa}
                </strong>
              </p>
            )}

            <div className="mt-5">
              <Link
                href={infoEscuna.contato}
                target="_blank"
                className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
                Reserve já!
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
