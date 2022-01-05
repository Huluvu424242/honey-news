import {Component, h, Host, Prop} from "@stencil/core";
import {NewsLoader} from "../news/NewsLoader";
import {getFeedsSingleCall} from "../../../fetch-es6.worker";
import DOMPurify from 'dompurify';

@Component({
  tag: "honey-news-verwaltung",
  shadow: true
})
export class HoneyNewsVerwaltung {

  /**
   * Input Element
   */
  inputNewUrl: HTMLInputElement;

  /**
   * Hilfsklasse zum Laden der Daten
   */
  @Prop() feedLoader!: NewsLoader;

  async addUrl(): Promise<void> {
    if (!this.feedLoader) return;

    const urlRaw: string = this.inputNewUrl.value;
    // sanitize user input
    const urlClean: string = DOMPurify.sanitize(urlRaw);
    const url:string = urlClean.trim();
    if (url && url.length>0 && !this.feedLoader.getFeedURLs().includes(url)) {
      this.feedLoader.addFeedUrl(url);
      await getFeedsSingleCall([url], true);
    }
  }

  public render() {
    return (
      <Host>
        <honey-apply-style/>
        <div class="form-group">
          <h2>Verwaltung</h2>
          <div class="row">
            <label class="col border label" htmlFor="newurl">Feed URL:</label>
            <input id="newurl" class="col-fill col" type="text"
                   ref={(el) => this.inputNewUrl = el as HTMLInputElement}/>
            <button id="addurl" class="col paper-btn btn-primary"
                    onClick={this.addUrl.bind(this)}>Add Feed URL
            </button>
          </div>
        </div>
      </Host>
    );
  }
}
