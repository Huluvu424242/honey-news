import {Component, h, Host} from "@stencil/core";
import {newsService} from "../news/news-service";
import DOMPurify from 'dompurify';

@Component({
  tag: "honey-news-verwaltung",
  shadow: true
})
export class HoneyFeedVerwaltung {

  /**
   * Input Element
   */
  inputNewUrl: HTMLInputElement;

  async addUrl(): Promise<void> {
    if (!newsService) return;

    const urlRaw: string = this.inputNewUrl.value;
    // sanitize user input
    const urlClean: string = DOMPurify.sanitize(urlRaw);
    const url: string = urlClean.trim();
    if (url && url.length > 0 && !newsService.getFeedURLs().includes(url)) {
      newsService.addFeedUrl(url);
      await newsService.ladePostsFrom(url);
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
