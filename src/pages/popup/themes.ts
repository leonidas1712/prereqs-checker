import { MantineThemeOverride } from "@mantine/core";

declare module '@mantine/core' {
    export interface MantineThemeOther {
        secondaryFontColor: string;
        bgColor: string;
        bgColorLight: string;
        fadedFontColor: string;
        priOrange: string;
        successGreen: string;
        modsBg:string;
        modCardBg: string;
        modCardFontColor: string;
        warnCardBg: string;
        warnCardFontColor: string;
        titleFontSize:string;
        titleFontWeight: number;
        subtitleFontSize:string;
        subtitleFontWeight:number;
        headerFontColor:string;
        iconSize:string;
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
    titleFontSize:"1.25rem",
    titleFontWeight:700,
    subtitleFontSize:"1.1rem",
    subtitleFontWeight:400,
    iconSize:"1.2rem"
};

export const DarkThemeOverride:MantineThemeOverride = {
    other: {
        ...common,
        secondaryFontColor:'#aaa', // paragraph font color
        modsBg:'#333',
        bgColor:'#222324', // background color
        bgColorLight:'#292929', // for header
        fadedFontColor:'#7d7d7d', // faded font color,
        headerFontColor:"white"
    }
};

export const LightThemeOverride:MantineThemeOverride = {
    other: {
        ...common,
        secondaryFontColor:' #69707a', // paragraph font color - done
        modsBg:'#f3f5f',
        bgColor:'white', // background color - done
        bgColorLight:'#f3f5f8', // for header - done
        fadedFontColor:'#666', // faded font color, - done
        headerFontColor:'#69707a' // - done
    }
}