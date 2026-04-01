export const platformOrder = [
  "spotify",
  "deezer",
  "youtube",
  "appleMusic",
  "audiomack",
  "boomplay",
  "soundcloud",
  "tiktok",
  "instagram",
  "facebook",
  "website"
] as const;

export type PlatformKey = (typeof platformOrder)[number];

export type ArtistLinks = Partial<Record<PlatformKey, string>>;

export type ArtistTheme = {
  primary: string;
  secondary: string;
  accent: string;
  surface: string;
};

export type Artist = {
  slug: string;
  name: string;
  tagline: string;
  shortBio: string;
  story: string;
  coverImage: string;
  coverAlt: string;
  profileImage: string;
  profileAlt: string;
  artworkImage: string;
  artworkAlt: string;
  ctaLabel: string;
  ctaUrl: string;
  featuredRelease: {
    title: string;
    subtitle: string;
  };
  contactEmail: string;
  secondaryNetworks: Array<{ label: string; url: string }>;
  links: ArtistLinks;
  theme: ArtistTheme;
};

export const artists: Artist[] = [
  {
    slug: "luna-kaze",
    name: "Luna Kaze",
    tagline: "Électro-cinématique entre lumière et vertige",
    shortBio: "Productrice, autrice et performeuse live entre synthwave et pop futuriste.",
    story:
      "Luna Kaze façonne une pop nocturne immersive, entre pulsations analogiques et nappes cinématiques. Son univers réunit mode, art visuel et storytelling musical pour une expérience premium pensée mobile-first.",
    coverImage:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=80",
    coverAlt: "Luna Kaze sur scène dans un halo lumineux violet",
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80",
    profileAlt: "Portrait de Luna Kaze",
    artworkImage:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80",
    artworkAlt: "Artwork abstrait lumineux violet et bleu",
    ctaLabel: "Écouter maintenant",
    ctaUrl: "https://open.spotify.com/",
    featuredRelease: {
      title: "Nouveau single · Neon Mirage",
      subtitle: "Disponible sur toutes les plateformes"
    },
    contactEmail: "booking@lunakaze.com",
    secondaryNetworks: [
      { label: "X / Twitter", url: "https://x.com" },
      { label: "Threads", url: "https://www.threads.net" }
    ],
    links: {
      spotify: "https://open.spotify.com/",
      deezer: "https://www.deezer.com/",
      youtube: "https://www.youtube.com/",
      appleMusic: "https://music.apple.com/",
      audiomack: "https://audiomack.com/",
      boomplay: "https://www.boomplay.com/",
      soundcloud: "https://soundcloud.com/",
      tiktok: "https://www.tiktok.com/",
      instagram: "https://www.instagram.com/",
      facebook: "https://www.facebook.com/",
      website: "https://example.com"
    },
    theme: {
      primary: "#7c3aed",
      secondary: "#0f172a",
      accent: "#ec4899",
      surface: "rgba(15, 23, 42, 0.58)"
    }
  }
];

export const featuredArtist = artists[0];

export const getArtistBySlug = (slug: string) => artists.find((artist) => artist.slug === slug);
