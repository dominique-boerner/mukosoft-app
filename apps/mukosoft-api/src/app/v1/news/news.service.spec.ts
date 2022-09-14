import NewsService from "./news.service";

describe("NewsService", () => {
  let newsService: NewsService;

  beforeEach(() => {
    newsService = new NewsService();
  });

  it("should return news", () => {
    const news = require("./news.json");
    expect(newsService.getNews()).toEqual(news);
  });
});
