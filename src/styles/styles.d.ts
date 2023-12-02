import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;  // 'dark' mudado para string

        color: {
            primary: string;
            secondary: string;  // 'string' mudado para string
            tertiary: string;

            white: string;  // 'string' mudado para string
            black: string;  // 'string' mudado para string
            badwolf: string;  // 'string' mudado para string

            success: string;
            info: string;
            warning: string;
        };
    };
}
