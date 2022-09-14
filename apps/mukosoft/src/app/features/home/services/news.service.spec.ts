import { TestBed } from "@angular/core/testing";

import { NewsService } from "./news.service";
import { HttpClientModule } from "@angular/common/http";

describe("NewsService", () => {
  let service: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(NewsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
