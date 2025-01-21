export type FontWeight = '400' | '500' | '600' | '700';

type Font = {
  fontFamily: string;
  fontWeight: FontWeight;
};

type Fonts = {
  regular: Font;
  medium: Font;
  bold: Font;
  heavy: Font;
};

export default Fonts;
