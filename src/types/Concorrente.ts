export type ConcorrenteData = {
  nome: string;
  username: string;
  alt: string;
  bio: string;
  image: {
    src: string;
    width: number;
    height: number;
    format: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg" | "avif";
  };
  punti: number;
  slug: string;
}
