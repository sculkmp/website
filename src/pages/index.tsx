import DefaultLayout from "@/layouts/default";
import LandingHero from "@/components/home/LandingHome";
import Layout from "@/layouts/default";
import { useTranslation } from "react-i18next";

export default function IndexPage() {
  const { t } = useTranslation();
  return (
    <Layout>
      <h1>{t('welcome')}</h1>
      <LandingHero />
    </Layout>
  );
}
