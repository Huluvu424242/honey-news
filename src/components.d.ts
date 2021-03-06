/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { NewsOptions } from "./components/honey-news/news-options";
export namespace Components {
    interface HoneyNews {
        /**
          * Update speaker options
          * @param options : NewsOptions plain object to set the options
         */
        "updateOptions": (options: NewsOptions) => Promise<void>;
        /**
          * enable console logging
         */
        "verbose": boolean;
    }
}
declare global {
    interface HTMLHoneyNewsElement extends Components.HoneyNews, HTMLStencilElement {
    }
    var HTMLHoneyNewsElement: {
        prototype: HTMLHoneyNewsElement;
        new (): HTMLHoneyNewsElement;
    };
    interface HTMLElementTagNameMap {
        "honey-news": HTMLHoneyNewsElement;
    }
}
declare namespace LocalJSX {
    interface HoneyNews {
        /**
          * enable console logging
         */
        "verbose"?: boolean;
    }
    interface IntrinsicElements {
        "honey-news": HoneyNews;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "honey-news": LocalJSX.HoneyNews & JSXBase.HTMLAttributes<HTMLHoneyNewsElement>;
        }
    }
}
