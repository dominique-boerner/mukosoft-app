import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NewsController } from "./v1/news/news.controller";
import NewsService from "./v1/news/news.service";

@Module({
  imports: [],
  controllers: [AppController, NewsController],
  providers: [AppService, NewsService],
})
export class AppModule {}
