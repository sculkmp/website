import LandingHero from "@/components/home/LandingHome";
import Layout from "@/layouts/default";
import FeatureHome from "@/components/home/FeatureHome";
import CommunitySection from "@/components/home/CommunityHome";

export default function IndexPage() {
  return (
    <Layout>
      <LandingHero />
      <FeatureHome />
      <CommunitySection />
    </Layout>
  );
}
