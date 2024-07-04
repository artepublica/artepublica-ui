export type FontWeight = '400' | '500';

type Font = {
  fontFamily: string;
  fontWeight: FontWeight;
};

type Fonts = {
  regular: Font;
  medium: Font;
};

export default Fonts;
