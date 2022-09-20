import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { News } from "../../models/news";

@Component({
  selector: "mukosoft-news-slider",
  templateUrl: "./news-slider.component.html",
})
export class NewsSliderComponent {
  readonly sliderOptions = {
    loop: true,
    autoplay: true,
  };

  @Input()
  news: Observable<News[]>;

  openLink(url: string) {
    const baseUrl = "www.muko.info";
    console.log(`${baseUrl}${url}`);
    if (url) {
      window.open(`https://${baseUrl}${url}`, "_blank", "location=yes");
    }
  }
}
