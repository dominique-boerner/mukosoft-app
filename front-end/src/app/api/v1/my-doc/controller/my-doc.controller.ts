import { Controller, Get, Param, Query } from '@nestjs/common';
import { MyDocService } from '../services/my-doc.service';
import { ApiImplicitQuery } from '@nestjs/swagger/dist/decorators/api-implicit-query.decorator';

@Controller({
  version: "1",
  path: "my-doc",
})
export class MyDocController {
  constructor(private readonly myDocService: MyDocService) {}

  @Get("users")
  async getUsers() {
    return await this.myDocService
      .getAllUsers()
      .then((response) => response);
  }

  @Get("users/:id")
  async getUsersById(@Param("id") id: string) {
    return await this.myDocService
      .getUser(id)
      .then((response) => response);
  }

  @Get("news/:id")
  @ApiImplicitQuery({
    name: "sort",
    required: false,
    type: String,
  })
  async getNews(@Param("id") id: string, @Query("sort") sort: "asc" | "desc") {
    const sortBy: "asc" | "desc" = sort ? sort : "asc";
    return await this.myDocService
      .getNews(id, sortBy)
      .then((response) => response);
  }

  @Get("news/")
  @ApiImplicitQuery({
    name: "sort",
    required: false,
    type: String,
  })
  async getMultipleNews(
    @Query("ids") ids: string,
    @Query("sort") sort: "asc" | "desc"
  ) {
    const idArray = ids.split(",");
    const sortBy: "asc" | "desc" = sort ? sort : "asc";
    return await this.myDocService
      .getMultipleNews(idArray, sortBy)
      .then((response) => response);
  }

  @Get("team/:id")
  async getMembers(@Param("id") id: string) {
    return await this.myDocService.getMembers(id).then((response) => response);
  }

  @Get("image/:id")
  async getImage(@Param("id") id: string) {
    return await this.myDocService.getImage(id).then((response) => response);
  }
}
