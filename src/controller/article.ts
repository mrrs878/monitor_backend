import { Controller, Get, Param, Put, Req, Body } from '@nestjs/common';
import ArticleService from '../service/article';

@Controller('/article')
export default class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('/all')
  getAllArticles() {
    return this.articleService.findAll();
  }

  @Get('/:id')
  getArticle(@Param() params) {
    return this.articleService.findOneById(params.id);
  }

  @Put('/:id')
  updateArticle(@Param() params, @Body() body) {
    return this.articleService.updateArticleById({ ...body, _id: params.id });
  }
}
