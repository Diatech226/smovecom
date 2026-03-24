import type { CSSProperties } from "react";
import Image from "next/image";
import { Artist, PlatformKey } from "@/data/artists";
import { SocialLinkCard } from "@/components/SocialLinkCard";

type ArtistPortfolioProps = {
  artist: Artist;
};

const platforms: PlatformKey[] = ["facebook", "deezer", "spotify", "youtube", "tiktok"];

export function ArtistPortfolio({ artist }: ArtistPortfolioProps) {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-10 pt-5 sm:px-8 sm:pt-8 lg:gap-10">
      <section className="portfolio-shell relative isolate overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl shadow-black/40">
        <Image
          src={artist.backgroundImage}
          alt={`${artist.name} cover artistique`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/70 to-slate-950/95" />
        <div
          className="absolute -left-20 top-8 h-52 w-52 rounded-full blur-[100px]"
          style={{ backgroundColor: artist.theme.glowColor }}
          aria-hidden
        />

        <div className="relative z-10 grid min-h-[78vh] gap-8 p-5 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:p-12">
          <div className="hero-enter space-y-5 self-end pb-2 lg:space-y-6">
            <span className="inline-flex rounded-full border border-white/35 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-white/85 backdrop-blur-xl">
              Artist Portfolio
            </span>

            <h1 className="max-w-xl text-4xl font-semibold leading-[1.05] text-white sm:text-6xl">{artist.name}</h1>

            <p className="max-w-xl text-lg font-medium text-white/90 sm:text-2xl">{artist.tagline}</p>

            <p className="max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">{artist.bio}</p>
          </div>

          <div className="hero-enter-delay relative grid content-end gap-5 lg:justify-items-end">
            <article className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/30 bg-black/25 p-4 shadow-xl shadow-black/50 backdrop-blur-2xl sm:p-5">
              <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent" />
              <div className="relative flex items-end gap-4">
                <div className="profile-frame relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-white/50 shadow-2xl shadow-black/50 ring-4 ring-white/20 sm:h-36 sm:w-36">
                  <Image
                    src={artist.profileImage}
                    alt={artist.profileAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 120px, 150px"
                  />
                </div>
                <div className="space-y-1 pb-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">Identité artistique</p>
                  <h2 className="text-2xl font-semibold text-white sm:text-3xl">{artist.name}</h2>
                  <p className="text-sm text-white/80">Univers sonore, image forte, signature premium.</p>
                </div>
              </div>
            </article>

            <div className="grid w-full max-w-md grid-cols-1 gap-3 sm:grid-cols-2">
              {platforms.map((platform, index) => (
                <SocialLinkCard
                  key={platform}
                  platform={platform}
                  url={artist.links[platform]}
                  className="card-enter"
                  style={{ animationDelay: `${240 + index * 80}ms` } as CSSProperties}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <article className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
          <h3 className="text-lg font-semibold text-white">Direction artistique</h3>
          <p className="mt-2 text-sm text-white/75">
            Un storytelling visuel centré sur les textures lumineuses, la présence scénique et une ambiance
            cinématique moderne.
          </p>
        </article>
        <article className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
          <h3 className="text-lg font-semibold text-white">Plateformes officielles</h3>
          <p className="mt-2 text-sm text-white/75">
            Chaque carte donne un accès direct aux espaces de diffusion pour écouter, regarder et suivre l&apos;artiste.
          </p>
        </article>
      </section>
    </main>
  );
}
