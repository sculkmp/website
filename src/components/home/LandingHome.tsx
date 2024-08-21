import React from "react";
import {Button, Chip, Snippet, Spacer} from "@nextui-org/react";
import Link from "next/link";
import {siteConfig} from "@/config/site";
import {GithubIcon, StarIcon} from "@/components/icons";
import TextRotate from "@/components/utils/TextRotate";
import SparklesText from "@/components/utils/SparklesText";
import { Mountain } from "lucide-react";

const LandingHero: React.FC = () => {
  const [showChip] = React.useState(true);
  const [chipText] = React.useState("Sculk is in work in progress");
  const installCommand = "npx i sculk";
  const rotatingWords = [
    "Sculk",
    "Ultimate Server",
    "Next-Gen Performance",
    "Gaming Revolution",
    "Top-Tier Solution",
    "Advanced Plugins",
    "Seamless Integration",
    "Customizable Features",
    "Enhanced Stability",
    "Effortless Setup",
    "Lag-Free Experience",
    "Innovative Tools",
    "Ultimate Flexibility",
  ];

  return (
    <section className="relative overflow-hidden px-4 text-gray-200" id="home">
      <div
        className="z-10 mx-auto max-w-screen-xl gap-8 px-4 sm:px-6 md:px-8 flex flex-col justify-between items-center h-full">
        <div className="mx-auto max-w-4xl text-center">
          {showChip && (
            <Chip
              variant="dot"
              color={"primary"}
              size="md"
              radius="sm"
            >
              {chipText}
            </Chip>
          )}
          <div className="text-center">
            <div className="mx-auto mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
              <SparklesText
                className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center pointer-events-none"
                text="Power up"/>
              <span className="mx-2">your Minecraft server with</span>
              <TextRotate
                className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold py-3 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
                words={rotatingWords}
              />
            </div>
          </div>

          <p className="mx-auto mt-7 max-w-xl text-base sm:text-lg md:text-xl text-white leading-relaxed text-center">
            Discover the power of Sculk for Minecraft Bedrock Edition. Enhance your server's performance and flexibility, and bring a new level of excitement to your gameplay.
          </p>

          <Snippet
            className="mt-4 text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-content1 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"
            size="md"
            symbol={"#"}
            copyButtonProps={{
              disableRipple: true,
            }}
            tooltipProps={{
              content: "Copy to create your server",
            }}
          >
            {installCommand}
          </Snippet>
          <div
            className="flex flex-col items-center justify-center gap-3 mt-4 sm:flex-row sm:justify-center flex-wrap">
            <Button
              className="inline-flex items-center justify-center w-full sm:w-auto h-12 px-6 group rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2 group bg-cyan-950 hover:opacity-30 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-cyan-900"
              startContent={<Mountain />}
              as={Link}
              href="/#features"
            >
              Exploring darkness
            </Button>
            <Button
              as={Link}
              href={siteConfig.links.github}
              className="inline-flex items-center justify-center w-full sm:w-auto h-12 px-6 group rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-content1 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"
            >
              <GithubIcon/>
              <span className="text-white">Star on Github</span>
              <span
                className="flex items-center ml-4 group-hover:text-yellow-500 transition-colors duration-200 ease-in-out">
                                <StarIcon/>
                                <span className="text-white ml-2">
                                    0
                                </span>
                            </span>
            </Button>
          </div>
        </div>
        <Spacer y={12}/>
      </div>
    </section>
  );
};

export default LandingHero;