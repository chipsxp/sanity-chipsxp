import { urlFor } from "@/sanity/lib/image";
import { Flex, Text, Box, Grid, Link as RadixLink, Button } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";
import type { PAGE_QUERY_RESULT } from "@/sanity.types";

type FooterData = NonNullable<PAGE_QUERY_RESULT>["footer"];
type FooterLink = NonNullable<NonNullable<FooterData>["footerLinks"]>[number];
type FooterLogo = NonNullable<NonNullable<FooterData>["logos"]>[number];
type SanityColor = { hex?: string };

export function Footer({ data }: { data: FooterData }) {
  if (!data) return <></>;

  const bgColor = (data.backgroundColor as SanityColor | undefined)?.hex;
  const textColor = (data.textColor as SanityColor | undefined)?.hex;

  const footerStyle = {
    ...(bgColor ? { backgroundColor: bgColor } : {}),
  };

  const rawCopyright = data.copyright || `© ${new Date().getFullYear()} All rights reserved.`;
  const copyrightText = rawCopyright.replace(/&#169;/gi, '©').replace(/&copy;/gi, '©');

  return (
    <Box asChild p="6" mt="9" className="border-t border-gray-200" style={footerStyle}>
      <footer>
        <Grid columns={{ initial: '1fr', md: 'repeat(3, 1fr)' }} gap="6" align="start">
          
          {/* Column 1: Links & Copyright */}
          <Flex direction="column" gap="4" align={{ initial: 'center', md: 'start' }}>
        
            {data.footerLinks && data.footerLinks.length > 0 && (
              <nav>
                <Flex direction={{ initial: 'column', sm: 'row' }} gap="4" wrap="wrap" justify={{ initial: 'center', md: 'start' }} align="center">
                  {data.footerLinks.map((link: FooterLink, index: number) => (
                    <Button asChild key={link._key || index} size="3" color="yellow" variant="solid" radius="full">
                      <Link href={link.url || "#"}>
                        {link.label}
                      </Link>
                    </Button>
                  ))}
                </Flex>
              </nav>
            )}

            <Text size="2" color="gray" style={textColor ? { color: textColor } : {}}>
              {copyrightText}
            </Text>
          </Flex>

          {/* Column 2: Custom Block 1 (Placeholder) */}
          <Flex direction="column" gap="4" align={{ initial: 'center', md: 'start' }}>
            <Text size="3" weight="bold" style={textColor ? { color: textColor } : {}}>About</Text>
            <Text size="2" color="gray" style={textColor ? { color: textColor } : {}}>
              Custom block content will be placed here in the future.
            </Text>
          </Flex>

          {/* Column 3: Custom Block 2 & Image/Logos */}
          <Flex direction="column" gap="4" align={{ initial: 'center', md: 'start' }}>
            <Text size="3" weight="bold" style={textColor ? { color: textColor } : {}}>Contact / Media</Text>
            
            {data.logos && data.logos.length > 0 && (
              <Flex direction="column" gap="4" justify={{ initial: 'center', md: 'start' }} align={{ initial: 'center', md: 'start' }} width="100%">
                {data.logos.map((logo: FooterLogo, index: number) => (
                  logo.asset && (
                    <Box key={logo._key || index} className="w-full max-w-[300px] aspect-video relative overflow-hidden rounded-md shadow-sm">
                      {logo.link ? (
                        <Link href={logo.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                          <Image
                            src={urlFor(logo).url()}
                            alt={logo.alt || "Footer Logo"}
                            fill
                            sizes="(max-width: 300px) 100vw, 300px"
                            className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                          />
                        </Link>
                      ) : (
                        <Image
                          src={urlFor(logo).url()}
                          alt={logo.alt || "Footer Logo"}
                          fill
                          sizes="(max-width: 300px) 100vw, 300px"
                          className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                        />
                      )}
                    </Box>
                  )
                ))}
              </Flex>
            )}
          </Flex>

        </Grid>
      </footer>
    </Box>
  );
}
