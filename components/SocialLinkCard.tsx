import type { ReactNode } from "react";
import Link from "next/link";
import { PlatformKey } from "@/data/artists";

type SocialLinkCardProps = {
  platform: PlatformKey;
  url?: string;
};

const platformMeta: Record<
  PlatformKey,
  { label: string; accent: string; icon: ReactNode }
> = {
  facebook: {
    label: "Facebook",
    accent: "from-blue-600/50 to-blue-300/20",
    icon: <span aria-hidden>ⓕ</span>
  },
  deezer: {
    label: "Deezer",
    accent: "from-orange-500/55 to-fuchsia-500/20",
    icon: <span aria-hidden>◫</span>
  },
  spotify: {
    label: "Spotify",
    accent: "from-emerald-500/55 to-emerald-200/15",
    icon: <span aria-hidden>♫</span>
  },
  youtube: {
    label: "YouTube",
    accent: "from-rose-600/55 to-rose-300/20",
    icon: <span aria-hidden>▶</span>
  },
  tiktok: {
    label: "TikTok",
    accent: "from-cyan-500/55 to-pink-500/20",
    icon: <span aria-hidden>♪</span>
  }
};

export function SocialLinkCard({ platform, url }: SocialLinkCardProps) {
  const meta = platformMeta[platform];
  const isActive = Boolean(url && url.trim().length > 0);

  const classes = `group relative overflow-hidden rounded-2xl border border-white/20 bg-white/7 p-5 backdrop-blur-xl transition duration-300 ${
    isActive ? "hover:-translate-y-1 hover:border-white/40" : "cursor-not-allowed opacity-55"
  }`;

  const content = (
    <>
      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-br ${meta.accent} opacity-45 transition group-hover:opacity-70`}
      />
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/15 text-xl ring-1 ring-white/20">
          {meta.icon}
        </div>
        <div className="flex flex-col">
          <span className="text-base font-semibold text-white">{meta.label}</span>
          <span className="text-xs text-white/70">
            {isActive ? "Accéder à la plateforme" : "Bientôt disponible"}
          </span>
        </div>
      </div>
    </>
  );

  if (!isActive) {
    return (
      <div className={classes} aria-disabled>
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
      aria-label={`Ouvrir ${meta.label} dans un nouvel onglet`}
    >
      {content}
    </Link>
  );
}
