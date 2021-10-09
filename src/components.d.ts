/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import {HTMLStencilElement, JSXBase} from "@stencil/core/internal";
import {Post} from "./fetch-es6.worker";
import {NewsLoader} from "./components/honey-news/news/NewsLoader";
import {NewsOptions} from "./components/honey-news/news/NewsOptions";

export namespace Components {
    interface HoneyAbout {
    }
    interface HoneyAboutBulma {
    }
    interface HoneyAboutPapercss {
    }
    interface HoneyArticle {
    }
    interface HoneyArticleBulma {
    }
    interface HoneyArticlePapercss {
    }
    interface HoneyDisclaimer {
    }
    interface HoneyDisclaimerBulma {
    }
    interface HoneyDisclaimerPapercss {
    }
    interface HoneyInfobar {
    }
    interface HoneyInfobarBulma {
    }
    interface HoneyInfobarPapercss {
    }
    interface HoneyNavbar {
    }
    interface HoneyNavbarBulma {
    }
    interface HoneyNavbarPapercss {
    }
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
    interface HoneyNewsAbout {
    }
    interface HoneyNewsArticle {
        "post": Post;
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
          * enable console logging
         */
        "verbose": boolean;
    }
    interface HoneyNotification {
    }
    interface HoneyNotificationBulma {
    }
    interface HoneyNotificationPapercss {
    }
    interface HoneyStyledComponent {
        /**
          * themepostfix of theme name e.g. style when honey-papercss-style
         */
        "themepostfix": string;
        /**
          * themeprefix of theme name e.g. honey when honey-papercss-style
         */
        "themeprefix": string;
    }
    interface HoneyStyledParacomponent {
        "parameterlist": any;
        /**
          * themepostfix of theme name e.g. style when honey-papercss-style
         */
        "themepostfix": string;
        /**
          * themeprefix of theme name e.g. honey when honey-papercss-style
         */
        "themeprefix": string;
    }
    interface HoneyTable {
    }
    interface HoneyTableBulma {
    }
    interface HoneyTablePapercss {
    }
}
declare global {
    interface HTMLHoneyAboutElement extends Components.HoneyAbout, HTMLStencilElement {
    }
    var HTMLHoneyAboutElement: {
        prototype: HTMLHoneyAboutElement;
        new (): HTMLHoneyAboutElement;
    };
    interface HTMLHoneyAboutBulmaElement extends Components.HoneyAboutBulma, HTMLStencilElement {
    }
    var HTMLHoneyAboutBulmaElement: {
        prototype: HTMLHoneyAboutBulmaElement;
        new (): HTMLHoneyAboutBulmaElement;
    };
    interface HTMLHoneyAboutPapercssElement extends Components.HoneyAboutPapercss, HTMLStencilElement {
    }
    var HTMLHoneyAboutPapercssElement: {
        prototype: HTMLHoneyAboutPapercssElement;
        new (): HTMLHoneyAboutPapercssElement;
    };
    interface HTMLHoneyArticleElement extends Components.HoneyArticle, HTMLStencilElement {
    }
    var HTMLHoneyArticleElement: {
        prototype: HTMLHoneyArticleElement;
        new (): HTMLHoneyArticleElement;
    };
    interface HTMLHoneyArticleBulmaElement extends Components.HoneyArticleBulma, HTMLStencilElement {
    }
    var HTMLHoneyArticleBulmaElement: {
        prototype: HTMLHoneyArticleBulmaElement;
        new (): HTMLHoneyArticleBulmaElement;
    };
    interface HTMLHoneyArticlePapercssElement extends Components.HoneyArticlePapercss, HTMLStencilElement {
    }
    var HTMLHoneyArticlePapercssElement: {
        prototype: HTMLHoneyArticlePapercssElement;
        new (): HTMLHoneyArticlePapercssElement;
    };
    interface HTMLHoneyDisclaimerElement extends Components.HoneyDisclaimer, HTMLStencilElement {
    }
    var HTMLHoneyDisclaimerElement: {
        prototype: HTMLHoneyDisclaimerElement;
        new (): HTMLHoneyDisclaimerElement;
    };
    interface HTMLHoneyDisclaimerBulmaElement extends Components.HoneyDisclaimerBulma, HTMLStencilElement {
    }
    var HTMLHoneyDisclaimerBulmaElement: {
        prototype: HTMLHoneyDisclaimerBulmaElement;
        new (): HTMLHoneyDisclaimerBulmaElement;
    };
    interface HTMLHoneyDisclaimerPapercssElement extends Components.HoneyDisclaimerPapercss, HTMLStencilElement {
    }
    var HTMLHoneyDisclaimerPapercssElement: {
        prototype: HTMLHoneyDisclaimerPapercssElement;
        new (): HTMLHoneyDisclaimerPapercssElement;
    };
    interface HTMLHoneyInfobarElement extends Components.HoneyInfobar, HTMLStencilElement {
    }
    var HTMLHoneyInfobarElement: {
        prototype: HTMLHoneyInfobarElement;
        new (): HTMLHoneyInfobarElement;
    };
    interface HTMLHoneyInfobarBulmaElement extends Components.HoneyInfobarBulma, HTMLStencilElement {
    }
    var HTMLHoneyInfobarBulmaElement: {
        prototype: HTMLHoneyInfobarBulmaElement;
        new (): HTMLHoneyInfobarBulmaElement;
    };
    interface HTMLHoneyInfobarPapercssElement extends Components.HoneyInfobarPapercss, HTMLStencilElement {
    }
    var HTMLHoneyInfobarPapercssElement: {
        prototype: HTMLHoneyInfobarPapercssElement;
        new (): HTMLHoneyInfobarPapercssElement;
    };
    interface HTMLHoneyNavbarElement extends Components.HoneyNavbar, HTMLStencilElement {
    }
    var HTMLHoneyNavbarElement: {
        prototype: HTMLHoneyNavbarElement;
        new (): HTMLHoneyNavbarElement;
    };
    interface HTMLHoneyNavbarBulmaElement extends Components.HoneyNavbarBulma, HTMLStencilElement {
    }
    var HTMLHoneyNavbarBulmaElement: {
        prototype: HTMLHoneyNavbarBulmaElement;
        new (): HTMLHoneyNavbarBulmaElement;
    };
    interface HTMLHoneyNavbarPapercssElement extends Components.HoneyNavbarPapercss, HTMLStencilElement {
    }
    var HTMLHoneyNavbarPapercssElement: {
        prototype: HTMLHoneyNavbarPapercssElement;
        new (): HTMLHoneyNavbarPapercssElement;
    };
    interface HTMLHoneyNewsElement extends Components.HoneyNews, HTMLStencilElement {
    }
    var HTMLHoneyNewsElement: {
        prototype: HTMLHoneyNewsElement;
        new (): HTMLHoneyNewsElement;
    };
    interface HTMLHoneyNewsAboutElement extends Components.HoneyNewsAbout, HTMLStencilElement {
    }
    var HTMLHoneyNewsAboutElement: {
        prototype: HTMLHoneyNewsAboutElement;
        new (): HTMLHoneyNewsAboutElement;
    };
    interface HTMLHoneyNewsArticleElement extends Components.HoneyNewsArticle, HTMLStencilElement {
    }
    var HTMLHoneyNewsArticleElement: {
        prototype: HTMLHoneyNewsArticleElement;
        new (): HTMLHoneyNewsArticleElement;
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
    interface HTMLHoneyNotificationElement extends Components.HoneyNotification, HTMLStencilElement {
    }
    var HTMLHoneyNotificationElement: {
        prototype: HTMLHoneyNotificationElement;
        new (): HTMLHoneyNotificationElement;
    };
    interface HTMLHoneyNotificationBulmaElement extends Components.HoneyNotificationBulma, HTMLStencilElement {
    }
    var HTMLHoneyNotificationBulmaElement: {
        prototype: HTMLHoneyNotificationBulmaElement;
        new (): HTMLHoneyNotificationBulmaElement;
    };
    interface HTMLHoneyNotificationPapercssElement extends Components.HoneyNotificationPapercss, HTMLStencilElement {
    }
    var HTMLHoneyNotificationPapercssElement: {
        prototype: HTMLHoneyNotificationPapercssElement;
        new (): HTMLHoneyNotificationPapercssElement;
    };
    interface HTMLHoneyStyledComponentElement extends Components.HoneyStyledComponent, HTMLStencilElement {
    }
    var HTMLHoneyStyledComponentElement: {
        prototype: HTMLHoneyStyledComponentElement;
        new (): HTMLHoneyStyledComponentElement;
    };
    interface HTMLHoneyStyledParacomponentElement extends Components.HoneyStyledParacomponent, HTMLStencilElement {
    }
    var HTMLHoneyStyledParacomponentElement: {
        prototype: HTMLHoneyStyledParacomponentElement;
        new (): HTMLHoneyStyledParacomponentElement;
    };
    interface HTMLHoneyTableElement extends Components.HoneyTable, HTMLStencilElement {
    }
    var HTMLHoneyTableElement: {
        prototype: HTMLHoneyTableElement;
        new (): HTMLHoneyTableElement;
    };
    interface HTMLHoneyTableBulmaElement extends Components.HoneyTableBulma, HTMLStencilElement {
    }
    var HTMLHoneyTableBulmaElement: {
        prototype: HTMLHoneyTableBulmaElement;
        new (): HTMLHoneyTableBulmaElement;
    };
    interface HTMLHoneyTablePapercssElement extends Components.HoneyTablePapercss, HTMLStencilElement {
    }
    var HTMLHoneyTablePapercssElement: {
        prototype: HTMLHoneyTablePapercssElement;
        new (): HTMLHoneyTablePapercssElement;
    };
    interface HTMLElementTagNameMap {
        "honey-about": HTMLHoneyAboutElement;
        "honey-about-bulma": HTMLHoneyAboutBulmaElement;
        "honey-about-papercss": HTMLHoneyAboutPapercssElement;
        "honey-article": HTMLHoneyArticleElement;
        "honey-article-bulma": HTMLHoneyArticleBulmaElement;
        "honey-article-papercss": HTMLHoneyArticlePapercssElement;
        "honey-disclaimer": HTMLHoneyDisclaimerElement;
        "honey-disclaimer-bulma": HTMLHoneyDisclaimerBulmaElement;
        "honey-disclaimer-papercss": HTMLHoneyDisclaimerPapercssElement;
        "honey-infobar": HTMLHoneyInfobarElement;
        "honey-infobar-bulma": HTMLHoneyInfobarBulmaElement;
        "honey-infobar-papercss": HTMLHoneyInfobarPapercssElement;
        "honey-navbar": HTMLHoneyNavbarElement;
        "honey-navbar-bulma": HTMLHoneyNavbarBulmaElement;
        "honey-navbar-papercss": HTMLHoneyNavbarPapercssElement;
        "honey-news": HTMLHoneyNewsElement;
        "honey-news-about": HTMLHoneyNewsAboutElement;
        "honey-news-article": HTMLHoneyNewsArticleElement;
        "honey-news-feed": HTMLHoneyNewsFeedElement;
        "honey-news-feeds": HTMLHoneyNewsFeedsElement;
        "honey-news-header": HTMLHoneyNewsHeaderElement;
        "honey-news-statistic": HTMLHoneyNewsStatisticElement;
        "honey-notification": HTMLHoneyNotificationElement;
        "honey-notification-bulma": HTMLHoneyNotificationBulmaElement;
        "honey-notification-papercss": HTMLHoneyNotificationPapercssElement;
        "honey-styled-component": HTMLHoneyStyledComponentElement;
        "honey-styled-paracomponent": HTMLHoneyStyledParacomponentElement;
        "honey-table": HTMLHoneyTableElement;
        "honey-table-bulma": HTMLHoneyTableBulmaElement;
        "honey-table-papercss": HTMLHoneyTablePapercssElement;
    }
}
declare namespace LocalJSX {
    interface HoneyAbout {
    }
    interface HoneyAboutBulma {
    }
    interface HoneyAboutPapercss {
    }
    interface HoneyArticle {
    }
    interface HoneyArticleBulma {
    }
    interface HoneyArticlePapercss {
    }
    interface HoneyDisclaimer {
    }
    interface HoneyDisclaimerBulma {
    }
    interface HoneyDisclaimerPapercss {
    }
    interface HoneyInfobar {
    }
    interface HoneyInfobarBulma {
    }
    interface HoneyInfobarPapercss {
    }
    interface HoneyNavbar {
    }
    interface HoneyNavbarBulma {
    }
    interface HoneyNavbarPapercss {
    }
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
    interface HoneyNewsAbout {
    }
    interface HoneyNewsArticle {
        "post"?: Post;
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
    interface HoneyNotification {
    }
    interface HoneyNotificationBulma {
    }
    interface HoneyNotificationPapercss {
    }
    interface HoneyStyledComponent {
        /**
          * themepostfix of theme name e.g. style when honey-papercss-style
         */
        "themepostfix"?: string;
        /**
          * themeprefix of theme name e.g. honey when honey-papercss-style
         */
        "themeprefix"?: string;
    }
    interface HoneyStyledParacomponent {
        "parameterlist"?: any;
        /**
          * themepostfix of theme name e.g. style when honey-papercss-style
         */
        "themepostfix"?: string;
        /**
          * themeprefix of theme name e.g. honey when honey-papercss-style
         */
        "themeprefix"?: string;
    }
    interface HoneyTable {
    }
    interface HoneyTableBulma {
    }
    interface HoneyTablePapercss {
    }
    interface IntrinsicElements {
        "honey-about": HoneyAbout;
        "honey-about-bulma": HoneyAboutBulma;
        "honey-about-papercss": HoneyAboutPapercss;
        "honey-article": HoneyArticle;
        "honey-article-bulma": HoneyArticleBulma;
        "honey-article-papercss": HoneyArticlePapercss;
        "honey-disclaimer": HoneyDisclaimer;
        "honey-disclaimer-bulma": HoneyDisclaimerBulma;
        "honey-disclaimer-papercss": HoneyDisclaimerPapercss;
        "honey-infobar": HoneyInfobar;
        "honey-infobar-bulma": HoneyInfobarBulma;
        "honey-infobar-papercss": HoneyInfobarPapercss;
        "honey-navbar": HoneyNavbar;
        "honey-navbar-bulma": HoneyNavbarBulma;
        "honey-navbar-papercss": HoneyNavbarPapercss;
        "honey-news": HoneyNews;
        "honey-news-about": HoneyNewsAbout;
        "honey-news-article": HoneyNewsArticle;
        "honey-news-feed": HoneyNewsFeed;
        "honey-news-feeds": HoneyNewsFeeds;
        "honey-news-header": HoneyNewsHeader;
        "honey-news-statistic": HoneyNewsStatistic;
        "honey-notification": HoneyNotification;
        "honey-notification-bulma": HoneyNotificationBulma;
        "honey-notification-papercss": HoneyNotificationPapercss;
        "honey-styled-component": HoneyStyledComponent;
        "honey-styled-paracomponent": HoneyStyledParacomponent;
        "honey-table": HoneyTable;
        "honey-table-bulma": HoneyTableBulma;
        "honey-table-papercss": HoneyTablePapercss;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "honey-about": LocalJSX.HoneyAbout & JSXBase.HTMLAttributes<HTMLHoneyAboutElement>;
            "honey-about-bulma": LocalJSX.HoneyAboutBulma & JSXBase.HTMLAttributes<HTMLHoneyAboutBulmaElement>;
            "honey-about-papercss": LocalJSX.HoneyAboutPapercss & JSXBase.HTMLAttributes<HTMLHoneyAboutPapercssElement>;
            "honey-article": LocalJSX.HoneyArticle & JSXBase.HTMLAttributes<HTMLHoneyArticleElement>;
            "honey-article-bulma": LocalJSX.HoneyArticleBulma & JSXBase.HTMLAttributes<HTMLHoneyArticleBulmaElement>;
            "honey-article-papercss": LocalJSX.HoneyArticlePapercss & JSXBase.HTMLAttributes<HTMLHoneyArticlePapercssElement>;
            "honey-disclaimer": LocalJSX.HoneyDisclaimer & JSXBase.HTMLAttributes<HTMLHoneyDisclaimerElement>;
            "honey-disclaimer-bulma": LocalJSX.HoneyDisclaimerBulma & JSXBase.HTMLAttributes<HTMLHoneyDisclaimerBulmaElement>;
            "honey-disclaimer-papercss": LocalJSX.HoneyDisclaimerPapercss & JSXBase.HTMLAttributes<HTMLHoneyDisclaimerPapercssElement>;
            "honey-infobar": LocalJSX.HoneyInfobar & JSXBase.HTMLAttributes<HTMLHoneyInfobarElement>;
            "honey-infobar-bulma": LocalJSX.HoneyInfobarBulma & JSXBase.HTMLAttributes<HTMLHoneyInfobarBulmaElement>;
            "honey-infobar-papercss": LocalJSX.HoneyInfobarPapercss & JSXBase.HTMLAttributes<HTMLHoneyInfobarPapercssElement>;
            "honey-navbar": LocalJSX.HoneyNavbar & JSXBase.HTMLAttributes<HTMLHoneyNavbarElement>;
            "honey-navbar-bulma": LocalJSX.HoneyNavbarBulma & JSXBase.HTMLAttributes<HTMLHoneyNavbarBulmaElement>;
            "honey-navbar-papercss": LocalJSX.HoneyNavbarPapercss & JSXBase.HTMLAttributes<HTMLHoneyNavbarPapercssElement>;
            "honey-news": LocalJSX.HoneyNews & JSXBase.HTMLAttributes<HTMLHoneyNewsElement>;
            "honey-news-about": LocalJSX.HoneyNewsAbout & JSXBase.HTMLAttributes<HTMLHoneyNewsAboutElement>;
            "honey-news-article": LocalJSX.HoneyNewsArticle & JSXBase.HTMLAttributes<HTMLHoneyNewsArticleElement>;
            "honey-news-feed": LocalJSX.HoneyNewsFeed & JSXBase.HTMLAttributes<HTMLHoneyNewsFeedElement>;
            "honey-news-feeds": LocalJSX.HoneyNewsFeeds & JSXBase.HTMLAttributes<HTMLHoneyNewsFeedsElement>;
            "honey-news-header": LocalJSX.HoneyNewsHeader & JSXBase.HTMLAttributes<HTMLHoneyNewsHeaderElement>;
            "honey-news-statistic": LocalJSX.HoneyNewsStatistic & JSXBase.HTMLAttributes<HTMLHoneyNewsStatisticElement>;
            "honey-notification": LocalJSX.HoneyNotification & JSXBase.HTMLAttributes<HTMLHoneyNotificationElement>;
            "honey-notification-bulma": LocalJSX.HoneyNotificationBulma & JSXBase.HTMLAttributes<HTMLHoneyNotificationBulmaElement>;
            "honey-notification-papercss": LocalJSX.HoneyNotificationPapercss & JSXBase.HTMLAttributes<HTMLHoneyNotificationPapercssElement>;
            "honey-styled-component": LocalJSX.HoneyStyledComponent & JSXBase.HTMLAttributes<HTMLHoneyStyledComponentElement>;
            "honey-styled-paracomponent": LocalJSX.HoneyStyledParacomponent & JSXBase.HTMLAttributes<HTMLHoneyStyledParacomponentElement>;
            "honey-table": LocalJSX.HoneyTable & JSXBase.HTMLAttributes<HTMLHoneyTableElement>;
            "honey-table-bulma": LocalJSX.HoneyTableBulma & JSXBase.HTMLAttributes<HTMLHoneyTableBulmaElement>;
            "honey-table-papercss": LocalJSX.HoneyTablePapercss & JSXBase.HTMLAttributes<HTMLHoneyTablePapercssElement>;
        }
    }
}
