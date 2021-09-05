/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { NewsLoader } from "./components/honey-news/news/NewsLoader";
import { NewsOptions } from "./components/honey-news/news/NewsOptions";
import { StatisticOptions } from "./components/honey-news/statistic/StatisticOptions";
export namespace Components {
    interface HoneyNews {
        /**
          * Feeds Administration Komponente
         */
        "feedAdministration": HTMLHoneyNewsFeedsElement;
        /**
          * base of local site
         */
        "localBasePath": any;
        /**
          * News reader Komponente
         */
        "newsFeed": HTMLHoneyNewsFeedElement;
        /**
          * base of remote site
         */
        "siteBasePath": any;
        /**
          * enable console logging
         */
        "verbose": boolean;
    }
    interface HoneyNewsFeed {
        /**
          * Hilfsklasse zum Laden der Daten
         */
        "feedLoader": NewsLoader;
        /**
          * Update honey-news options
          * @param options : NewsOptions plain object to set the options
         */
        "updateOptions": (options: NewsOptions) => Promise<void>;
        /**
          * enable console logging
         */
        "verbose": boolean;
    }
    interface HoneyNewsFeeds {
        /**
          * Hilfsklasse zum Laden der Daten
         */
        "feedLoader": NewsLoader;
    }
    interface HoneyNewsHeader {
    }
    interface HoneyNewsStatistic {
        /**
          * Update statistic options
          * @param options : NewsOptions plain object to set the options
         */
        "updateOptions": (options: StatisticOptions) => Promise<void>;
        /**
          * enable console logging
         */
        "verbose": boolean;
    }
    interface HoneyNewsStyle {
        "theme": string;
    }
}
declare global {
    interface HTMLHoneyNewsElement extends Components.HoneyNews, HTMLStencilElement {
    }
    var HTMLHoneyNewsElement: {
        prototype: HTMLHoneyNewsElement;
        new (): HTMLHoneyNewsElement;
    };
    interface HTMLHoneyNewsFeedElement extends Components.HoneyNewsFeed, HTMLStencilElement {
    }
    var HTMLHoneyNewsFeedElement: {
        prototype: HTMLHoneyNewsFeedElement;
        new (): HTMLHoneyNewsFeedElement;
    };
    interface HTMLHoneyNewsFeedsElement extends Components.HoneyNewsFeeds, HTMLStencilElement {
    }
    var HTMLHoneyNewsFeedsElement: {
        prototype: HTMLHoneyNewsFeedsElement;
        new (): HTMLHoneyNewsFeedsElement;
    };
    interface HTMLHoneyNewsHeaderElement extends Components.HoneyNewsHeader, HTMLStencilElement {
    }
    var HTMLHoneyNewsHeaderElement: {
        prototype: HTMLHoneyNewsHeaderElement;
        new (): HTMLHoneyNewsHeaderElement;
    };
    interface HTMLHoneyNewsStatisticElement extends Components.HoneyNewsStatistic, HTMLStencilElement {
    }
    var HTMLHoneyNewsStatisticElement: {
        prototype: HTMLHoneyNewsStatisticElement;
        new (): HTMLHoneyNewsStatisticElement;
    };
    interface HTMLHoneyNewsStyleElement extends Components.HoneyNewsStyle, HTMLStencilElement {
    }
    var HTMLHoneyNewsStyleElement: {
        prototype: HTMLHoneyNewsStyleElement;
        new (): HTMLHoneyNewsStyleElement;
    };
    interface HTMLElementTagNameMap {
        "honey-news": HTMLHoneyNewsElement;
        "honey-news-feed": HTMLHoneyNewsFeedElement;
        "honey-news-feeds": HTMLHoneyNewsFeedsElement;
        "honey-news-header": HTMLHoneyNewsHeaderElement;
        "honey-news-statistic": HTMLHoneyNewsStatisticElement;
        "honey-news-style": HTMLHoneyNewsStyleElement;
    }
}
declare namespace LocalJSX {
    interface HoneyNews {
        /**
          * Feeds Administration Komponente
         */
        "feedAdministration"?: HTMLHoneyNewsFeedsElement;
        /**
          * base of local site
         */
        "localBasePath"?: any;
        /**
          * News reader Komponente
         */
        "newsFeed"?: HTMLHoneyNewsFeedElement;
        /**
          * base of remote site
         */
        "siteBasePath"?: any;
        /**
          * enable console logging
         */
        "verbose"?: boolean;
    }
    interface HoneyNewsFeed {
        /**
          * Hilfsklasse zum Laden der Daten
         */
        "feedLoader"?: NewsLoader;
        /**
          * enable console logging
         */
        "verbose"?: boolean;
    }
    interface HoneyNewsFeeds {
        /**
          * Hilfsklasse zum Laden der Daten
         */
        "feedLoader"?: NewsLoader;
    }
    interface HoneyNewsHeader {
    }
    interface HoneyNewsStatistic {
        /**
          * enable console logging
         */
        "verbose"?: boolean;
    }
    interface HoneyNewsStyle {
        "theme"?: string;
    }
    interface IntrinsicElements {
        "honey-news": HoneyNews;
        "honey-news-feed": HoneyNewsFeed;
        "honey-news-feeds": HoneyNewsFeeds;
        "honey-news-header": HoneyNewsHeader;
        "honey-news-statistic": HoneyNewsStatistic;
        "honey-news-style": HoneyNewsStyle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "honey-news": LocalJSX.HoneyNews & JSXBase.HTMLAttributes<HTMLHoneyNewsElement>;
            "honey-news-feed": LocalJSX.HoneyNewsFeed & JSXBase.HTMLAttributes<HTMLHoneyNewsFeedElement>;
            "honey-news-feeds": LocalJSX.HoneyNewsFeeds & JSXBase.HTMLAttributes<HTMLHoneyNewsFeedsElement>;
            "honey-news-header": LocalJSX.HoneyNewsHeader & JSXBase.HTMLAttributes<HTMLHoneyNewsHeaderElement>;
            "honey-news-statistic": LocalJSX.HoneyNewsStatistic & JSXBase.HTMLAttributes<HTMLHoneyNewsStatisticElement>;
            "honey-news-style": LocalJSX.HoneyNewsStyle & JSXBase.HTMLAttributes<HTMLHoneyNewsStyleElement>;
        }
    }
}
