export const getGoogleImageWithSize = (
  imageUrl: string,
  width?: number,
  heigh?: number
): string => {
  if (!imageUrl) return null;
  if (!isGoogleContentUrl(imageUrl)) return imageUrl;
  if (width) {
    if (heigh) return `${imageUrl}=w${width}-h${heigh}-no`;
    return `${imageUrl}=s${width}-no`;
  }
  return imageUrl;
};

const isGoogleContentUrl = (url: string = "") => url.includes(GOOGLE_CONTENT_KEY);
const GOOGLE_CONTENT_KEY = "googleusercontent";
