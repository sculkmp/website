import React from "react";
import { CodeIcon, CommunityIcon } from "@/components/icons";
import { Card } from "@/components/utils/Card";
import { useScopedI18n } from "@/locales";
import { AppWindow, BookMarked, Braces, ChevronsUp, Earth, Rocket, Wrench } from "lucide-react";

const FeatureHome: React.FC = () => {
  const t = useScopedI18n('features');

  const features = [
    {
      Icon: ChevronsUp,
      title: t('0.title'),
      description: t('0.description')
    },
    {
      Icon: AppWindow,
      title: t('1.title'),
      description: t('1.description')
    },
    {
      Icon: Earth,
      title: t('2.title'),
      description: t('2.description')
    },
    {
      Icon: CodeIcon,
      title: t('3.title'),
      description: t('3.description')
    },
    {
      Icon: Braces,
      title: t('4.title'),
      description: t('4.description')
    },
    {
      Icon: BookMarked,
      title: t('5.title'),
      description: t('5.description')
    },
    {
      Icon: Rocket,
      title: t('6.title'),
      description: t('6.description')
    },
    {
      Icon: CommunityIcon,
      title: t('7.title'),
      description: t('7.description')
    },
    {
      Icon: Wrench,
      title: t('8.title'),
      description: t('8.description')
    }
  ];

  return (
    <section id="features" className="relative w-full min-h-screen bg-foreground">
      {/* Content wrapper */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 md:px-8 py-16">
        <div className="text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-800 to-cyan-950 bg-clip-text">
            {t('heading')}
          </h2>
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="mt-12">
          <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <Card key={idx} className="rounded-lg border border-content2 bg-foreground p-6 hover:bg-content2 hover:text-white transition-colors duration-300 ease-in-out">
                <div className="pb-3 text-primary">
                  <item.Icon className="w-12 h-12" />
                </div>
                <h4 className="text-lg font-semibold text-primary">
                  {item.title}
                </h4>
                <p className="text-white">{item.description}</p>
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureHome;