import React from "react";
import { Button, Chip, Snippet, Spacer, Spinner } from "@nextui-org/react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { GithubIcon, StarIcon } from "@/components/icons";
import TextRotate from "@/components/utils/TextRotate";
import SparklesText from "@/components/utils/SparklesText";
import { Mountain } from "lucide-react";
import { useGithub } from "@/lib/github";
import { useI18n, useScopedI18n } from "@/locales";

const landing: React.FC = () => {
  const { data, isLoading, isError } = useGithub();
  const t = useScopedI18n("landing");

  const [showChip] = React.useState(true);
  const installCommand = "npx i sculk";
  const rotatingWords = [
    t('rotatingWords.0'),
    t('rotatingWords.1'),
    t('rotatingWords.2'),
    t('rotatingWords.3'),
    t('rotatingWords.4'),
    t('rotatingWords.5'),
    t('rotatingWords.6'),
    t('rotatingWords.7'),
    t('rotatingWords.8'),
    t('rotatingWords.9'),
    t('rotatingWords.10'),
    t('rotatingWords.11'),
    t('rotatingWords.12'),
    t('rotatingWords.13'),
    t('rotatingWords.14'),
    t('rotatingWords.15'),
    t('rotatingWords.16'),
    t('rotatingWords.17'),
    t('rotatingWords.18'),
    t('rotatingWords.19'),
    t('rotatingWords.20'),
  ];

  return (
    <section className="relative overflow-hidden px-4 text-gray-200 pt-10" id="home">
      <div
        className="z-10 mx-auto max-w-screen-xl gap-8 px-4 sm:px-6 md:px-8 flex flex-col justify-between items-center h-full">
        <div className="mx-auto max-w-4xl text-center">
          {showChip && (
            <Chip variant="dot" color="primary" size="md" radius="sm" className={"text-white"}>
              {t('chipText')}
            </Chip>
          )}
          <div className="text-center">
            <div className="mx-auto mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
              <SparklesText
                className="inline-block mr-3.5 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center pointer-events-none"
                text={t('sparklesText')}
              />
              <span className="mx-2">{t('introText')}</span>
              <TextRotate
                className="inline-flex text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold py-3 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
                words={rotatingWords as string[]}
              />
            </div>
          </div>

          <p className="mx-auto mt-7 max-w-xl text-base sm:text-lg md:text-xl text-white leading-relaxed text-center">
            {t('description')}
          </p>

          <Snippet
            className="mt-4 inline-flex items-center justify-center w-full sm:w-auto h-12 px-3 group rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-content1 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"
            size="md"
            symbol="#"
            copyButtonProps={{ disableRipple: true }}
            tooltipProps={{ content: t('copyTooltip'), className: "text-white" }}
          >
            {installCommand}
          </Snippet>

          <div className="flex flex-col items-center justify-center gap-3 mt-4 sm:flex-row sm:justify-center flex-wrap">
            <Button
              className="inline-flex items-center justify-center w-full sm:w-auto h-12 px-6 group rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2 group bg-cyan-950 hover:opacity-30 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-cyan-900"
              startContent={<Mountain
                className="group-hover:text-stone-900 transition-colors duration-200 ease-in-out" />}
              as={Link}
              href="/#features"
            >
              {t('exploreButton')}
            </Button>
            <Button
              as={Link}
              href={siteConfig.links.github}
              className="inline-flex items-center justify-center w-full sm:w-auto h-12 px-6 rounded-md text-sm font-medium ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-content1 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"
            >
              <GithubIcon />
              <span className="text-white">{t('githubStar')}</span>
              <span
                className="flex items-center ml-2 group-hover:text-yellow-300 transition-colors duration-200 ease-in-out">
            <StarIcon />
            <span className="text-white ml-2">
              {isLoading ? <Spinner size="sm" /> : isError ? t('errorText') : data?.stargazers_count}
            </span>
          </span>
            </Button>
          </div>
        </div>
        <Spacer y={40}/>
      </div>
    </section>
  );
};

export default landing;
