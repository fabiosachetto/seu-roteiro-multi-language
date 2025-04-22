import infosHome from "@/data/infosHome.json";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const escunaInfo = infosHome.find((info) => info.titulo_pagina === "Escunas");
  const jeepInfo = infosHome.find((info) => info.titulo_pagina === "Jeep");
  const privativosInfo = infosHome.find(
    (info) => info.titulo_pagina === "Privativos"
  );
  const experienciaInfo = infosHome.find(
    (info) => info.titulo_pagina === "Experiências"
  );

  return (
    <div className="text-center">
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

      {experienciaInfo && (
        <div key={experienciaInfo.titulo_pagina}>
          <section id="escuna" className="mt-7 p-7 text-white text-center">
            <h2 className="text-4xl mb-5 uppercase">
              {experienciaInfo.titulo_pagina}
            </h2>
            <h3 className="text-2xl mb-5 uppercase font-bold">
              {experienciaInfo.titulo}
            </h3>
            <div className="inline-block">
              <Image
                src={`/assets/images/${experienciaInfo.imagem}`}
                alt={experienciaInfo.alt_title}
                title={experienciaInfo.alt_title}
                width={500}
                height={333}
                className="hidden md:block object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
              <Image
                src={`/assets/images/${experienciaInfo.imagem}`}
                alt={experienciaInfo.alt_title}
                title={experienciaInfo.alt_title}
                width={300}
                height={200}
                className="block md:hidden object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
            </div>

            <div className="mt-4">
              <Link
                href="/experiencias"
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
