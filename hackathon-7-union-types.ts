import Jimp, { read } from 'jimp';

const supportedMimeTypes = ['image/jpeg'] as const;
type MimeType = typeof supportedMimeTypes[number];

const DEFAULTIMAGEQUALITYLEVEL = 80;

interface configuration {
  maxWidth?: number;
  maxHeight?: number;
  qualityLevel?: number;
}

export class ImageProcessor {
  // real life example!
  private maxWidth?: number;
  private maxHeight?: number; // these are both the same
  private qualityLevel: number | undefined; // these are both the same

  constructor(options?: configuration) {
    this.maxWidth = options?.maxWidth;
    this.maxHeight = options?.maxHeight;
    this.qualityLevel = options?.qualityLevel ?? DEFAULTIMAGEQUALITYLEVEL;
    // difference between ?? and || in this case!
    // When we use qualityLevel 0 and use ||, it falls back to default
  }

  async convert(bufferOrImage: Buffer | Jimp, mimeType?: MimeType): Promise<Buffer> {
    const width = this.maxWidth;
    const height = this.maxHeight;
    const quality = this.qualityLevel;

    try {
      // hier een type object van maken aan de hand van een stukje validatie
      const image = bufferOrImage instanceof Buffer ? await read(bufferOrImage) : bufferOrImage;
      if (width && image.getWidth() >= width) image.resize(width, Jimp.AUTO);
      if (height && image.getHeight() >= height) image.resize(Jimp.AUTO, height);
      if (quality) image.quality(quality);

      return await image.getBufferAsync(mimeType ?? 'image/jpeg');
    } catch (e) {
      throw new Error(`Unable to convert image. An error was thrown; ${e.message ?? e}`);
    }
  }
}

const processor = new ImageProcessor();
// buffer
processor.convert(Buffer.from(''));

// jimp
Jimp.read('').then(x => {
  processor.convert(x);
});
