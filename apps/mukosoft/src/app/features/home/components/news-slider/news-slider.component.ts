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
    window.open(url, "_system", "location=yes");
  }
}
