import {Component, h, Host, Prop, State} from "@stencil/core";
import {Subscription} from "rxjs";
import {StatisticData} from "@huluvu424242/liona-feeds/dist/esm/feeds/statistic";
import {StatisticLoader} from "./StatisticLoader";

@Component({
  tag: "honey-news-statistic",
  styleUrl: "honey-news-statistic.css",
  shadow: true
})
export class HoneyNewsStatistic {
  /**
   * Hilfsklasse zum Laden der Statistic Daten
   */
  @Prop() statisticLoader: StatisticLoader;

  @State() statistic: StatisticData[];
  statisticSubscription: Subscription;

  public connectedCallback() {
    this.statisticSubscription = this.subscribeStatistics();
  }

  public disconnectedCallback() {
    this.statisticSubscription.unsubscribe();
  }

  protected subscribeStatistics(): Subscription {
    return this.statisticLoader.subscribeStatistiken()
      .subscribe((statisticDatas: StatisticData[]) => this.statistic = [...statisticDatas]);
  }

  public render() {
    return (
      <Host>

        <honey-apply-style/>
        <div>
          <honey-table>
            <thead>
            <tr>
              <th>Score</th>
              <th>Url</th>
              <th>Angefragt</th>
              <th>Kontaktiert</th>
              <th>Geantwortet</th>
            </tr>
            </thead>
            <tbody>
            {this.statistic?.map((item: StatisticData) =>
              <tr>
                <td>{item.score}</td>
                <td><a href={item.url} target="_blank">{item.url}</a></td>
                <td>{item.countRequested}</td>
                <td>{item.countContacted}</td>
                <td>{item.countResponseOK}</td>
              </tr>
            )}
            </tbody>
          </honey-table>
        </div>
      </Host>
    );
  }
}
