import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function PrivativosPage() {
  const t = await getTranslations("PrivativosPage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href={{ pathname: "/" }}>{t("link")}</Link>
    </div>
  );
}
