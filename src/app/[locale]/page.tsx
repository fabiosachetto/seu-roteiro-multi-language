import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import infosHome from "@/data/infosHome.json";
import Image from "next/image";

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  const escunaInfo = infosHome.find(info => info.titulo_pagina === "Escunas");
  const jeepInfo = infosHome.find(info => info.titulo_pagina === "Jeep");
  const privativosInfo = infosHome.find(info => info.titulo_pagina === "Privativos");

  return (
    // <div className="mt-24">
    //   <h1>{t("title")}</h1>

    //   <div>
    //     <h2>{t("Escunas.title")}</h2>
    //     <Link
    //       href={{ pathname: "/escunas" }}
    //       className="text-red-600 hover:bg-slate-400">
    //       {t("Escunas.title_link")}
    //     </Link>
    //   </div>

    //   <div>
    //     <h2>{t("Jeep.title")}</h2>
    //     <Link
    //       href={{ pathname: "/jeep" }}
    //       className="text-red-600 hover:bg-slate-400">
    //       {t("Jeep.title_link")}
    //     </Link>
    //   </div>

    //   <div>
    //     <h2>{t("Privativos.title")}</h2>
    //     <h3>{t("Privativos.subtitle")}</h3>
    //     <Link
    //       href={{ pathname: "/privativos" }}
    //       className="text-red-600 hover:bg-slate-400">
    //       {t("Privativos.title_link")}
    //     </Link>
    //   </div>
    // </div>

    <div className="text-center">
      <h1>{t("title")}</h1>

      <div>
        <h2>{t("Escunas.title")}</h2>
        <Link
          href={{ pathname: "/escunas" }}
          className="text-red-600 hover:bg-slate-400">
          {t("Escunas.title_link")}
        </Link>
      </div>

      <div>
        <h2>{t("Jeep.title")}</h2>
        <Link
          href={{ pathname: "/jeep" }}
          className="text-red-600 hover:bg-slate-400">
          {t("Jeep.title_link")}
        </Link>
      </div>

      <div>
        <h2>{t("Privativos.title")}</h2>
        <h3>{t("Privativos.subtitle")}</h3>
        <Link
          href={{ pathname: "/privativos" }}
          className="text-red-600 hover:bg-slate-400">
          {t("Privativos.title_link")}
        </Link>
      </div>

      {escunaInfo && (
        <div key={escunaInfo.titulo_pagina}>
          <section id="escuna" className="mt-7 p-7 text-white text-center">
            <h2 className="text-4xl mb-5 uppercase">
              {escunaInfo.titulo_pagina}
            </h2>
            <div className="inline-block">
              <Image
                src={`/assets/images/${escunaInfo.imagem}`}
                alt={escunaInfo.alt_title}
                title={escunaInfo.alt_title}
                width={500}
                height={333}
                className="hidden md:block object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
              <Image
                src={`/assets/images/${escunaInfo.imagem}`}
                alt={escunaInfo.alt_title}
                title={escunaInfo.alt_title}
                width={300}
                height={200}
                className="block md:hidden object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
            </div>

            <div className="mt-4">
              <Link
                href="/escunas"
                className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
                Saiba Mais
              </Link>
            </div>
          </section>
        </div>
      )}

      {jeepInfo && (
        <div key={jeepInfo.titulo_pagina}>
          <section id="jeep" className="mt-7 p-7 text-white text-center">
            <h2 className="text-4xl mb-5 uppercase">
              {jeepInfo.titulo_pagina}
            </h2>
            <div className="inline-block">
              <Image
                src={`/assets/images/${jeepInfo.imagem}`}
                alt={jeepInfo.alt_title}
                title={jeepInfo.alt_title}
                width={500}
                height={333}
                className="hidden md:block object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
              <Image
                src={`/assets/images/${jeepInfo.imagem}`}
                alt={jeepInfo.alt_title}
                title={jeepInfo.alt_title}
                width={300}
                height={200}
                className="block md:hidden object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
            </div>

            <div className="mt-4">
              <Link
                href="/jeep"
                className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
                Saiba Mais
              </Link>
            </div>
          </section>
        </div>
      )}

      {privativosInfo && (
        <div key={privativosInfo.titulo_pagina}>
          <section id="privativos" className="mt-7 p-7 text-white text-center">
            <h2 className="text-4xl mb-5 uppercase">
              {privativosInfo.titulo_pagina}
            </h2>
            <h3 className="text-2xl mb-5 uppercase font-bold">
              {privativosInfo.titulo}
            </h3>
            <div className="inline-block">
              <Image
                src={`/assets/images/${privativosInfo.imagem}`}
                alt={privativosInfo.alt_title}
                title={privativosInfo.alt_title}
                width={500}
                height={333}
                className="hidden md:block object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
              <Image
                src={`/assets/images/${privativosInfo.imagem}`}
                alt={privativosInfo.alt_title}
                title={privativosInfo.alt_title}
                width={300}
                height={200}
                className="block md:hidden object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
            </div>

            <div className="mt-4">
              <Link
                href="/privativos"
                className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
                Saiba Mais
              </Link>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
