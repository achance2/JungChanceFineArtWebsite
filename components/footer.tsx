import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-8">
      <div className="flex items-center justify-center gap-6">
        <IconLink href="https://www.facebook.com/jungchanceart/">
          <Image
            src="/logos/facebook.svg"
            alt="Facebook"
            width={26}
            height={26}
          />
        </IconLink>

        <IconLink href="https://www.instagram.com/jungchance/">
          <Image
            src="/logos/instagram.svg"
            alt="Instagram"
            width={26}
            height={26}
          />
        </IconLink>

        <IconLink href="https://www.pinterest.com/jungchance/">
          <Image
            src="/logos/pinterest.svg"
            alt="Pinterest"
            width={26}
            height={26}
          />
        </IconLink>
      </div>
    </footer>
  );
}

function IconLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="block opacity-60 hover:opacity-75"
    >
      {children}
    </Link>
  );
}