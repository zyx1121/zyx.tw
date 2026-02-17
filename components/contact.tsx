import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { SiDiscord, SiGithub, SiInstagram } from "react-icons/si";

const CONTACTS = [
  { href: "https://www.instagram.com/__zyx1121__", icon: SiInstagram, label: "Instagram" },
  { href: "https://discord.gg/2xcxmWjY", icon: SiDiscord, label: "Discord" },
  { href: "https://github.com/zyx1121", icon: SiGithub, label: "GitHub" },
  { href: "mailto:yongxiang.zhan@outlook.com", icon: FaEnvelope, label: "Email" },
] as const;

const iconClassName = "h-12 w-12 md:h-14 md:w-14";

export function Contact() {
  return (
    <div className="flex flex-col items-center justify-center w-dvw min-h-dvh py-32 px-8">
      <div className="max-w-6xl w-full mx-auto space-y-16 tracking-wide">
        <h2 className="text-6xl md:text-7xl font-bold">Find me here 🔗</h2>
        <div className="flex flex-wrap gap-10 md:gap-14">
          {CONTACTS.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex flex-col items-center gap-2 text-muted-foreground transition-transform duration-200 ease-out hover:scale-125 hover:rotate-6 hover:text-foreground"
            >
              <Icon className={iconClassName} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}