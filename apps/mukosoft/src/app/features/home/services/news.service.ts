import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay, Observable, retryWhen } from "rxjs";
import { News } from "../models/news";
import { API_ENDPOINTS, API_PREFIX } from "../../../core/config/api";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  constructor(private readonly http: HttpClient) {}

  /**
   * Get the current news for the app.
   */
  getNews(): Observable<News[]> {
    return this.http.get<News[]>(`/${API_PREFIX}/${API_ENDPOINTS.news}`).pipe(
      retryWhen((errors) => {
        return errors.pipe(delay(5000));
      })
    );
  }
}
