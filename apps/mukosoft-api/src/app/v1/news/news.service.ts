const got = require("got");
import { JSDOM } from "jsdom";

/**
 * NewsService
 */
export default class NewsService {
  /**
   * Returns an array of news.
   */
  async getNews(): Promise<any[]> {
    const url =
      "https://www.muko.info/angebote/veranstaltungen/termine/termine-betroffene";

    const response = await got(url);
    const dom = new JSDOM(response.body);

    const titles = dom.window.document.querySelectorAll(
      "span[itemprop=headline]"
    );

    const days = dom.window.document.querySelectorAll(".date-tag");
    const months = dom.window.document.querySelectorAll(".date-monat");
    const urls = dom.window.document.querySelectorAll(".news-list-content a");

    let events: any[] = [];

    titles.forEach((title, index) => {
      const day = days[index].getAttribute("datetime");
      const month = months[index].getAttribute("datetime");
      const url = urls[index].getAttribute("href");

      events.push({
        title: title.innerHTML,
        day,
        month,
        url,
      });
    });

    return events;
  }
}
