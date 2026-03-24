import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { PlatformKey } from "@/data/artists";

type SocialLinkCardProps = {
  platform: PlatformKey;
  url?: string;
  className?: string;
  style?: CSSProperties;
};

const platformMeta: Record<
  PlatformKey,
  {
    label: string;
    description: string;
    accent: string;
    iconBg: string;
    icon: ReactNode;
  }
> = {
  facebook: {
    label: "Facebook",
    description: "Actualités, coulisses et annonces live",
    accent: "from-blue-600/60 via-indigo-500/25 to-sky-300/20",
    iconBg: "from-blue-500/70 to-indigo-300/40",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
        <path d="M13.2 20.9v-8h2.7l.4-3.2h-3.1V7.6c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.4v2.4H7.2v3.2h2.7v8h3.3Z" />
      </svg>
    )
  },
  deezer: {
    label: "Deezer",
    description: "Playlists officielles et nouveautés",
    accent: "from-orange-500/65 via-fuchsia-500/25 to-pink-300/20",
    iconBg: "from-orange-400/70 to-fuchsia-400/40",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
        <path d="M3 16h3v5H3zm5-3h3v8H8zm5-3h3v11h-3zm5-3h3v14h-3zM3 11h3v3H3zm5-3h3v3H8zm5-3h3v3h-3z" />
      </svg>
    )
  },
  spotify: {
    label: "Spotify",
    description: "Singles, albums et playlists curatées",
    accent: "from-emerald-500/65 via-teal-500/25 to-emerald-200/20",
    iconBg: "from-emerald-400/70 to-teal-300/40",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 14.4a.8.8 0 0 1-1.1.3c-3.1-1.9-7-2.3-11.8-1.3a.8.8 0 1 1-.3-1.6c5.2-1.1 9.5-.6 12.9 1.5.4.2.5.8.3 1.1Zm1.6-2.8a1 1 0 0 1-1.4.3c-3.5-2.2-8.8-2.9-12.9-1.7a1 1 0 0 1-.6-1.9c4.7-1.4 10.5-.6 14.6 1.9.4.3.6.9.3 1.4Zm.1-3c-4.2-2.5-11.1-2.8-15.1-1.6a1.2 1.2 0 0 1-.7-2.3c4.6-1.4 12.2-1.1 17 1.8a1.2 1.2 0 0 1-1.2 2.1Z" />
      </svg>
    )
  },
  youtube: {
    label: "YouTube",
    description: "Clips, sessions live et visualizers",
    accent: "from-rose-600/70 via-red-500/25 to-rose-300/20",
    iconBg: "from-rose-500/70 to-red-300/40",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
        <path d="M21.6 7.5a2.7 2.7 0 0 0-1.9-1.9C18 5.1 12 5.1 12 5.1s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9A28.7 28.7 0 0 0 2 12a28.7 28.7 0 0 0 .4 4.5 2.7 2.7 0 0 0 1.9 1.9c1.8.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28.7 28.7 0 0 0 22 12a28.7 28.7 0 0 0-.4-4.5ZM10 15.3V8.7l5.7 3.3L10 15.3Z" />
      </svg>
    )
  },
  tiktok: {
    label: "TikTok",
    description: "Extraits créatifs et tendances",
    accent: "from-cyan-500/65 via-violet-500/30 to-pink-400/25",
    iconBg: "from-cyan-400/70 to-pink-400/50",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
        <path d="M15.6 4c.2 1.6 1.1 3.1 2.5 3.9.9.5 1.9.8 2.9.8v3a8.5 8.5 0 0 1-2.8-.5v4.5A6.7 6.7 0 1 1 11.5 9a6.8 6.8 0 0 1 1.3.1v3.2a3.5 3.5 0 1 0 2.8 3.4V4h3Z" />
      </svg>
    )
  }
};

export function SocialLinkCard({ platform, url, className, style }: SocialLinkCardProps) {
  const meta = platformMeta[platform];
  const isActive = Boolean(url && url.trim().length > 0);

  const classes = `group relative overflow-hidden rounded-2xl border border-white/25 bg-white/10 px-4 py-4 backdrop-blur-2xl transition-all duration-500 ${
    isActive
      ? "will-change-transform hover:-translate-y-1.5 hover:border-white/50 hover:bg-white/15"
      : "cursor-not-allowed opacity-70"
  } ${className ?? ""}`;

  const content = (
    <>
      <div
        className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${meta.accent} opacity-45 transition-opacity duration-500 group-hover:opacity-80`}
      />
      <div className="pointer-events-none absolute -right-12 -top-14 h-32 w-32 rounded-full bg-white/15 blur-3xl transition duration-500 group-hover:scale-125" />
      <div className="flex items-center gap-3">
        <div
          className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${meta.iconBg} text-white shadow-lg shadow-black/30 ring-1 ring-white/25`}
        >
          {meta.icon}
        </div>
        <div className="min-w-0">
          <p className="truncate text-base font-semibold text-white">{meta.label}</p>
          <p className="truncate text-xs text-white/75">
            {isActive ? meta.description : "Lien en préparation"}
          </p>
        </div>
      </div>
    </>
  );

  if (!isActive) {
    return (
      <div className={classes} style={style} aria-disabled>
        {content}
      </div>
    );
  }

  return (
    <Link
      href={url as string}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      style={style}
      aria-label={`Ouvrir ${meta.label} dans un nouvel onglet`}
    >
      {content}
    </Link>
  );
}
