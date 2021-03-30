import React, { useMemo } from 'react';
import styled, {
    ITheme,
    ThemeProvider as StyledComponentsThemeProvider,
    createGlobalStyle,
    css,
} from 'styled-components';
import { useSelector } from 'react-redux';
import { Text, TextProps } from 'rebass';
import { Colors } from './Theme.styled';
import { darkModeSelector } from './Theme.selector';

const MEDIA_WIDTHS = {
    upToExtraSmall: 500,
    upToSmall: 720,
    upToMedium: 960,
    upToLarge: 1280,
};

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
    (accumulator, size) => {
        (accumulator as any)[size] = (a: any, b: any, c: any) => css`
            @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
                ${css(a, b, c)}
            }
        `;
        return accumulator;
    },
    {},
) as any;

const white = '#FFFFFF';
const black = '#000000';

export function colors(darkMode: boolean): Colors {
    return {
        // base
        white,
        black,

        // table
        headerRow: darkMode ? '#f5f5f5' : '#f5f5f5',
        hoverRow: darkMode ? '#e0e0e0' : '#e0e0e0',
        darkRow: darkMode ? '#fafafa' : '#fafafa',
        lightRow: darkMode ? '#e0e0e0' : '#e0e0e0',

        // modal
        modalBg: darkMode ? 'rgba(0,0,0,.425)' : 'rgba(0,0,0,0.3)',

        border1: darkMode ? '#CBCBCB' : '#CBCBCB',
        border2: darkMode ? '#E0E0E0' : '#E0E0E0',

        // text
        text1: darkMode ? white : black,
        text2: darkMode ? '#9e9e9e' : '#9e9e9e',
        text3: darkMode ? '#616161' : '#616161',

        green1: darkMode ? '#34C759' : '#34C759',
        red1: darkMode ? 'red' : 'red',
    };
}

export function appTheme(darkMode: boolean): ITheme {
    return {
        ...colors(darkMode),

        grids: {
            sm: 8,
            md: 12,
            lg: 24,
        },

        // media queries
        mediaWidth: mediaWidthTemplates,

        // css snippets
        flexColumnNoWrap: css`
            display: flex;
            flex-flow: column nowrap;
        `,
        flexRowNoWrap: css`
            display: flex;
            flex-flow: row nowrap;
        `,
    };
}

const TextWrapper = styled(Text)<{ color: keyof Colors }>`
    color: ${({ color, theme }) => (theme as any)[color]};
`;

export const TYPE = {
    main(props: TextProps) {
        return <TextWrapper fontWeight={500} color="black" {...props} />;
    },
    link(props: TextProps) {
        return <TextWrapper fontWeight={500} color="black" {...props} />;
    },
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const darkMode = useSelector(darkModeSelector);

    const themeObject = useMemo(() => appTheme(darkMode), [darkMode]);

    return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>;
};

export const FixedGlobalStyle = createGlobalStyle`
html, input, textarea, button {
  font-family: 'Inter', sans-serif;
  font-display: fallback;
}
@supports (font-variation-settings: normal) {
  html, input, textarea, button {
    font-family: 'Inter var', sans-serif;
  }
}

html,
body {
  margin: 0;
  padding: 0;
}

 a {
   color: ${colors(false).black}; 
 }

* {
  box-sizing: border-box;
}

button {
  user-select: none;
}

html {
  font-size: 16px;
  font-variant: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
}
`;

export const ThemedGlobalStyle = createGlobalStyle`
    body {
      min-height: 100vh;
      box-sizing: border-box;
    }
`;
