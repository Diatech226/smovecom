export type PlatformKey = "facebook" | "deezer" | "spotify" | "youtube" | "tiktok";

export type ArtistLinks = Partial<Record<PlatformKey, string>>;

export type Artist = {
  slug: string;
  name: string;
  tagline: string;
  bio: string;
  heroImage: string;
  heroAlt: string;
  links: ArtistLinks;
};

export const artists: Artist[] = [
  {
    slug: "luna-kaze",
    name: "Luna Kaze",
    tagline: "Électro-cinématique entre lumière et vertige.",
    bio: "Luna Kaze compose des paysages sonores mêlant textures organiques, synthés analogiques et voix suspendues. Son univers visuel s'inspire de la nuit urbaine, des néons et des ciels cosmiques.",
    heroImage:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Luna Kaze sur scène avec une lumière violette immersive",
    links: {
      facebook: "https://www.facebook.com/",
      deezer: "https://www.deezer.com/",
      spotify: "https://open.spotify.com/",
      youtube: "https://www.youtube.com/",
      tiktok: ""
    }
  },
  {
    slug: "nael-river",
    name: "Naël River",
    tagline: "Pop alternative, intime et magnétique.",
    bio: "Naël River explore les émotions brutes avec une pop moderne, des riffs subtils et des refrains émotionnels. Une signature artistique pensée pour la scène comme pour l'image.",
    heroImage:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Naël River en performance live avec guitare",
    links: {
      spotify: "https://open.spotify.com/",
      youtube: "https://www.youtube.com/"
    }
  }
];

export const getArtistBySlug = (slug: string) => artists.find((artist) => artist.slug === slug);
export const featuredArtist = artists[0];
