import { Controller, Get } from '@nestjs/common';
import { CookbookService } from '../services/cookbook.service';

@Controller({
  version: "1",
  path: "cookbook",
})
export class CookbookController {

  constructor(private readonly cookbookService: CookbookService) {
  }

  @Get("/")
  getRecipes() {
    return this.cookbookService.getAllRecipes().then((recipes) => recipes)
  }
}
