import React from 'react';
import { useDiscord } from "@/lib/discord";
import { Image } from "@nextui-org/image";
import { Button, Chip } from "@nextui-org/react";
import { BadgeCheck, Handshake } from "lucide-react";
import Link from "next/link";
import { BorderBeam } from "@/components/utils/Border";
import { siteConfig } from "@/config/site";
import { useScopedI18n } from "@/locales";

const CommunitySection = () => {
  const { data: stats } = useDiscord();
  const t = useScopedI18n('community');

  return (
    <section id="community" className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-4">
      {/* Left Section */}
      <div className="p-4 min-h-[250px] md:min-h-[350px] flex items-center justify-center font-bold text-[#333] relative">
        <div className="relative w-full h-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          <Image
            src="/discord.png"
            alt="Discord Community"
            className="object-cover relative z-10 rounded-xl w-full h-full"
          />
          <BorderBeam
            className="absolute inset-0 z-20 hidden md:block"
            size={300} // Ajustez la taille pour qu'elle soit proportionnelle à l'image
            borderWidth={2} // Ajustez la largeur de la bordure pour les petits écrans
            duration={10} // Durée de l'animation
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="mx-auto flex flex-col items-center space-y-5 text-center justify-center p-4">
        <Chip
          startContent={<BadgeCheck />}
          variant="faded"
          radius="sm"
          color="primary"
          className="font-bold"
        >
          {t('joinChip')}
        </Chip>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-800 to-cyan-950 bg-clip-text">
            {t('title')}
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-white">
          {t('description')}
        </p>
        <div className="flex items-center space-x-2">
          <Button
            className="inline-flex items-center justify-center w-full sm:w-auto h-12 px-6 group rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2 group bg-cyan-950 hover:opacity-30 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-cyan-900"
            as={Link}
            startContent={<Handshake />}
            href={siteConfig.links.discord}
          >
            {t('button')} ({stats?.approximate_member_count} members)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;