export type ConcorrenteData = {
  nome: string;
  username: string;
  alt: string;
  image: {
    src: string;
    width: number;
    height: number;
    format: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg" | "avif";
  };
  punti: number;
  slug: string;
}
