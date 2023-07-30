import { MantineThemeOverride } from "@mantine/core";

declare module '@mantine/core' {
    export interface MantineThemeOther {
        secondaryFontColor: string;
        bgColor: string;
        bgColorLight: string;
        fadedFontColor: string;
        priOrange: string;
        successGreen: string;
        modCardBg: string;
        modCardFontColor: string;
        warnCardBg: string;
        warnCardFontColor: string;
        titleFontWeight: number;
    }
  }

const common = {
    fontFamily: "-apple-system, BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    priOrange:'#ff5138 ', //  Orange
    successGreen: '#28a745', // Notifs
    modCardBg:'#2BB34A', // From Planner
    modCardFontColor:'#0A2C12', // Planner
    warnCardBg:'#ffc107', // Planner warn card
    warnCardFontColor:'#3A2C00', // Planner warn card
    titleFontWeight:700
};

export const DarkThemeOverride:MantineThemeOverride = {
    other: {
        ...common,
        secondaryFontColor:'#aaa', // paragraph font color
        bgColor:'#222324', // background color
        bgColorLight:'#292929', // for header
        fadedFontColor:'#aeb1b5' // faded font color
    }
};



// secondaryFontColor: string;
// bgColor: string;
// bgColorLight: string;
// fadedFontColor: string;
// priOrange: string;
// successGreen: string;
// modCardBg: string;
// modCardFontColor: string;
// warnCardBg: string;
// warnCardFontColor: string;
// titleFontWeight: number;