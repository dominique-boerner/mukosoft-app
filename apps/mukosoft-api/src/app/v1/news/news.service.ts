const news = require("./news.json");

/**
 * NewsService
 */
export default class NewsService {
  /**
   * Returns an array of news.
   */
  getNews(): any[] {
    return news;
  }
}
