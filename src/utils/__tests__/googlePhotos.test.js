import { getGoogleImageWithSize } from "../googlePhotos.ts";

describe("utils > googlePhotos", () => {
  describe("getGoogleImageWithSize()", () => {
    const fakeUrl = 'http://test.googleusercontent.url.com/test'
    const noGoogleUrl = 'http://test.url.com/test'
    const customSize1 = 33;
    const customSize2 = 53;

    test("when no size should return the same url", () => {
      const result = getGoogleImageWithSize(fakeUrl);

      expect(result).toBe(fakeUrl)
    });

    test("when passed one size should append '=s{size}-no' at the end", () => {
      const result = getGoogleImageWithSize(fakeUrl, customSize1);

      expect(result).toBe(`${fakeUrl}=s${customSize1}-no`)
    });
    
    test("when passed two values of size should append '=w{size1}-h{size2}-no' at the end", () => {
      const result = getGoogleImageWithSize(fakeUrl, customSize1, customSize2);

      expect(result).toBe(`${fakeUrl}=w${customSize1}-h${customSize2}-no`)
    });
    
    test("when passed a no google content url, should return the same url", () => {
      const result = getGoogleImageWithSize(noGoogleUrl, customSize1, customSize2);

      expect(result).toBe(noGoogleUrl)
    });
    
    test("when no image, should return null", () => {
      const result = getGoogleImageWithSize(null, customSize1, customSize2);

      expect(result).toBeNull()
    });
  });
});
