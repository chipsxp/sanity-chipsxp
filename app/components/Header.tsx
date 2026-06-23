"use client";

import { useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { Flex, Heading, Text, Box, Grid, Link as RadixLink, IconButton, DropdownMenu, Button } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { PAGE_QUERY_RESULT } from "@/sanity.types";

type HeaderData = NonNullable<PAGE_QUERY_RESULT>["header"];
type MenuLink = NonNullable<NonNullable<HeaderData>["menuLinks"]>[number];
type SanityColor = { hex?: string };

export function Header({ data }: { data: HeaderData }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  if (!data) return <></>;

  const maxVisibleLinks = 3;
  const visibleLinks = data.menuLinks?.slice(0, maxVisibleLinks) || [];
  const dropdownLinks = data.menuLinks?.slice(maxVisibleLinks) || [];

  const bgColor = (data.backgroundColor as SanityColor | undefined)?.hex;
  const textColor = (data.textColor as SanityColor | undefined)?.hex;
  const bgImage = data.backgroundImage?.asset ? `url(${urlFor(data.backgroundImage).url()})` : undefined;

  const headerStyle = {
    ...(bgColor ? { backgroundColor: bgColor } : {}),
    ...(bgImage ? { backgroundImage: bgImage, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" } : {}),
  };

  return (
    <Box asChild p="6" mb="8" className="border-b border-gray-200" style={headerStyle}>
      <header>
        <Grid
          columns={{ initial: '1fr auto', sm: 'auto 1fr', md: '20% 30% 50%' }}
          align="center"
          gap="4"
          width="100%"
        >
          {/* Column 1: Logo (Desktop/Tablet Only) */}
          <Box display={{ initial: 'none', sm: 'block' }}>
            {data.logo?.asset && (
              <Image
                src={urlFor(data.logo).width(200).height(200).url()}
                alt={data.logo.alt || data.siteTitle || "Logo"}
                width={120}
                height={120}
                className="object-contain aspect-square"
              />
            )}
          </Box>

          {/* Column 2: Title & Description */}
          <Box minWidth="0">
            <Flex direction="column" gap="1">
              {data.siteTitle && <Heading size="6" className="break-words whitespace-normal" style={textColor ? { color: textColor } : {}}>{data.siteTitle}</Heading>}
              {data.siteDescription && (
                <Text size="4" color="gray" as="p" className="break-words whitespace-normal" style={textColor ? { color: textColor } : {}}>
                  {data.siteDescription}
                </Text>
              )}
            </Flex>
          </Box>

          {/* Column 3: Nav Menu (Desktop/Tablet Only) */}
          {data.menuLinks && data.menuLinks.length > 0 && (
            <Box 
              display={{ initial: 'none', sm: 'block' }} 
              gridColumn={{ sm: '1 / -1', md: 'auto' }}
              mt={{ sm: '4', md: '0' }}
              width="100%"
            >
              <Flex justify="center" gap="5" align="center" wrap="wrap">
                {visibleLinks.map((link: MenuLink, index: number) => (
                <Button asChild key={link._key || index} size="3" color="yellow" variant="solid" radius="full">
                  <Link href={link.url || "#"}>{link.label}</Link>
                </Button>
              ))}

              {dropdownLinks.length > 0 && (
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button size="3" color="yellow" variant="solid" radius="full" style={{ cursor: 'pointer' }}>
                      More
                      <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content style={bgColor ? { backgroundColor: bgColor } : {}}>
                    <Flex direction="column" gap="5" style={{ padding: '4px' }}>
                      {dropdownLinks.map((link: MenuLink, index: number) => (
                        <DropdownMenu.Item
                          key={link._key || index}
                          style={{ padding: 0 }}
                          onSelect={() => { router.push(link.url || "#") }}
                        >
                          <Button asChild size="3" color="yellow" variant="solid" radius="full" style={{ cursor: 'pointer', width: '100%', justifyContent: 'center' }}>
                            <Link href={link.url || "#"}>{link.label}</Link>
                          </Button>
                        </DropdownMenu.Item>
                      ))}
                    </Flex>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              )}
              </Flex>
            </Box>
          )}

          {/* Mobile Menu Toggle */}
          {data.menuLinks && data.menuLinks.length > 0 && (
            <Box display={{ initial: 'block', sm: 'none' }} className="shrink-0">
              <IconButton
                variant="solid"
                size="3"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
                style={{ backgroundColor: 'white', color: 'black' }}
              >
                <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </IconButton>
            </Box>
          )}
        </Grid>

        {/* Mobile Slide-in Menu Drawer */}
        <Box
          className={`fixed inset-0 z-50 transition-all duration-300 sm:hidden ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        >
          {/* Backdrop */}
          <Box
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <Box
            className={`absolute top-0 right-0 bottom-0 w-64 shadow-xl transition-transform duration-300 transform flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            style={{ backgroundColor: bgColor || 'var(--color-background)' }}
          >
            <Flex justify="between" align="center" p="4" className="border-b border-gray-200">
              <Heading size="4">Menu</Heading>
              <IconButton variant="ghost" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </IconButton>
            </Flex>
            <Flex direction="column" p="4" gap="4">
              {data.menuLinks?.map((link: MenuLink, index: number) => (
                <Button asChild key={link._key || index} size="4" color="yellow" variant="solid" radius="full">
                  <Link href={link.url || "#"} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                </Button>
              ))}
            </Flex>
          </Box>
        </Box>
      </header>
    </Box>
  );
}
