import Image from "next/image";
import { Artist, PlatformKey } from "@/data/artists";
import { SocialLinkCard } from "@/components/SocialLinkCard";

type ArtistPortfolioProps = {
  artist: Artist;
};

const platforms: PlatformKey[] = ["facebook", "deezer", "spotify", "youtube", "tiktok"];

export function ArtistPortfolio({ artist }: ArtistPortfolioProps) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 sm:px-8 sm:py-14">
      <section className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/8 p-4 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/20">
            <Image
              src={artist.heroImage}
              alt={artist.heroAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080b16]/70 via-transparent to-transparent" />
          </div>

          <div className="space-y-4">
            <p className="inline-flex rounded-full border border-violet-200/30 bg-violet-400/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-violet-100">
              Portfolio artiste
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">{artist.name}</h1>
            <p className="text-base font-medium text-fuchsia-100/90 sm:text-lg">{artist.tagline}</p>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">{artist.bio}</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/15 bg-white/7 p-5 backdrop-blur-xl sm:p-7">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">Retrouver l&apos;artiste</h2>
        <p className="mt-1 text-sm text-white/70">Toutes les plateformes officielles en un seul endroit.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => (
            <SocialLinkCard key={platform} platform={platform} url={artist.links[platform]} />
          ))}
        </div>
      </section>
    </main>
  );
}
