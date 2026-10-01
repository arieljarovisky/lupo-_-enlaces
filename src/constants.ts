export interface Link {
  title: string;
  url: string;
  icon?: any;
  highlight?: boolean;
}

export const BUSINESS_INFO = {
  name: "LUPO",
  tagline: "Confort y calidad asegurada",
  logo: "https://images.unsplash.com/photo-1616422792879-195932857410?q=80&w=200&h=200&auto=format&fit=crop",
  socials: {
    instagram: "https://instagram.com/lupoargentina",
    facebook: "https://facebook.com/lupoargentina",
    whatsapp: "https://wa.me/5491170590570",
    tiktok: "https://www.tiktok.com/@lupo.argentina",
  }
};

export const LINKS: Link[] = [
  {
    title: "Tienda Online Oficial",
    url: "https://lupo.ar",
    highlight: true
  },
  {
    title: "Línea Damas",
    url: "https://lupo.ar/damas/"
  },
  {
    title: "Línea Compresión",
    url: "https://lupo.ar/damas/compresion/"
  },
  {
    title: "Medias",
    url: "https://lupo.ar/medias/"
  },
  {
    title: "Línea Hombres",
    url: "https://lupo.ar/hombre"
  },
  {
    title: "Línea Deportiva Damas",
    url: "https://lupo.ar/damas/ropa-deportiva/"
  }
];
