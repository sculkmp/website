import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import {
  GithubIcon,
  DiscordIcon,
  Logo,
} from "@/components/icons";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import React from "react";
import { useChangeLocale, useCurrentLocale, useI18n, useScopedI18n } from "@/locales";

export const Navbar = () => {
  const [selectedKeys, setSelectedKeys] = React.useState<Set<string>>(new Set([useCurrentLocale()]));
  const t = useScopedI18n("navbar");
  const selectedValue = React.useMemo(() => {
    const localeMap: { [key: string]: string } = {
      en: "English",
      fr: "French",
    };
    return localeMap[Array.from(selectedKeys)[0]] || "English";
  }, [selectedKeys]);

  const changeLocale = useChangeLocale()

  return (
    <NextUINavbar maxWidth="2xl" position="sticky" className="top-0">
      <NavbarContent className="flex-grow" justify="start">
        <NavbarBrand className="gap-3 max-w-fit pr-2">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit text-white">Sculk</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-2 flex-grow justify-center">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            {item.redirect ? (
              <Button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"
                variant="light"
                href={item.href}
                as={Link}
                showAnchorIcon
                target="_blank"
              >
                {t(item.label as "downloads" | "teams" | "contribute")}
              </Button>
            ) : (
              <NextLink href={item.href}>
                <Button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"
                  variant="light"
                >
                  {t(item.label as "downloads" | "teams" | "contribute")}
                </Button>
              </NextLink>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="flex-grow" justify={"end"}>
        <NavbarItem className="flex gap-4">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="capitalize text-white whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"
              >
                {selectedValue}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              className={"text-white"}
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys as any}
              onSelectionChange={(keys) => setSelectedKeys(keys as Set<string>)}
            >
              <DropdownItem key="en" onClick={() => changeLocale('en')}>English</DropdownItem>
              <DropdownItem key="fr" onClick={() => changeLocale('fr')}>Français</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button
            as={Link}
            href={siteConfig.links.discord}
            isIconOnly
            className="inline-flex bg-transparent items-center justify-center text-white whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"
          >
						<span
              className="flex items-center group-hover:text-blue-500 transition-colors duration-200 ease-in-out">
							<DiscordIcon />
						</span>
          </Button>
          <Button
            as={Link}
            href={siteConfig.links.github}
            isIconOnly
            className="inline-flex bg-transparent items-center justify-center text-white whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"
          >
						<span
              className="flex items-center group-hover:text-neutral-500 transition-colors duration-200 ease-in-out">
							<GithubIcon />
						</span>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle className="lg:hidden" />

      <NavbarMenu className="lg:hidden">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem className="space-x-8">
            <Link isExternal href={siteConfig.links.discord}>
              <DiscordIcon />
            </Link>
            <Link isExternal href={siteConfig.links.github}>
              <GithubIcon />
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
