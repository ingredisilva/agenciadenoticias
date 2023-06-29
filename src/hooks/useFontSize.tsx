import { createContext, useContext, useState } from 'react';

interface FontSizeContextData {
  fontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
}

const FontSizeContext = createContext<FontSizeContextData>(
  {} as FontSizeContextData
);

export const useFontSize = () => useContext(FontSizeContext);

// eslint-disable-next-line @typescript-eslint/ban-types
export const FontSizeProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () =>
    setFontSize((prevFontSize) => prevFontSize + 1);
  const decreaseFontSize = () =>
    setFontSize((prevFontSize) => prevFontSize - 1);
  const resetFontSize = () => setFontSize(16);

  return (
    <FontSizeContext.Provider
      value={{ fontSize, increaseFontSize, decreaseFontSize, resetFontSize }}
    >
      {children}
    </FontSizeContext.Provider>
  );
};
