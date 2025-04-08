import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function JeepsPage() {
  const t = await getTranslations("JeepPage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href={{ pathname: "/" }}>{t("link")}</Link>
    </div>
  );
}
