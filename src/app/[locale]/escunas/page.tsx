import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { AlertIcon, ClockIcon, WifiIcon } from "@/components/Icons/Icons";
import escunasPage from "@/messages/pt.json";
import Image from "next/image";

export default async function EscunasPage() {
  const t = await getTranslations("EscunasPage");
  return (
    // <div>
    //   <h1>{t("title")}</h1>
    //   <Link href={{ pathname: "/" }}>{t("link")}</Link>
    // </div>

    <section id="escuna" className="mt-7 p-7 text-center">
      <h2 className="text-4xl uppercase">{t("title")}</h2>

      {Object.values(escunasPage).map((escunasPage, index) => {
        return (
          <div
            key={escunasPage.title}
            className={`pt-7 ${
              index !== escunasPage.length - 1
                ? "py-7 border-b border-double border-b-amber-900"
                : ""
            }`}>
            <h3 className="text-2xl mb-5 uppercase font-bold">
              {/* {infoEscuna.titulo} */}
              {t("titulo")}
            </h3>

            {EscunasPage.manutencao && (
              <div className="w-fit m-auto">
                <h4 className="mb-5 uppercase font-bold">
                  <Image
                    src={`/assets/images/${EscunasPage.manutencao}`}
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
                src={`/assets/images/${EscunasPage.imagem}`}
                alt={EscunasPage.alt_title}
                title={EscunasPage.alt_title}
                width={500}
                height={332}
                className="hidden md:block mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
              <Image
                src={`/assets/images/${EscunasPage.imagem}`}
                alt={EscunasPage.alt_title}
                title={EscunasPage.alt_title}
                width={300}
                height={199}
                className="block md:hidden mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
            </div>

            <p className="mb-5">
              <strong>Roteiro:</strong> {EscunasPage.roteiro}
            </p>

            <p className="table mb-5 m-auto">
              <strong>
                <ClockIcon className="w-5 h-5 mr-2 float-left" /> Início:
              </strong>
              {EscunasPage.horario_inicio} | <strong>Retorno: </strong>
              {EscunasPage.horario_retorno}
            </p>

            <p className="mb-5">
              <strong>Serviços:</strong> {EscunasPage.servicos}
            </p>

            {EscunasPage.wifi && (
              <p className="table mb-5 m-auto">
                <strong>
                  <WifiIcon className="w-5 h-5 mr-2 float-left" />
                  {EscunasPage.wifi}
                </strong>
              </p>
            )}

            <p className="table mb-5 m-auto">
              <strong>
                <AlertIcon className="w-6 h-6 mr-2 float-left" />
                {EscunasPage.alerta}
              </strong>
            </p>

            <p className="mb-5">
              <strong>Valor:</strong> {EscunasPage.valor} por pessoa.
            </p>

            <div className="mt-5">
              <Link
                href={{ pathname: "/" }}
                // href={infoEscuna.contato}
                target="_blank"
                className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500"></Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
